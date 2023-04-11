const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const resetBtn = document.getElementById("resetBtn");
const width = canvas.width;
const height = canvas.height;
const maxLevel = 5;
const delay = 10000 / (3 ** maxLevel - 1);

resetBtn.addEventListener("click", reset);

async function reset() {
    // blokuj przycisk resetowania
    resetBtn.disabled = true;
    // wyczyść płótno   
    ctx.clearRect(0, 0, width, height);
    // animacja
    await drawSierpinski(0, height, width, height, width / 2, 0, maxLevel);
    // odblokuj przycisk resetowania
    resetBtn.disabled = false;
}

async function drawSierpinski(x1, y1, x2, y2, x3, y3, level) {
    if (level <= 0) {
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
        await drawSierpinski(x1, y1, x12, y12, x31, y31, level - 1);
        await drawSierpinski(x2, y2, x23, y23, x12, y12, level - 1);
        await drawSierpinski(x3, y3, x31, y31, x23, y23, level - 1);
    }
}

// uruchom animację
reset();

//<canvas id="canvas" width="50" height="50"></canvas>
//<button id="resetBtn" disabled>Resetuj</button>
//<script src="/skrypty/trojkatsierpinskiego.js"></script>