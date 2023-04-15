// skrypt na  logo (animacja powstawania trojkata sierpinskiego)
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var size = 50;
var maxDepth = 0;

ctx.fillStyle = "white"; //wybranie koloru obiektu

function drawTriangle(x, y, size, depth) {
  if (depth === maxDepth) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + size / 2, y + size);
    ctx.lineTo(x - size / 2, y + size);
    ctx.closePath();
    ctx.fill();
  } else {
    var newSize = size / 2;
    drawTriangle(x, y, newSize, depth + 1);
    drawTriangle(x - newSize / 2, y + newSize, newSize, depth + 1);
    drawTriangle(x + newSize / 2, y + newSize, newSize, depth + 1);
  }
}

function drawSierpinski() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTriangle(canvas.width / 2, size / 2, size, 0);
  if (maxDepth < 4) {
    maxDepth++;
    setTimeout(drawSierpinski, 1000);
  }
}

canvas.addEventListener("click", function() {
  maxDepth = 0;
  drawSierpinski();
});

drawSierpinski();