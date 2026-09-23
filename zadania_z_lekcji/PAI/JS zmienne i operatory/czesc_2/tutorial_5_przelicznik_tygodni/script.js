// Math.floor i %
dni = Number(prompt("Podaj liczbę dni"));
tygodnie = Math.floor(dni / 7);
reszta = dni % 7;
document.write(dni + " dni to " + tygodnie + " tygodnie i " + reszta + " dni.");