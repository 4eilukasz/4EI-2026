// 1 szklanka = 250 ml

const szklanka = 250;

let ilosc = Number(prompt("Ile szklanek wody potrzebujesz wlać?"))

let ml = ilosc * szklanka;

let litry = ml / 1000;

document.write(ilosc + " szklanek to " + ml + " miliitrów</br>Czyli " + litry + " litrów.");