var canvas;
var canvas1;
var canvas3;
var canvas2;

var context;

function init() {

  canvas = document.getElementById("canvas-large");

  canvas1 = document.getElementById("canvas-1");
  canvas2 = document.getElementById("canvas-2");
  canvas3 = document.getElementById("canvas-3");

  context = canvas.getContext("2d");

  drawBox1();
  drawBox2();
  drawBox3();

  canvas1.addEventListener('click', copy, false);
  canvas2.addEventListener('click', copy, false);
  canvas3.addEventListener('click', copy, false);
}

function copy(e) {
  var destinationCanvas = document.getElementById(e.target.id);
  context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(destinationCanvas,0,0);
}
