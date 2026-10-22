// Twoje rozwiązanie

let cena = Number(prompt("podaj cene"));
let rabat = Number(prompt("podaj rabat (%)"));

let cena_po_rabacie = cena * (1 - rabat / 100);

cena_po_rabacie_zaokraglona = Math.round(cena_po_rabacie * 100) / 100;

document.getElementById("wynik").textContent = "cena przed rabatem: " + cena + " zł\nrabat: " + rabat + "%\ncena po rabacie: " + cena_po_rabacie_zaokraglona + " zł"; 