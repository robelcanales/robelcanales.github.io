var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    

    function createObstacle(x, y, damage, rotation, hitZone, image, offsetX, offsetY, scaleX, scaleY){
      var hitZoneSize = hitZone; //size of the obstacle's collision area
      var damageFromObstacle = damage; //amount of damage it deals in collision
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obstacle and gives it a hitzone and damage it deals, and stores it in a variable
      obstacleHitZone.x = x; //sets the x value of the obstacle
      obstacleHitZone.y = y; //sets the y value of the obstacle
      game.addGameItem(obstacleHitZone); //adds the obstacle and puts it into the game
      var obstacleImage = draw.bitmap(image); //draws the image as a bitmap and stores it into obstacleImage
      obstacleHitZone.addChild(obstacleImage); //takes the obstacle image and adds it as a child in the hitzone
      obstacleImage.x = offsetX; // offsets the image horizontally relative to the hitzone
      obstacleImage.y = offsetY; // offsets the image vertically relative to the hitzone
      obstacleImage.scaleX = scaleX; //scales the image horizontally relative to the hitzone
      obstacleImage.scaleY = scaleY; //scales the image vertically relative to the hitzone
  

      obstacleHitZone.rotationalVelocity = rotation; // rotates the object and increases the velocity of the rotation

    };





  function createEnemy(x, y, hitZone, velocity, damage, score, offsetX, offsetY, scaleX, scaleY, image){
    var enemy = game.createGameItem("enemy", hitZone); // Creates enemy game item with a hitzone and stores it in the variable enemy
    var enemyImage = draw.bitmap(image); //creates the image of the enemy and stores it in variable enemyImage
    enemyImage.x = offsetX; //horizontal offset from the image to the hitzone 
    enemyImage.y = offsetY; // vertical offset from the image to the hitzone
    enemy.addChild(enemyImage); //attaches the image to the enemy object
    enemy.x = x; // sets the enemy x position
    enemy.y = y; // sets the enemy y position
    game.addGameItem(enemy); //adds the enemy to the game
    enemyImage.scaleX = scaleX; //scales the enemy relative to the hitzone horizontally
    enemyImage.scaleY = scaleY; //scales the enemy relative to the hitzone vertically

    enemy.velocityX -= velocity; //animates the enemy moving across the screen

    //handles when Halle collides with the enemy
    enemy.onPlayerCollision = function(){
      game.changeIntegrity(damage); //reduces player health 
    };

    //handles when Halle shoots the enemy
    enemy.onProjectileCollision = function(){
      game.increaseScore(score); //increases the player's score when Halle shoots the enemy

      //On projectile collision, shrinks/fadeOut/flyTo enemy image
      //enemy.fadeOut();
      //enemy.flyTo(x,y);
      enemy.shrink();
    };
  }

   
  
    
  


  function createReward(x, y, hitZone, offsetX, offsetY, scaleX, scaleY, velocity, health, image){
    var reward = game.createGameItem("reward", hitZone); // Creates reward game item with a hitzone of 25 and stores it in the variable reward
    var rewardImage = draw.bitmap(image); //creates the image of the reward and stores it in variable rewardImage
    rewardImage.x = offsetX; //horizontal offset from the image to the hitzone 
    rewardImage.y = offsetY; // vertical offset from the image to the hitzone
    reward.addChild(rewardImage); //attaches the image to the reward object
    reward.x = x; // sets the reward x position
    reward.y = y; // sets the reward y position
    game.addGameItem(reward); //adds the reward to the game
    rewardImage.scaleX = scaleX; //scales the reward relative to the hitzone horizontally
    rewardImage.scaleY = scaleY; //scales the reward relative to the hitzone vertically
    

    reward.velocityX -= velocity; //animates the reward moving across the screen

    //handles when Halle collides with the reward
    reward.onPlayerCollision = function(){
      game.changeIntegrity(health); //increases player health 
      reward.fadeOut();
    };

  }
      

  function createLevelMarker(x, y, hitZone, offsetX, offsetY, scaleX, scaleY, velocity, image){
    var levelMarker = game.createGameItem("level", hitZone); // Creates levelMarker game item with a hitzone of 25 and stores it in the variable levelMarker
    var levelImage = draw.bitmap(image); //creates the image of the levelMarker and stores it in variable levelMarkerImage
    levelImage.x = offsetX; //horizontal offset from the image to the hitzone 
    levelImage.y = offsetY; // vertical offset from the image to the hitzone
    levelMarker.addChild(levelImage); //attaches the image to the levelMarker object
    levelMarker.x = x; // sets the levelMarker x position
    levelMarker.y = y; // sets the levelMarker y position
    game.addGameItem(levelMarker); //adds the levelMarker to the game
    levelImage.scaleX = scaleX; //scales the level relative to the hitzone horizontally
    levelImage.scaleY = scaleY; //scales the level relative to the hitzone vertically



    levelMarker.velocityX -= velocity; //animates the levelMarker moving across the screen

    //handles when Halle collides with the levelMarker
    levelMarker.onPlayerCollision = function(){
      levelMarker.fadeOut();
      startLevel();
    };

  }

        
        

    function startLevel() {
      // TODO 13 goes below here
      
      var level = levelData[currentLevel];// fetches the current level from the levelData array, and stores it inside the level variable
      var levelObjects = level.gameItems; //retrieves the array of gameItems and stores it in levelObjects variable

      for(var i = 0; i < levelObjects.length; i++){
        var element = levelObjects[i];

        if(element.type === "obstacle"){
          createObstacle(element.x, element.y, element.damage, element.rotation, element.hitZone, element.image, element.offsetX, element.offsetY, element.scaleX, element.scaleY);
        }

        if(element.type === "enemy"){
          createEnemy(element.x, element.y, element.hitZone, element.velocity, element.damage, element.score, element.offsetX, element.offsetY, element.scaleX, element.scaleY, element.image);
        }

        if(element.type === "reward"){
          createReward(element.x, element.y, element.hitZone, element.offsetX, element.offsetY, element.scaleX, element.scaleY, element.velocity, element.health, element.image);
        }

        if(element.type === "levelMarker"){
          createLevelMarker(element.x, element.y, element.hitZone, element.offsetX, element.offsetY, element.scaleX, element.scaleY, element.velocity, element.image);
        }

      }


      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
