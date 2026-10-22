// Twoje rozwiazanie

const min = 1;
const max = 10;

let losowe = Math.floor(Math.random() * (max - min + 1)) + min;

document.getElementById("wynik").textContent = "wylosowano " + losowe;