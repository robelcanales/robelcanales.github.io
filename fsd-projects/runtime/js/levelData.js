var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY - 110, damage: 10, rotation: 0, hitZone: 25, image: "img/spikes.png", offsetX: -25, offsetY: -25, scaleX: 0.05, scaleY: 0.05},
          { type: "obstacle", x: 600, y: groundY - 10, damage: 20, rotation: 0, hitZone: 25, image: "img/spikes.png", offsetX: -25, offsetY: -25, scaleX: 0.05, scaleY: 0.05},
          { type: "obstacle", x: 800, y: groundY - 110, damage: 70, rotation: 0, hitZone: 25, image: "img/spikes.png", offsetX: -25, offsetY: -25, scaleX: 0.05, scaleY: 0.05},
          
          { type: "enemy", x: 400, y: groundY - 80, hitZone: 40, velocity: 3, damage: -50, score: 300, offsetX: -25, offsetY: -25, scaleX: 0.2, scaleY: 0.2, image: "img/zombie.png"},
          { type: "enemy", x: 1900, y: groundY - 80, hitZone: 40, velocity: 8, damage: -50, score: 400, offsetX: -25, offsetY: -25, scaleX: 0.2, scaleY: 0.2, image: "img/zombie.png"},
          { type: "enemy", x: 2400, y: groundY - 60},
          { type: "reward", x: 2000, y: groundY - 100},

          { type: "levelMarker", x: 3200, y: groundY - 100},
  
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY - 110, damage: 10, rotation: 0, hitZone: 25, image: "img/spikes.png", offsetX: -25, offsetY: -25, scaleX: 0.05, scaleY: 0.05},
          { type: "obstacle", x: 600, y: groundY, damage: 10 },
          { type: "obstacle", x: 900, y: groundY, damage: 10 },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
