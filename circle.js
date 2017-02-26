/*
* 
* Filename: circle.js
* Created: Aadarsha Shrestha (aadarsha.shrestha.nepal@gmail.com)
* 
* Draws the circle on the canvas.
* The function colorChanger(color) fills the circle with the pecified color.
* 
*/

// Finds the canvas and specifies the parameters for drawing circle
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 150;

// Draws a circle
context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.strokeStyle = '#000000';
context.stroke();

// Fills the circle with the selected color(Black, Blue or Red)
function colorChanger(color) {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      if (color.id == 'black') {
            context.fillStyle = 'black';
            context.fill();
      }
      else if (color.id == 'blue') {
            context.fillStyle = 'blue';
            context.fill();
      }
      else if (color.id == 'red') {
            context.fillStyle = 'red';
            context.fill();
      }
}