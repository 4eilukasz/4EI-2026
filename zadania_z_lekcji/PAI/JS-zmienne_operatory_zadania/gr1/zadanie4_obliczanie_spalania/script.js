// Wzór: (litry / km) * 100

let km = Number(prompt("Ile przejechałeś [km]?"));
let litry = Number(prompt("Ile zużyłeś paliwa [l]?"));

let spalanie = (litry / km) * 100;

document.write("Średnie spalanie wynosi " + spalanie + "l/100km.");