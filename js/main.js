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

  var steps = 8;

  context.strokeStyle="rgba(0,0,0,.2)";
  for(var c=0; c<=steps; c++){
    context.beginPath();
    context.moveTo((c * canvas.width / steps), 0);
    context.lineTo((c * canvas.width / steps), canvas.height);
    context.stroke();
  }
  for(var r=0; r<=steps; r++){
    context.beginPath();
    context.moveTo(0, (r * canvas.height / steps));
    context.lineTo(canvas.width, (r * canvas.height / steps));
    context.stroke();
  }
}
