// Oblicz Gross i Tax

const STAWKA_VAT = 0.23;

let towar = prompt("Podaj nazwę towaru");
let cena_netto = parseFloat(prompt("Podaj cenę netto towaru"));

let podatek = cena_netto * STAWKA_VAT;
let cena_brutto = cena_netto + podatek;

document.write("Towar: " + towar + ",</br> Cena netto: " + cena_netto + ",</br>Podatek VAT (23%) " + podatek.toFixed(2) + ",</br>Cena brutto: " + cena_brutto.toFixed(2));