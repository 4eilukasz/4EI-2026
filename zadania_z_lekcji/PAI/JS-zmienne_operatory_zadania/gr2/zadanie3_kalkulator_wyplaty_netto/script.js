// Stawka * Godziny

let stawka = Number(prompt("Podaj stawke godzinową"));
let liczba = Number(prompt("Podaj ilość przepracowanych godzin"));

let wyplata = stawka * liczba;

document.write("Twoja wypłata za " + liczba + " godzin przy stawce " + stawka + " zł wynosi " + wyplata + " zł")