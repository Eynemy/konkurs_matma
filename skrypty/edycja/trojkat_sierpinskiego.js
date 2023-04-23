let myMaxDepth = 0;
let myFillColor = "#000000";
const myCanvas = document.getElementById("mySierpinskiCanvas");
const myCtx = myCanvas.getContext("2d");

function myDrawTriangle(x1, y1, x2, y2, x3, y3, depth) {
    if (depth === myMaxDepth) {
        myCtx.beginPath();
        myCtx.moveTo(x1, y1);
        myCtx.lineTo(x2, y2);
        myCtx.lineTo(x3, y3);
        myCtx.closePath();
        myCtx.fillStyle = myFillColor;
        myCtx.fill();
    } else {
        let x4 = (x1 + x2) / 2;
        let y4 = (y1 + y2) / 2;
        let x5 = (x1 + x3) / 2;
        let y5 = (y1 + y3) / 2;
        let x6 = (x2 + x3) / 2;
        let y6 = (y2 + y3) / 2;

        myDrawTriangle(x1, y1, x4, y4, x5, y5, depth + 1);
        myDrawTriangle(x4, y4, x2, y2, x6, y6, depth + 1);
        myDrawTriangle(x5, y5, x6, y6, x3, y3, depth + 1);
    }
}

function myDrawSierpinski() {
    myCtx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    myDrawTriangle(0,
                   myCanvas.height - 1,
                   myCanvas.width - 1,
                   myCanvas.height - 1,
                   myCanvas.width / 2,
                   0,
                   0);
}

function myNextIteration() {
    myMaxDepth++;
    myDrawSierpinski();
}

function myReset() {
    myMaxDepth = 0;
    myDrawSierpinski();
}

function myChangeColor() {
    myFillColor = document.getElementById("myColorPicker").value;
    myDrawSierpinski();
}

myDrawSierpinski();