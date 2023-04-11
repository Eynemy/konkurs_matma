const toggleSwitch = document.querySelector('#dark-mode-toggle');
const body = document.querySelector('body');
    
// Funkcja zmieniająca tryb ciemny na jasny i odwrotnie
function switchTheme(e) {
    if (e.target.checked) {
    body.classList.add('dark-mode');
    } else {
    body.classList.remove('dark-mode');
    }    
}
    
// Listener obsługujący zmianę stanu przełącznika
toggleSwitch.addEventListener('change', switchTheme, false);