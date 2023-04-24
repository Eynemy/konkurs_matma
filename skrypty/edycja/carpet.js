let dyw12canvas = document.getElementById("dyw12carpetCanvas");
let dyw12ctx = dyw12canvas.getContext("2d");
let dyw12iteration = 0;
let dyw12maxIteration = 5;
let dyw12carpetColor = "#000000";

function dyw12drawCarpet(iteration) {
    let size = dyw12canvas.width / Math.pow(3, iteration);
    for (let x = 0; x < Math.pow(3, iteration); x++) {
        for (let y = 0; y < Math.pow(3, iteration); y++) {
            if (x % 3 === 1 && y % 3 === 1) {
                dyw12ctx.clearRect(x * size, y * size, size, size);
            }
        }
    }
}

function dyw12resetCarpet() {
    dyw12ctx.fillStyle = dyw12carpetColor;
    dyw12ctx.fillRect(0, 0, dyw12canvas.width, dyw12canvas.height);
    dyw12iteration = 0;
    document.getElementById("dyw12iterationCounter").innerHTML = dyw12iteration;
}

document.getElementById("dyw12nextButton").onclick = function() {
    if (dyw12iteration < dyw12maxIteration) {
        dyw12iteration++;
        document.getElementById("dyw12iterationCounter").innerHTML = dyw12iteration;
        dyw12drawCarpet(dyw12iteration);
    }
};

document.getElementById("dyw12resetButton").onclick = function() {
    dyw12resetCarpet();
};

document.getElementById("dyw12colorPicker").onchange = function() {
    dyw12carpetColor = this.value;
    dyw12resetCarpet();
    for (let i = 1; i <= dyw12iteration; i++) {
        dyw12drawCarpet(i);
    }
};

dyw12resetCarpet();

// Kod do obsługi trybu ciemnego
function updateCarpetColor() {
    if (body.classList.contains('dark-mode')) {
        if (dyw12carpetColor === "#000000") {
            document.getElementById("dyw12colorPicker").value = "#ffffff";
            dyw12carpetColor = "#ffffff";
            dyw12resetCarpet();
            for (let i = 1; i <= dyw12iteration; i++) {
                dyw12drawCarpet(i);
            }
        }
    } else {
        if (dyw12carpetColor === "#ffffff") {
            document.getElementById("dyw12colorPicker").value = "#000000";
            dyw12carpetColor = "#000000";
            dyw12resetCarpet();
            for (let i = 1; i <= dyw12iteration; i++) {
                dyw12drawCarpet(i);
            }
        }
    }
    }
    
    updateCarpetColor();
    
    toggle.addEventListener('change', () => {
        updateCarpetColor();
    });