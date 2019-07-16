// alert(123);
var canvas = document.getElementById("ballCanvas");
// get methods for a 2d canvas
var can = canvas.getContext("2d");
// width and height of the browser window
var canWidth = window.innerWidth;
var canHeight = window.innerHeight;
// set the canvas to be the width and height of the window
canvas.width = canWidth;
canvas.height = canHeight;

// since this is some sort of dynamic object, I think I'll make it a function
function BounceBall() {
   this.radius = Math.random() * 10 + 10;
   this.x = Math.random() * (canWidth - this.radius * 2) + this.radius;
}