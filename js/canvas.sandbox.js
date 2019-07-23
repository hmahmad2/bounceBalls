var canvas = document.getElementById("sandbox");
var c = canvas.getContext("2d");
// set the size of the canvas to be the inner-size of the browser window
var wx = window.innerWidth; // window encompasses the console.
var wy = window.innerHeight; // get the current size of the inner browser
canvas.width = wx;
canvas.height = wy;

c.beginPath(); // begins a path, or restarts the current path
c.lineWidth = "5"; // width of line
c.strokeStyle = "green"; // line is green
// following coordinates are (x, y) starting from the top-left of the canvas
c.moveTo(0, 75); // start coordinates (px)
c.lineTo(250, 75); // end coordinates (px)
c.stroke(); // draws

c.beginPath();
c.lineWidth = "5";
c.strokeStyle = "purple";
c.moveTo(10, 0);
c.lineTo(190, 100);
c.stroke();

// QUADRATIC CURVE
c.beginPath();
c.strokeStyle = "blue";
c.moveTo(50, 100);
c.quadraticCurveTo(55, 234, 160, 30);
c.stroke();

// CIRCLE
c.beginPath();
c.arc(45, 45, 50, 0, 2*Math.PI);
// c.fill(); // Fills the circle entirely
c.stroke(); // draws the perimeter of the circle