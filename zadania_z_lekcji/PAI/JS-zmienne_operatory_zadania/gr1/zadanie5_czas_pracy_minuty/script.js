// Użyj Math.floor() i %

let czas = Number(prompt("Podaj liczbe minut"));

let godziny = Math.floor(czas / 60);
let minuty = czas % 60;

document.write(czas + " minut to " + godziny + " godzin i " + minuty + " minut");