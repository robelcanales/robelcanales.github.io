var init = function (window) {
  "use strict";
  var draw = window.opspark.draw,
    physikz = window.opspark.racket.physikz,
    app = window.opspark.makeApp(),
    canvas = app.canvas,
    view = app.view,
    fps = draw.fps("#000");

  window.opspark.makeGame = function () {
    window.opspark.game = {};
    var game = window.opspark.game;

    ///////////////////
    // PROGRAM SETUP //
    ///////////////////

    // TODO 1 : Declare and initialize our variables
    var circle; // variable to hold a single circle when making circles / iterating
    var circles = []; // variable to store all circles in an array

    // TODO 2 : Create a function that draws a circle
    function drawCircle() {
      circle = draw.randomCircleInArea(canvas, true, true, "#999", 2); // uses an existing function to draw a circle of random size, color and location within the canvas.
      physikz.addRandomVelocity(circle, canvas, 5, 5); // uses the physikz library to add a random velocity and direction to the circle
      view.addChild(circle); // adds ther circle as a child of view so that the circle shows on screen
      circles.push(circle); // saves the circle to an array of circles by pushing it to the end of an array
    }

    // TODO 3 : Call the drawCircle() function

    /*
        drawCircle(); // draws a circle in the canvas only once and stores it in the circles array
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        */

    // TODO 7 : Use a loop to create multiple circles

    for (var i = 0; i < 100; i++) {
      drawCircle();
    } // creates a loop to call the drawCircle function for 100 times, and stops when i equals 100

    ///////////////////
    // PROGRAM LOGIC //
    ///////////////////

    /* 
        This Function is called 60 times/second, producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
    function update() {
      // TODO 4 : Update the position of each circle using physikz.updatePosition()

      /*
            physikz.updatePosition(circles[0]); // tells JavaScript to update the position of the hard-coded number of a circle in a array
            physikz.updatePosition(circles[1]);
            physikz.updatePosition(circles[2]);
            physikz.updatePosition(circles[3]);
            physikz.updatePosition(circles[4]);
            */

      // TODO 5 : Call game.checkCirclePosition() on your circles

      /*
           game.checkCirclePosition(circles[0]); // uses hard-coded numbers and makes circles that move off the scrren show again on the other side
           game.checkCirclePosition(circles[1]);
           game.checkCirclePosition(circles[2]);
           game.checkCirclePosition(circles[3]);
           game.checkCirclePosition(circles[4]);
           */

      // TODO 8 / TODO 9 : Iterate over the array

      // Creates a loop through the circles array and increases by 1 until the loop stops after processing all circles in the array
      for (var i = 0; i < circles.length; i++) {
        physikz.updatePosition(circles[i]); //  tells JavaScript to update the position of a circle in a array, and uses the variable i to access each circle in it without being hard-coded
        game.checkCirclePosition(circles[i]); // uses the variable i to ensure each circle in the array appears once moving off the screen without being hard-coded
      }
    }

    /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
    game.checkCirclePosition = function (circle) {
      // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
      if (circle.x > canvas.width) {
        circle.x = 0;
      }

      // TODO 6 : YOUR CODE STARTS HERE //////////////////////

      // Once a circle goes past the left side of the canvas, it will reappear on the right side
      if (circle.x < 0) {
        circle.x = canvas.width;
      }

      // Once a circle goes past the top side of the canvas, it will reappear on the bottom side
      if (circle.y < 0) {
        circle.y = canvas.height;
      }

      // Once a circle goes past the bottom side of the canvas, it will reappear on the top side
      if (circle.y > canvas.height) {
        circle.y = 0;
      }

      // YOUR TODO 6 CODE ENDS HERE //////////////////////////
    };

    /////////////////////////////////////////////////////////////
    // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
    /////////////////////////////////////////////////////////////

    view.addChild(fps);
    app.addUpdateable(fps);

    game.circle = circle;
    game.circles = circles;
    game.drawCircle = drawCircle;
    game.update = update;

    app.addUpdateable(window.opspark.game);
  };
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = init;
}
