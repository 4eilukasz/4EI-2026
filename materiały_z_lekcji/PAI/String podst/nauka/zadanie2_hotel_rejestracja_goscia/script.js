// Zadanie 2: Czyszczenie danych meldunkowych i generowanie karty gościa
// Standard wypisu: document.getElementById("wynik").textContent

// KROK 1: Zaimplementuj funkcję oczyscDaneTekstowe(tekstWejsciowy)
// Funkcja powinna użyć metody trim() i zwrócić oczyszczony łańcuch znaków.
function oczyscDaneTekstowe(tekstWejsciowy) {
  // Twoje rozwiazanie: użyj metody trim()
  return "";
}

// KROK 2: Zaimplementuj funkcję przygotujKarcieMeldunkowa(imieNazwiskoRaw, numerPokojuRaw, liczbaDni, cenaZaDobe)
// Oczyść dane wejściowe, oblicz koszt i sformatuj raport w szablonie tekstowym z grawisami.
function przygotujKarcieMeldunkowa(imieNazwiskoRaw, numerPokojuRaw, liczbaDni, cenaZaDobe) {
  // Twoje rozwiazanie
  return "";
}

// KROK 3: Dane testowe
const surowyGosc = "   Janusz Kowalczyk \t\n";
const surowyPokoj = "   304-A   ";
const dniPobytu = 3;
const stawkaDoba = 280.00;

// KROK 4: Wypisz rezultat do elementu #wynik oraz konsoli
const elWynik = document.getElementById("wynik");
if (elWynik) {
  elWynik.textContent = "Oczekiwanie na implementację karty meldunkowej...";
}
