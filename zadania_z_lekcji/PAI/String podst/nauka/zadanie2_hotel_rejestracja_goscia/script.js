// Zadanie 2: Czyszczenie danych meldunkowych i generowanie karty gościa
// Standard wypisu: document.getElementById("wynik").textContent

// KROK 1: Zaimplementuj funkcję oczyscDaneTekstowe(tekstWejsciowy)
// Funkcja powinna użyć metody trim() i zwrócić oczyszczony łańcuch znaków.
function oczyscDaneTekstowe(tekstWejsciowy) {
  // Twoje rozwiazanie: użyj metody trim()
  const czystyNapis = tekstWejsciowy.trim();
  return czystyNapis;
}

// KROK 2: Zaimplementuj funkcję przygotujKarcieMeldunkowa(imieNazwiskoRaw, numerPokojuRaw, liczbaDni, cenaZaDobe)
// Oczyść dane wejściowe, oblicz koszt i sformatuj raport w szablonie tekstowym z grawisami.
function przygotujKarcieMeldunkowa(imieNazwiskoRaw, numerPokojuRaw, liczbaDni, cenaZaDobe) {
  // Twoje rozwiazanie
  const czysteImieNazwisko = imieNazwiskoRaw.trim();
  const czystyPokoj = numerPokojuRaw.trim();
  const ileDni = Number(liczbaDni);
  const cenaDoba = Number(cenaZaDobe);
  const kosztPobytu = (ileDni * cenaDoba).toFixed(2);
  const raport = `=== GRAND HOTEL & SPA — KARTA MELDUNKOWA GOŚCIA HOTELOWEGO ===
  POTWIERDZENIE REJESTRACJI POBYTU:
    Imię i nazwisko: ${czysteImieNazwisko}
    Numer pokoju: ${czystyPokoj}
  Dane gościa zostały pomyślnie oczyszczone z białych znaków.
  ROZLICZENIE POBYTU:
    Liczba dni: ${ileDni}
    Cena za dobę: ${cenaDoba}
    Koszt pobytu: ${kosztPobytu}
  Płatność uregulowana w recepcji przy zameldowaniu.
  Życzymy udanego pobytu i zapraszamy do korzystania ze strefy Wellness!
  `;
  return raport;
}

// KROK 3: Dane testowe
const surowyGosc = "   Janusz Kowalczyk \t\n";
const surowyPokoj = "   304-A   ";
const dniPobytu = 3;
const stawkaDoba = 280.00;

const status = przygotujKarcieMeldunkowa(surowyGosc, surowyPokoj, dniPobytu, stawkaDoba);

// KROK 4: Wypisz rezultat do elementu #wynik oraz konsoli
const elWynik = document.getElementById("wynik");
if (elWynik) {
  elWynik.textContent = status;
  console.log(status);
}
