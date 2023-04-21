//spadanie napisu gegrafia fraktalna na stronie glownej

// Przypisanie wartości "Geometria Fraktalna" do zmiennej "text".
const text = 'Geometria Fraktalna';

// Wybór elementu HTML, do którego będziemy dodawać litery z tekstu.
const container = document.querySelector('.tekst');

// Zmienna przechowująca aktualną pozycję poziomą (lewo-prawo) litery na ekranie.
let left = 0;

// Szerokość spacji między literami.
const spaceWidth = 10;

// Pętla iterująca po każdej literze w zmiennej "text".
for (let i = 0; i < text.length; i++) {

  // Tworzenie elementu <span> dla każdej litery, ustawianie klasy CSS "letter" i ustawianie wartości tekstowej na literę.
  const letter = document.createElement('span');
  letter.classList.add('letter');
  letter.textContent = text[i];

  // Ustawienie pozycji poziomej litery na aktualną wartość "left".
  letter.style.left = `${left}px`;

  // Dodanie elementu <span> do kontenera.
  container.appendChild(letter);

  // Ustawienie opóźnienia dla animacji spadającej litery, opóźnienie zależne od indeksu litery w tekście (i).
  setTimeout(() => {
    letter.style.top = '0px';
  }, i * 500);

  // Sprawdzenie, czy litera to spacja. Jeśli tak, dodaj wartość szerokości spacji do zmiennej "left". 
  // W przeciwnym razie dodaj szerokość litery.
  if (text[i] === ' ') {
    left += spaceWidth;
  } else {
    left += letter.offsetWidth;
  }
}