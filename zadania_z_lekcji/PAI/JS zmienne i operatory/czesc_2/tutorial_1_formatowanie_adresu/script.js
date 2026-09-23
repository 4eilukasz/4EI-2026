// Pobierz dane i wyświetl adres
let ulica = prompt("Podaj ulicę");
let numer_domu = Number(prompt("Podaj numer domu"));
let kod_pocztowy = prompt("Podaj kod pocztowy (XX-XXX)");
let miasto = prompt("Podaj miasto");
document.write(ulica + " " + numer_domu + "</br>" + kod_pocztowy + " " + miasto);