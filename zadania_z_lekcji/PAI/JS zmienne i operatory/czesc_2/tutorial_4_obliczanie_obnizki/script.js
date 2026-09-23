// Pomnóż przez 0.8
cena1 = Number(prompt("Podaj cenę produkty przed obniżką"));
cena2 = (cena1 * 0.8).toFixed(2);
document.write("Cena przed obniżką: " + cena1 + " zł" + "</br> Cena po rabacie (-20%): " + cena2 + " zł");