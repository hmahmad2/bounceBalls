var canvas = document.getElementById("sandbox");
var c = canvas.getContext("2d");

c.beginPath();
c.lineWidth = "5";
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