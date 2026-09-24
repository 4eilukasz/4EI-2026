// Pobierz dane, wyświetl bilet

let imie = prompt('Podaj imię');
let nazwisko = prompt('Podaj nazwisko');
let rodzaj = prompt('Jaki bilet? [ulgowy/normalny]?');
let cena = parseFloat(prompt("Podaj cenę biletu"));

document.write("<h2>" + imie + " " + nazwisko + "</h2></br>Rodzaj: " + rodzaj + " Cena: " + cena);