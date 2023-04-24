var zm_lgCanvas = document.getElementById("ZM_logo");
var zm_lgCtx = zm_lgCanvas.getContext("2d");
var zm_lgSize = 50;
var zm_lgMaxDepth = 0;

zm_lgCtx.fillStyle = "white";

function zm_lgDrawTriangle(x, y, size, depth) {
  if (depth === zm_lgMaxDepth) {
    zm_lgCtx.beginPath();
    zm_lgCtx.moveTo(x, y);
    zm_lgCtx.lineTo(x + size / 2, y + size);
    zm_lgCtx.lineTo(x - size / 2, y + size);
    zm_lgCtx.closePath();
    zm_lgCtx.fill();
  } else {
    var newSize = size / 2;
    zm_lgDrawTriangle(x, y, newSize, depth + 1);
    zm_lgDrawTriangle(x - newSize / 2, y + newSize, newSize, depth + 1);
    zm_lgDrawTriangle(x + newSize / 2, y + newSize, newSize, depth + 1);
  }
}

function zm_lgDrawSierpinski() {
  zm_lgCtx.clearRect(0, 0, zm_lgCanvas.width, zm_lgCanvas.height);
  zm_lgDrawTriangle(zm_lgCanvas.width / 2, zm_lgSize / 2, zm_lgSize, 0);
  if (zm_lgMaxDepth < 4) {
    zm_lgMaxDepth++;
    setTimeout(zm_lgDrawSierpinski, 500);
  }
}

zm_lgCanvas.addEventListener("click", function() {
  zm_lgMaxDepth = 0;
  zm_lgDrawSierpinski();
});

zm_lgDrawSierpinski();