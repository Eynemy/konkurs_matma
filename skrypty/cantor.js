// Tworzenie zbioru Cantora
var canvas3 = document.getElementById("Cantor-Canvas3"); // Odniesienie do elementu canvas
var ctx3 = canvas3.getContext("2d"); // Uzyskanie kontekstu rysowania 2D dla elementu canvas
var depth = 0; // Zmienna przechowująca iteracje
function drawCantorSet(x, y, len, depth) { // Funkcja rysująca trójkąt Sierpińskiego o zadanej pozycji i długości
    if (depth === 0) {  // Warunek końcowy rekursji: jeśli osiągnięto zadaną iteracje, rysuj prostokąt
        ctx3.fillRect(x, y, len, 20);
    } 
    else {  // W przeciwnym razie, rysuj 3 prostokąty Sierpińskiego na pozycjach wyznaczonych na podstawie zadanej długości
        ctx3.fillRect(x, y, len, 20);
        y += 30;
        drawCantorSet(x, y, len / 3, depth - 1);
        drawCantorSet(x + len * 2 / 3, y, len / 3, depth - 1);
    }
}
function animate() {    // Funkcja animująca rysowanie trójkąta Sierpińskiego.
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height); // Wyczyszczenie elementu canvas przed rysowaniem
    drawCantorSet(0, 0, canvas3.width, depth); // Narysowanie trójkąta Sierpińskiego na aktualnej iteracji
    depth++; // Zwiększenie iteracji o 1
    if (depth > 6) { // Jeśli osiągnięto maksymalną ilość iteracji (6), zresetuj ją do 0.
        depth = 0;
    }
    setTimeout(animate, 1000);  // Ustawienie opóźnienia (1 sekunda) i ponowne wywołanie funkcji animate
}
animate();  // Wywołanie funkcji animate na starcie programu
