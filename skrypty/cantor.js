// Tworzenie zbioru Cantora
var canvas3 = document.getElementById("Cantor-Canvas3"); 
var ctx3 = canvas3.getContext("2d"); 
var depth = 0; 
function drawCantorSet(x, y, len, depth) { 
    if (depth === 0) {
        if (body.classList.contains('dark-mode')) {
            ctx3.fillStyle = "white";
        } else {
            ctx3.fillStyle = "black";
        }
        ctx3.fillRect(x, y, len, 20);
    } else {
        if (body.classList.contains('dark-mode')) {
            ctx3.fillStyle = "white";
        } else {
            ctx3.fillStyle = "black";
        }
        ctx3.fillRect(x, y, len, 20);
        y += 30;
        drawCantorSet(x, y, len / 3, depth - 1);
        drawCantorSet(x + len * 2 / 3, y, len / 3, depth - 1);
    }
}
function animate() {    // Funkcja animująca rysowanie
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height); 
    drawCantorSet(0, 0, canvas3.width, depth); 
    depth++; // Zwiększenie iteracji o 1
    if (depth > 6) { // Jeśli osiągnięto maksymalną ilość iteracji (6), zresetuj ją do 0.
        depth = 0;
    }
    setTimeout(animate, 1000);  // Ustawienie opóźnienia (1 sekunda) i ponowne wywołanie funkcji animate
}
animate();  


/*
if (depth === 0) {  
        ctx3.fillRect(x, y, len, 20);
        if (body.classList.contains('dark-mode')) {
            ctx2.fillStyle = "white";
        } else {
            ctx2.fillStyle = "black";
        }
    } 
    else {  
        ctx3.fillRect(x, y, len, 20);
        y += 30;
        drawCantorSet(x, y, len / 3, depth - 1);
        drawCantorSet(x + len * 2 / 3, y, len / 3, depth - 1);
    }*/