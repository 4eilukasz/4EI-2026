// Twoje rozwiązanie

let liczba = Number(prompt("podaj liczbe"));
const min = 0;
const max = 100;

Math.max(min, liczba);
Math.min(max, liczba);

const clamp = Math.min(max, Math.max(min, liczba));

document.getElementById("wynik").textContent = "Wynik po clamp: " + clamp;