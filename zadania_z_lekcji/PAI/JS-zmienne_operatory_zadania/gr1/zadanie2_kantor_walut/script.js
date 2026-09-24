// Kantor wymiany walut
const EUR = 4.30;
const USD = 3.90;

let zl = Number(prompt("Ile złotych chcesz wymienić?"));
let zl_eur = (zl / EUR).toFixed(2);
let zl_usd = (zl / USD).toFixed(2);

document.write("Kwota " + zl + " PLN to:</br>" + zl_eur + " EUR</br>" + zl_usd + " USD");