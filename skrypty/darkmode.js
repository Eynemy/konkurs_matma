
// ustawianie ciemnego trybu
const toggle = document.querySelector('#dark-mode-toggle');
const body = document.body;

// Odczytaj wybór użytkownika z localStorage
if (localStorage.getItem('dark-mode') === 'true') {
  body.classList.add('dark-mode');
  toggle.checked = true;
}

// Zapisz wybór użytkownika w localStorage
toggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));

  draw(); // reset plotna dla krzywej kocha ww dark mode

// wyczyszzcenie plotna trojkat samopodobienstwo po zmianie na dark-mode
  clearCanvas2();
  drawTriangle2(0, 0, width2, height2, level2);
});

