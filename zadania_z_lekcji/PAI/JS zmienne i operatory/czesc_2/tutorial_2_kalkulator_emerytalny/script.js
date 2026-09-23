// Stała WIEK_EMERYTALNY = 65
const WIEK_EMERYTALNY = 65;
let imie = prompt("Podaj imię");
let wiek = Number(prompt("Podaj wiek"));
let lata_do_emerytury = WIEK_EMERYTALNY - wiek;
document.write("Witaj " + imie + ". Do emerytury zstało ci " + lata_do_emerytury + " lat.");