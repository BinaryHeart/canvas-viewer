var canvas;

function init() {

  canvas = document.getElementById("canvas-large");

  var canvas1 = document.getElementById("canvas-1"),
      canvas2 = document.getElementById("canvas-2"),
      canvas3 = document.getElementById("canvas-3");

  drawBox1(canvas1);
  drawBox2(canvas2);
  drawBox3(canvas3);

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

  context.font="10px Courier";
  context.fillText("0,0", 2, 10);
  context.fillText(canvas.width+","+canvas.height,canvas.width-45,canvas.height-5);
}
