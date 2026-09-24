// Litry = (trasa/100)*spalanie

let trasa = Number(prompt("Podaj długość trasy [km]"));
let spalanie = Number(prompt("Podaj średnie spalanie"));
let cena = Number(prompt("Podaj cenę paliwa za litr"));

let litry = (trasa / 100) * spalanie;
let koszt = litry * cena;
document.write("Potrzebujesz " + litry.toFixed(2) + " litrów paliwa.</br>Koszt wyprawy: " + koszt.toFixed(2) + " zł.");