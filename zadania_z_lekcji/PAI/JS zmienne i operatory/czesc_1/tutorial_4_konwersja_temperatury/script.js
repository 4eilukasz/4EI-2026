// Wpisz wzór poprawnie
let celcjusz = Number(prompt("Podaj temperaturę w stopniach Celcjusza:"));
let F = (celcjusz * (9/5)) + 32;
document.write("Temperatura w stopniach Fahrenheita to: " + F + "<br>");

let fahrenheit = Number(prompt("Podaj temperaturę w stopniach Fahrenheita:"));
let C = (fahrenheit - 32) * (5/9);
document.write("Temperatura w stopniach Celcjusza to: " + C);