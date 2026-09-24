// 1h = 3600s

let godzina = Number(prompt("Podaj godzinę [0-23]"));
let minuta = Number(prompt("Podaj minutę [0-59]"));
let sekunda = Number(prompt("Podaj sekundę [0-23]"));

let godziny_sekundy = godzina * 60 * 60;
let minuty_sekundy = minuta * 60;
let suma_sekund = godziny_sekundy + minuty_sekundy + sekunda;

document.write("Od północy minęło: " + suma_sekund + " sekund.");