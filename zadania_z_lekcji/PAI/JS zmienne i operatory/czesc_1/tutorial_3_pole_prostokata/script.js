// Pamiętaj o Number()!
let a = Number(prompt("Podaj pierwszy bok prostokąta "));
let b = Number(prompt("Podaj drugi bok prostokąta "));
let pole = a * b;
let obwod = (2 * a) + (2 * b);
document.write("Pole: " + pole + "<br>");
document.write("Obwod: " + obwod);