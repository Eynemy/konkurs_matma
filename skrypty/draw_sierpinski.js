// rysowanie trojkata sierpinskiego z nastepnymi iteracjami
window.onload = function() {
    drawTriangle2(0, 0, width2, height2, level2);  // wywolanie funkcji po przeladowaniu strony
}
var canvas2 = document.getElementById("trojkat");
var ctx2 = canvas2.getContext("2d");
var width2 = canvas2.width;
var height2 = canvas2.height;
var level2 = 0;

drawTriangle2(0, 0, width2, height2, level2);

function drawTriangle2(x, y, w, h, level) {
    if (level == 0) {
        ctx2.beginPath();
        ctx2.moveTo(x, y);
        ctx2.lineTo(x + w, y);
        ctx2.lineTo(x + w / 2, y + h);
        ctx2.closePath();
        //ctx2.fillStyle = "black"; //zmiana koloru trojkata #006400
        if (body.classList.contains('dark-mode')) {
            ctx2.fillStyle = "white";
        } else {
            ctx2.fillStyle = "black";
        }
        ctx2.fill();
    } else {
        drawTriangle2(x, y, w / 2, h / 2, level - 1);
        drawTriangle2(x + w / 2, y, w / 2, h / 2, level - 1);
        drawTriangle2(x + w / 4, y + h / 2, w / 2, h / 2, level - 1);
    }
}
function nextIteration() {
    if (level2 < 7) {
        level2++;
        clearCanvas2();
        drawTriangle2(0, 0, width2, height2, level2);
    }
}

function reset() {
    level2 = 0;
    clearCanvas2();
    drawTriangle2(0, 0, width2, height2, level2);
}
toggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
    nextIteration();
});

function clearCanvas2() {
    ctx2.clearRect(0, 0, width2, height2);
}
