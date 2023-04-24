var kcvCanvas = document.getElementById("kcvCanvas");
var kcvCtx = kcvCanvas.getContext("2d");
var kcvNextButton = document.getElementById("kcvNext");
var kcvResetButton = document.getElementById("kcvReset");
var kcvIterationsText = document.getElementById("kcvIterations");
var kcvColorInput = document.getElementById("kcvColor");
var kcvIterations = 0;
var kcvPoints = [[50, 300], [750, 300]];
kcvCanvas.width = 800;
kcvCanvas.height = 350;
kcvCtx.fillStyle = kcvColorInput.value;
kcvCtx.strokeStyle = kcvColorInput.value;
kcvDrawLine(kcvPoints);
kcvNextButton.addEventListener("click", function() {
    if (kcvIterations < 7) {
        kcvNextIteration();
        kcvIterations++;
        kcvIterationsText.textContent = kcvIterations;
    }
});
kcvResetButton.addEventListener("click", function() {
    kcvReset();
    kcvIterationsText.textContent = kcvIterations;
});
kcvColorInput.addEventListener("input", function() {
    kcvCtx.fillStyle = this.value;
    kcvCtx.strokeStyle = this.value;
    kcvDraw();
});

function kcvNextIteration() {
    var newPoints = [];
    for (var i = 0; i < kcvPoints.length - 1; i++) {
        var a = kcvPoints[i];
        var b = kcvPoints[i + 1];
        var c = [
            a[0] + (b[0] - a[0]) / 3,
            a[1] + (b[1] - a[1]) / 3
        ];
        var d = [
            a[0] + (b[0] - a[0]) * 2 / 3,
            a[1] + (b[1] - a[1]) * 2 / 3
        ];
        var e = kcvRotate(c, d, Math.PI / 3);
        newPoints.push(a);
        newPoints.push(c);
        newPoints.push(e);
        newPoints.push(d);
    }
    newPoints.push(kcvPoints[kcvPoints.length - 1]);
    kcvPoints = newPoints;
    kcvDraw();
}
function kcvReset() {
    kcvPoints = [[50, 300], [750, 300]];
    kcvIterations = 0;
    kcvDraw();
}
function kcvDraw() {
    kcvCtx.clearRect(0, 0, kcvCanvas.width, kcvCanvas.height);
    kcvDrawLine(kcvPoints);
}
function kcvDrawLine(points) {
    kcvCtx.beginPath();
    kcvCtx.moveTo(points[0][0], points[0][1]);
    for (var i = 1; i < points.length; i++) {
        kcvCtx.lineTo(points[i][0], points[i][1]);
    }
    kcvCtx.stroke();
}
function kcvRotate(a, b, angle) {
    return [
        (a[0] - b[0]) * Math.cos(angle) - (a[1] - b[1]) * Math.sin(angle) + b[0],
        (a[0] - b[0]) * Math.sin(angle) + (a[1] - b[1]) * Math.cos(angle) + b[1]
    ];
}




// Znajdź element body
var kcvBody = document.querySelector("body");

// Dodaj nasłuchiwacz zmiany klasy na elemencie body
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.attributeName === "class") {
            var currentClass = mutation.target.className;
            if (currentClass.includes("dark-mode")) {
                // Jeśli strona jest w trybie ciemnym i kolor linii jest czarny, zmień go na biały
                if (kcvCtx.strokeStyle === "#000000") {
                    kcvCtx.strokeStyle = "#ffffff";
                    kcvColorInput.value = "#ffffff";
                }
            } else {
                // Jeśli strona jest w trybie jasnym i kolor linii jest biały, zmień go na czarny
                if (kcvCtx.strokeStyle === "#ffffff") {
                    kcvCtx.strokeStyle = "#000000";
                    kcvColorInput.value = "#000000";
                }
            }
            kcvDraw();
        }
    });
});

// Uruchom nasłuchiwanie zmiany klasy na elemencie body
observer.observe(kcvBody, {
    attributes: true
});
