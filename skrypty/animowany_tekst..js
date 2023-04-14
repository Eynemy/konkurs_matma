
const text = 'Geografia Fraktalna';
const container = document.querySelector('.tekst');
let left = 0;
const spaceWidth = 10;

for (let i = 0; i < text.length; i++) {
  const letter = document.createElement('span');
  letter.classList.add('letter');
  letter.textContent = text[i];
  letter.style.left = `${left}px`;
  container.appendChild(letter);
  
  setTimeout(() => {
    letter.style.top = '0px';
  }, i * 500);
  
  if (text[i] === ' ') {
    left += spaceWidth;
  } else {
    left += letter.offsetWidth;
  }
}