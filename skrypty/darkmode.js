
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
});