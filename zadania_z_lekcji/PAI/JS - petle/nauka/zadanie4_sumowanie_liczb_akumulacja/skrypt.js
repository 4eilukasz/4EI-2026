// Pobierz liczbę od użytkownika
// Zadeklaruj sumę
// Napisz pętlę for
// Wypisz wynik PO pętli
let liczba = Number(prompt("podaj liczbe"));
let suma = 0;
for(let i=1; i<=liczba; i++){
    suma = suma + i;
}
document.write("suma liczb od 1 do " + liczba + " wynosi: " + suma);