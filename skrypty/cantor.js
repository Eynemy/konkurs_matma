var canvas3 = document.getElementById("Cantor-Canvas3");
var ctx3 = canvas3.getContext("2d");
var depth = 0;
function drawCantorSet(x, y, len, depth) {
    if (depth === 0) {
        ctx3.fillRect(x, y, len, 20);
    } else {
        ctx3.fillRect(x, y, len, 20);
        y += 30;
        drawCantorSet(x, y, len / 3, depth - 1);
        drawCantorSet(x + len * 2 / 3, y, len / 3, depth - 1);
    }
}
function animate() {
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
    drawCantorSet(0, 0, canvas3.width, depth);
    depth++;
    if (depth > 6) {
        depth = 0;
    }
    setTimeout(animate, 1000);
}
animate();