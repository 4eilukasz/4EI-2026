// Rachunek + (Rachunek * Napiwek%)

let kwota = Number(prompt("Kwota rachunku"));
let osoby = Number(prompt("Liczba osób"));
let napiwek = Number(prompt("Wysokość napiwku [%]"));

let kwota_napiwku = kwota * napiwek / 100
let suma = kwota + kwota_napiwku;
let udzial = suma / osoby;
document.write("Rachunek: " + kwota + "zł</br>Napiwek:" + kwota_napiwku  + "zł</br>Razem " + suma + " zł</br>Na osobę: " + udzial + " zł");