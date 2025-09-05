$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(400, 604, 150, 10, "yellow");
    createPlatform(23, 630, 80, 30, "blue");
    createPlatform(720, 530, 120, 30, "red");
    createPlatform(506, 400, 60, 20, "brown");
    createPlatform(1050, 650, 10, 20, "brown");
    createPlatform(1306, 650, 60, 20, "red");
    createPlatform(206, 370, 60, 10, "brown");
    createPlatform(120, 270, 20, 20, "brown");
    createPlatform(320, 140, 100, 10, "yellow");
    createPlatform(520, 220, 40, 10, "white");
    createPlatform(790, 190, 40, 10, "white");
    createPlatform(1100, 300, 40, 10, "brown");
    createPlatform(1340, 200, 40, 10, "green");
    createPlatform(100, 10, 5, 150, "black");
    createPlatform(1100, 350, 160, 5, "green");

    // TODO 3 - Create Collectables
    createCollectable("banana", 450, 550);
    createCollectable("apple", 1314, 590);
    createCollectable("mango", 200, 130);
    createCollectable("coconut", 680, 80);
    createCollectable("guava", 1336, 110);

    // TODO 4 - Create Cannons
    createCannon("left", 650, 300);
    createCannon("right", 310, 2500);
    createCannon("right", 550, 1740);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
