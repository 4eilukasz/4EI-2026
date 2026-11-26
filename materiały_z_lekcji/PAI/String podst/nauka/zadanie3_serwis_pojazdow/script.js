// Zadanie 3: Analiza kodów zleceń serwisowych na podstawie prefiksu i sufiksu
// Standard wypisu: document.getElementById("wynik").textContent

// KROK 1: Zdefiniuj funkcję analizujZlecenie(kodRaw, modelPojazdu)
// Funkcja powinna:
// - oczyścić kod metodą trim()
// - sprawdzić długość (min. 5 znaków)
// - pobrać pierwszy znak kod[0] i ustalić kategorię
// - pobrać ostatni znak kod[kod.length - 1] i ustalić priorytet
// - zwrócić sformatowany tekst raportu
function analizujZlecenie(kodRaw, modelPojazdu) {
  // Twoje rozwiazanie
  return "";
}

// KROK 2: Dane testowe
// Dane testowe wczytywane z pliku dane.js (stałe DANE_ZLECENIA_KOD i DANE_ZLECENIA_MODEL)
const kodWejsciowy = DANE_ZLECENIA_KOD;
const pojazdModel = DANE_ZLECENIA_MODEL;

// KROK 3: Wywołaj funkcję i wypisz rezultat do #wynik oraz konsoli
const elWynik = document.getElementById("wynik");
if (elWynik) {
  elWynik.textContent = "Oczekiwanie na analizę zlecenia warsztatowego...";
}
