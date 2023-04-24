var swCanvas = document.getElementById("swCanvas");
var swCtx = swCanvas.getContext("2d");
var swNextButton = document.getElementById("swNext");
var swResetButton = document.getElementById("swReset");
var swIterationsText = document.getElementById("swIterations");
var swColorInput = document.getElementById("swColor");
var swIterations = 0;
var swPoints = [[140, 560], [560, 560], [350, 119.3]];
swCanvas.width = 700;
swCanvas.height = 700;
swCtx.fillStyle = swColorInput.value;
swCtx.strokeStyle = swColorInput.value;
drawTriangle(swPoints);
swNextButton.addEventListener("click", function() {
    if (swIterations < 6) {
        nextIteration();
        swIterations++;
        swIterationsText.textContent = swIterations;
    }
});
swResetButton.addEventListener("click", function() {
    reset();
    swIterationsText.textContent = swIterations;
});
swColorInput.addEventListener("input", function() {
    swCtx.fillStyle = this.value;
    swCtx.strokeStyle = this.value;
    draw();
});
function nextIteration() {
    if (swIterations < 6) {
        var newPoints = [];
        for (var i = 0; i < swPoints.length; i++) {
            var a = swPoints[i];
            var b = swPoints[(i + 1) % swPoints.length];
            var c = [
                a[0] + (b[0] - a[0]) / 3,
                a[1] + (b[1] - a[1]) / 3
            ];
            var d = [
                a[0] + (b[0] - a[0]) * 2 / 3,
                a[1] + (b[1] - a[1]) * 2 / 3
            ];
            var e = rotate(c, d, -Math.PI / 3);
            newPoints.push(a);
            newPoints.push(c);
            newPoints.push(e);
            newPoints.push(d);
        }
        swPoints = newPoints;
        draw();
    }
}
function reset() {
    swPoints = [[140, 560], [560, 560], [350, 119.3]];
    swIterations = 0;
    draw();
}
function draw() {
    swCtx.clearRect(0, 0, swCanvas.width, swCanvas.height);
    drawTriangle(swPoints);
}
function drawTriangle(points) {
    swCtx.beginPath();
    swCtx.moveTo(points[0][0], points[0][1]);
    for (var i = 1; i < points.length; i++) {
        swCtx.lineTo(points[i][0], points[i][1]);
    }
    swCtx.closePath();
    swCtx.stroke();
    swCtx.fill();
}
function rotate(a, b, angle) {
    return [
        (a[0] - b[0]) * Math.cos(angle) - (a[1] - b[1]) * Math.sin(angle) + b[0],
        (a[0] - b[0]) * Math.sin(angle) + (a[1] - b[1]) * Math.cos(angle) + b[1]
    ];
}
// dark mose
function updateKochColor() {
    if (body.classList.contains('dark-mode')) {
        if (swColorInput.value === '#000000') {
            swColorInput.value = '#ffffff';
            swCtx.fillStyle = swColorInput.value;
            swCtx.strokeStyle = swColorInput.value;
            draw();
        }
    } else {
        if (swColorInput.value === '#ffffff') {
            swColorInput.value = '#000000';
            swCtx.fillStyle = swColorInput.value;
            swCtx.strokeStyle = swColorInput.value;
            draw();
        }
    }
}

updateKochColor();

toggle.addEventListener('change', () => {
    updateKochColor();
});