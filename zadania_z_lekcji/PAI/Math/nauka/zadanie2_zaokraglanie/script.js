// Twoje rozwiazanie

let liczba1 = 3.14159;
let liczba2 = 3.14159;
let zaokraglono1 = Math.round(liczba1);
let zaokraglono2 = Math.round(liczba2 * 100) / 100;

document.getElementById("wynik").textContent = zaokraglono1 + "<br>";
document.getElementById("wynik").textContent = zaokraglono2;
