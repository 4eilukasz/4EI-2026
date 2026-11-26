// Zadanie 4: Weryfikacja kodów rabatowych i fakturowanie koszyka zakupowego
// Standard wypisu: document.getElementById("wynik").textContent

// KROK 1: Zdefiniuj funkcję obliczRabat(kodRaw)
// Oczyść kod, zamień na wielkie litery, sprawdź długość (4-8 znaków)
// oraz pierwszy znak (R -> 0.20, V -> 0.30, inne -> 0.10; zły kod -> 0)
function obliczRabat(kodRaw) {
  // Twoje rozwiazanie
  return 0;
}

// KROK 2: Zdefiniuj funkcję generujRozliczenieKoszyka(klientRaw, koszykNetto, kodRaw)
// Oblicz kwoty, podatek VAT (23%) i sformatuj wielowierszowy paragon w szablonie tekstowym.
function generujRozliczenieKoszyka(klientRaw, koszykNetto, kodRaw) {
  // Twoje rozwiazanie
  return "";
}

// KROK 3: Dane testowe
// Dane testowe wczytywane z pliku dane.js (stałe DANE_KOSZYKA_KLIENT, DANE_KOSZYKA_NETTO, DANE_KOSZYKA_KOD)
const klientTest = DANE_KOSZYKA_KLIENT;
const nettoTest = DANE_KOSZYKA_NETTO;
const kodTest = DANE_KOSZYKA_KOD;

// KROK 4: Wypisz rezultat do elementu #wynik oraz konsoli
const elWynik = document.getElementById("wynik");
if (elWynik) {
  elWynik.textContent = "Oczekiwanie na rozliczenie koszyka klienta...";
}
