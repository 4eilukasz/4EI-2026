// Użyj % do obliczenia reszty
let cukierki = Number(prompt("Podaj liczbę cukierków:"));
let dzieci = Number(prompt("Podaj liczbę dzieci:"));
let cukierki_dla_dzieci = Math.floor(cukierki/dzieci);
let reszta = cukierki % dzieci;
document.write("Każde dziecko dostanie " + cukierki_dla_dzieci + " cukierki/ów, a dla Ciebie zostanie " + reszta);