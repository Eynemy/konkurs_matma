/*
const canvas = document.getElementById("trojkat-logo-canvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const maxLevel = 5;
const delay = 10000 / (3 ** maxLevel - 1);

canvas.addEventListener("click", reset1);

async function reset1() {
    // wyczyść płótno   
    ctx.clearRect(0, 0, width, height);
    // animacja
    await drawSierpinski1(0, height, width, height, width / 2, 0, maxLevel);
}

async function drawSierpinski1(x1, y1, x2, y2, x3, y3, level) {
    if (level <= 0) {
        // ustaw kolor na:
        ctx.strokeStyle = "white";
        // rysuj trójkąt
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.closePath();
        ctx.stroke();
        // opóźnienie
        await new Promise(resolve => setTimeout(resolve, delay));
    
    } else {
        // dziel trójkąt na trzy mniejsze trójkąty
        const x12 = (x1 + x2) / 2;
        const y12 = (y1 + y2) / 2;
        const x23 = (x2 + x3) / 2;
        const y23 = (y2 + y3) / 2;
        const x31 = (x3 + x1) / 2;
        const y31 = (y3 + y1) / 2;
        // rysuj trójkąty 
        
        await drawSierpinski1(x1, y1, x12, y12, x31, y31, level - 1);
        
        await drawSierpinski1(x2, y2, x23, y23, x12, y12, level - 1);
        await drawSierpinski1(x3, y3, x31, y31, x23, y23, level - 1);
    }
}

// uruchom animację
reset1();
*/

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var size = 50;
var maxDepth = 0;

ctx.fillStyle = "white";

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