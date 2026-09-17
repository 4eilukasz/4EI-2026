// Oblicz średnią z 3 ocen
let ocena1 = Number(prompt("Podaj ocenę 1:"));
let ocena2 = Number(prompt("Podaj ocenę 2:"));
let ocena3 = Number(prompt("Podaj ocenę 3:"));
let srednia = (ocena1 + ocena2 + ocena3) / 3;
document.write("Ocena 1 to: " + ocena1 + "<br>");
document.write("Ocena 2 to: " + ocena2 + "<br>");
document.write("Ocena 3 to: " + ocena3 + "<br>");
document.write("Średnia to: " + srednia.toFixed(2));