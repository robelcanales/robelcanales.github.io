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
          { type: "obstacle", x: 400, y: groundY - 118, damage: 10, rotation: 0, hitZone: 20, image: "img/trash.png", offsetX: -36, offsetY: -30, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 600, y: groundY - 15, damage: 10, rotation: -3, hitZone: 20, image: "img/tumbleweed.png", offsetX: -25, offsetY: -25, scaleX: 0.31, scaleY: 0.31},
          { type: "obstacle", x: 1100, y: groundY - 15, damage: 10, rotation: -3, hitZone: 20, image: "img/tumbleweed.png", offsetX: -25, offsetY: -25, scaleX: 0.31, scaleY: 0.31},
          { type: "obstacle", x: 800, y: groundY - 110, damage: 10, rotation: 0, hitZone: 25, image: "img/trash.png", offsetX: -36, offsetY: -30, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 850, y: groundY - 110, damage: 10, rotation: 0, hitZone: 25, image: "img/trash.png", offsetX: -36, offsetY: -30, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 900, y: groundY - 110, damage: 10, rotation: 0, hitZone: 25, image: "img/trash.png", offsetX: -36, offsetY: -30, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 1200, y: groundY - 110, damage: 10, rotation: 0, hitZone: 25, image: "img/trash.png", offsetX: -36, offsetY: -30, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 1270, y: groundY - 110, damage: 10, rotation: 0, hitZone: 25, image: "img/trash.png", offsetX: -36, offsetY: -30, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 1340, y: groundY - 110, damage: 10, rotation: 0, hitZone: 25, image: "img/trash.png", offsetX: -36, offsetY: -30, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 1421, y: groundY - 110, damage: 10, rotation: 0, hitZone: 25, image: "img/trash.png", offsetX: -36, offsetY: -30, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 1491, y: groundY - 110, damage: 10, rotation: 0, hitZone: 25, image: "img/trash.png", offsetX: -36, offsetY: -30, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 1650, y: groundY - 15, damage: 10, rotation: -3, hitZone: 20, image: "img/tumbleweed.png", offsetX: -25, offsetY: -25, scaleX: 0.31, scaleY: 0.31},
        
          { type: "obstacle", x: 1900, y: groundY - 15, damage: 15, rotation: 0, hitZone: 16, image: "img/rock.png", offsetX: -30, offsetY: -19, scaleX: 0.12, scaleY: 0.12},
          { type: "obstacle", x: 2030, y: groundY - 15, damage: 15, rotation: 0, hitZone: 16, image: "img/rock.png", offsetX: -30, offsetY: -19, scaleX: 0.12, scaleY: 0.12},
          { type: "obstacle", x: 2160, y: groundY - 15, damage: 15, rotation: 0, hitZone: 16, image: "img/rock.png", offsetX: -30, offsetY: -19, scaleX: 0.12, scaleY: 0.12},
          { type: "obstacle", x: 2560, y: groundY - 15, damage: 15, rotation: 0, hitZone: 16, image: "img/rock.png", offsetX: -30, offsetY: -19, scaleX: 0.12, scaleY: 0.12},
          { type: "obstacle", x: 2760, y: groundY - 15, damage: 15, rotation: 0, hitZone: 16, image: "img/rock.png", offsetX: -30, offsetY: -19, scaleX: 0.12, scaleY: 0.12},
          
          
          { type: "enemy", x: 800, y: groundY - 80, hitZone: 40, velocity: 2, damage: -20, score: 300, offsetX: -25, offsetY: -25, scaleX: 0.2, scaleY: 0.2, image: "img/zombie.png"},
          { type: "enemy", x: 2000, y: groundY - 80, hitZone: 40, velocity: 3, damage: -20, score: 300, offsetX: -25, offsetY: -25, scaleX: 0.2, scaleY: 0.2, image: "img/zombie.png"},
          { type: "enemy", x: 1900, y: groundY - 80, hitZone: 40, velocity: 3, damage: -20, score: 400, offsetX: -25, offsetY: -25, scaleX: 0.2, scaleY: 0.2, image: "img/zombie.png"},
          { type: "enemy", x: 2200, y: groundY - 80, hitZone: 40, velocity: 3, damage: -20, score: 400, offsetX: -25, offsetY: -25, scaleX: 0.2, scaleY: 0.2, image: "img/zombie.png"},
          { type: "enemy", x: 2500, y: groundY - 80, hitZone: 40, velocity: 3, damage: -20, score: 400, offsetX: -25, offsetY: -25, scaleX: 0.2, scaleY: 0.2, image: "img/zombie.png"},
          { type: "enemy", x: 2800, y: groundY - 80, hitZone: 40, velocity: 3, damage: -20, score: 400, offsetX: -25, offsetY: -25, scaleX: 0.2, scaleY: 0.2, image: "img/zombie.png"},
          { type: "enemy", x: 3000, y: groundY - 80, hitZone: 40, velocity: 2, damage: -20, score: 400, offsetX: -25, offsetY: -25, scaleX: 0.2, scaleY: 0.2, image: "img/zombie.png"},
          { type: "enemy", x: 3100, y: groundY - 80, hitZone: 40, velocity: 2, damage: -20, score: 400, offsetX: -25, offsetY: -25, scaleX: 0.2, scaleY: 0.2, image: "img/zombie.png"},
          { type: "enemy", x: 3200, y: groundY - 80, hitZone: 40, velocity: 2, damage: -20, score: 400, offsetX: -25, offsetY: -25, scaleX: 0.2, scaleY: 0.2, image: "img/zombie.png"},
          { type: "enemy", x: 3400, y: groundY - 80, hitZone: 40, velocity: 2, damage: -20, score: 400, offsetX: -25, offsetY: -25, scaleX: 0.2, scaleY: 0.2, image: "img/zombie.png"},
          

          { type: "reward", x: 4900, y: groundY - 100, hitZone: 30, offsetX: -35, offsetY: -35, scaleX: 0.20, scaleY: 0.20, velocity: 3, health: 20, image: "img/gas.png"},

          { type: "levelMarker", x: 5300, y: groundY - 100, hitZone: 28, offsetX: -35, offsetY: -28, scaleX: 0.20, scaleY: 0.20, velocity: 3, image: "img/leaf.png"},
  
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY - 118, damage: 20, rotation: 0, hitZone: 20, image: "img/trash.png", offsetX: -36, offsetY: -30, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 500, y: groundY, damage: 20, rotation: 0, hitZone: 20, image: "img/water.png", offsetX: -36, offsetY: -25, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 600, y: groundY - 118, damage: 20, rotation: 0, hitZone: 20, image: "img/trash.png", offsetX: -36, offsetY: -30, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 700, y: groundY, damage: 20, rotation: 0, hitZone: 20, image: "img/water.png", offsetX: -36, offsetY: -25, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 800, y: groundY - 118, damage: 20, rotation: 0, hitZone: 20, image: "img/trash.png", offsetX: -36, offsetY: -30, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 900, y: groundY, damage: 20, rotation: 0, hitZone: 20, image: "img/water.png", offsetX: -36, offsetY: -25, scaleX: 0.15, scaleY: 0.15},

          { type: "enemy", x: 1900, y: groundY - 80, hitZone: 40, velocity: 5, damage: -50, score: 400, offsetX: -25, offsetY: -25, scaleX: 0.2, scaleY: 0.2, image: "img/zombie.png"},
          { type: "enemy", x: 2500, y: groundY - 80, hitZone: 40, velocity: 4, damage: -50, score: 400, offsetX: -25, offsetY: -25, scaleX: 0.2, scaleY: 0.2, image: "img/zombie.png"},

          { type: "obstacle", x: 1300, y: groundY - 118, damage: 20, rotation: 0, hitZone: 20, image: "img/trash.png", offsetX: -36, offsetY: -30, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 1400, y: groundY, damage: 20, rotation: 0, hitZone: 20, image: "img/water.png", offsetX: -36, offsetY: -25, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 1500, y: groundY - 118, damage: 20, rotation: 0, hitZone: 20, image: "img/trash.png", offsetX: -36, offsetY: -30, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 1600, y: groundY, damage: 20, rotation: 0, hitZone: 20, image: "img/water.png", offsetX: -36, offsetY: -25, scaleX: 0.15, scaleY: 0.15},

          { type: "reward", x: 2500, y: groundY - 100, hitZone: 30, offsetX: -35, offsetY: -35, scaleX: 0.20, scaleY: 0.20, velocity: 3, health: 20, image: "img/gas.png"},
          { type: "levelMarker", x: 2650, y: groundY - 100, hitZone: 28, offsetX: -35, offsetY: -28, scaleX: 0.20, scaleY: 0.20, velocity: 3, image: "img/leaf.png"},

        ],
      },
      {
        name: "Robot Finale",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 200, y: groundY - 118, damage: 20, rotation: 0, hitZone: 20, image: "img/trash.png", offsetX: -36, offsetY: -30, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 300, y: groundY, damage: 20, rotation: 0, hitZone: 20, image: "img/water.png", offsetX: -36, offsetY: -25, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 400, y: groundY - 118, damage: 20, rotation: 0, hitZone: 20, image: "img/trash.png", offsetX: -36, offsetY: -30, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 500, y: groundY, damage: 20, rotation: 0, hitZone: 20, image: "img/water.png", offsetX: -36, offsetY: -25, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 600, y: groundY - 118, damage: 20, rotation: 0, hitZone: 20, image: "img/trash.png", offsetX: -36, offsetY: -30, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 700, y: groundY, damage: 20, rotation: 0, hitZone: 20, image: "img/water.png", offsetX: -36, offsetY: -25, scaleX: 0.15, scaleY: 0.15},

          { type: "obstacle", x: 840, y: groundY, damage: 20, rotation: 0, hitZone: 20, image: "img/water.png", offsetX: -36, offsetY: -25, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 960, y: groundY, damage: 20, rotation: 0, hitZone: 20, image: "img/water.png", offsetX: -36, offsetY: -25, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 1080, y: groundY, damage: 20, rotation: 0, hitZone: 20, image: "img/water.png", offsetX: -36, offsetY: -25, scaleX: 0.15, scaleY: 0.15},
          
          { type: "enemy", x: 1900, y: groundY - 80, hitZone: 40, velocity: 5, damage: -50, score: 400, offsetX: -25, offsetY: -25, scaleX: 0.2, scaleY: 0.2, image: "img/zombie.png"},
          { type: "enemy", x: 2500, y: groundY - 80, hitZone: 40, velocity: 4, damage: -50, score: 400, offsetX: -25, offsetY: -25, scaleX: 0.2, scaleY: 0.2, image: "img/zombie.png"},
          { type: "enemy", x: 3100, y: groundY - 80, hitZone: 40, velocity: 5, damage: -50, score: 400, offsetX: -25, offsetY: -25, scaleX: 0.2, scaleY: 0.2, image: "img/zombie.png"},
          { type: "enemy", x: 3700, y: groundY - 80, hitZone: 40, velocity: 4, damage: -50, score: 400, offsetX: -25, offsetY: -25, scaleX: 0.2, scaleY: 0.2, image: "img/zombie.png"},
          { type: "enemy", x: 4300, y: groundY - 80, hitZone: 40, velocity: 6, damage: -50, score: 400, offsetX: -25, offsetY: -25, scaleX: 0.2, scaleY: 0.2, image: "img/zombie.png"},
          { type: "enemy", x: 5200, y: groundY - 80, hitZone: 40, velocity: 6, damage: -50, score: 400, offsetX: -25, offsetY: -25, scaleX: 0.2, scaleY: 0.2, image: "img/zombie.png"},
          { type: "enemy", x: 5800, y: groundY - 80, hitZone: 40, velocity: 6, damage: -50, score: 400, offsetX: -25, offsetY: -25, scaleX: 0.2, scaleY: 0.2, image: "img/zombie.png"},

          { type: "obstacle", x: 1300, y: groundY - 118, damage: 20, rotation: 0, hitZone: 20, image: "img/trash.png", offsetX: -36, offsetY: -30, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 1400, y: groundY, damage: 20, rotation: 0, hitZone: 20, image: "img/water.png", offsetX: -36, offsetY: -25, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 1500, y: groundY - 118, damage: 20, rotation: 0, hitZone: 20, image: "img/trash.png", offsetX: -36, offsetY: -30, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 1600, y: groundY, damage: 20, rotation: 0, hitZone: 20, image: "img/water.png", offsetX: -36, offsetY: -25, scaleX: 0.15, scaleY: 0.15},

          { type: "obstacle", x: 1900, y: groundY, damage: 20, rotation: 0, hitZone: 20, image: "img/water.png", offsetX: -36, offsetY: -25, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 2100, y: groundY, damage: 20, rotation: 0, hitZone: 20, image: "img/water.png", offsetX: -36, offsetY: -25, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 2400, y: groundY, damage: 20, rotation: 0, hitZone: 20, image: "img/water.png", offsetX: -36, offsetY: -25, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 2700, y: groundY, damage: 20, rotation: 0, hitZone: 20, image: "img/water.png", offsetX: -36, offsetY: -25, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 3000, y: groundY, damage: 20, rotation: 0, hitZone: 20, image: "img/water.png", offsetX: -36, offsetY: -25, scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 3300, y: groundY, damage: 20, rotation: 0, hitZone: 20, image: "img/water.png", offsetX: -36, offsetY: -25, scaleX: 0.15, scaleY: 0.15},
          

          { type: "reward", x: 2500, y: groundY - 100, hitZone: 30, offsetX: -35, offsetY: -35, scaleX: 0.20, scaleY: 0.20, velocity: 3, health: 20, image: "img/gas.png"},
          { type: "levelMarker", x: 5000, y: groundY - 100, hitZone: 28, offsetX: -35, offsetY: -28, scaleX: 0.20, scaleY: 0.20, velocity: 3, image: "img/leaf.png"},

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
