var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var tree;
        var buildings = [];
        
        
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game

            // var backgroundFill = draw.rect(canvasWidth, canvasHeight,'gray');
            
            var backgroundFill = draw.bitmap("img/sky.jpg"); //draws the sky and stores it in the variable backgroundFill
            backgroundFill.x = canvas.width - 3000; //sets the moon's x position
            backgroundFill.y = groundY - 4000; //sets the moon's y position        
        
            background.addChild(backgroundFill); //adds the backroundFill to the background object

            var groundFill = draw.bitmap("img/ground.jpg") //draws the ground and stores it in the variable groundFill
            groundFill.x = 0; //sets the ground's x position
            groundFill.y = groundY + 10; //sets the ground's y position
           
           background.addChild(groundFill); //adds the groundFill to the background object
            
            // TODO 2: - Add a moon and starfield
            /*
            for(var i = 0; i < 50; i++){
                var circle = draw.circle(2, "white", "LightGray", 2); //creates a circle with a specified radius, border color, fill color, alpha and stores it in the variable circle
                circle.x = canvasWidth * Math.random(); // sets a random x position within canvas width
                circle.y = groundY * Math.random(); //sets a random y position within groundY
                background.addChild(circle); // adds circle to the background container
            }

            var moon = draw.bitmap("img/moon.png"); //creates a bitmap object using the moon image and stores it in the variable moon
            moon.x = canvas.width - 400; //sets the moon's x position
            moon.y = groundY - 400; //sets the moon's y position
            moon.scaleX = 0.80; //scales the moon's width
            moon.scaleY = 0.80; //scales the moon's height
            background.addChild(moon); //add the moon to the background container

            */
            
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 3; ++i) {
                // var buildingColors = ["Pink", "Red", "LightBlue", "Black", "Yellow"]
                // var buildingHeight = 300 * Math.random(); //stores the value representing the height
                var building = draw.bitmap("img/building.png"); //draws a rectangle, and uses width, height, fill color, outline, and outline thickness 
                building.x = 800 * i; //sets the x value of the building
                building.y = groundY - 387; //sets the y value of the building
                building.scaleX = 0.5; // scales the x value of building    
                building.scaleY = 0.5; // scales the y value of building
                background.addChild(building); //adds the building to the background container
                buildings.push(building); //takes the building and puts it into the array
            }
                            
            /* TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png"); //creates a bitmap object using the tree image and stores it in the variable tree 
            tree.x = 600; //sets the x value of the tree
            tree.y = groundY - 230; //sets the y value of the tree
            background.addChild(tree); //adds the tree to the background container
            */

        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            /* TODO 3: Part 2 - Move the tree!
            tree.x = tree.x - 1; //moves the tree to the left by subtracting from it's current x position

            // checks if the tree has gone off the left and resets to the right
            if (tree.x < -200) {
                tree.x = canvasWidth;
            }
            */
 

            
            // TODO 4: Part 2 - Parallax

            // Loop through all buildings in background
            for(var i = 0; i < buildings.length; i++){ 
                var building = buildings[i]; //takes an index of the buildings array 
                building.x -= 1; //moves building to the left and how fast it is

                //If building moves off the left side of the screen
                if (building.x < -250){
                    building.x = canvasWidth; //reset position to right side of screen
                } //checks if the x value has come true, and if true, it takes the x value and makes it canvasWidth
            } //every time 

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
