// Zadanie 4: Weryfikacja kodów rabatowych i fakturowanie koszyka zakupowego
// Standard wypisu: document.getElementById("wynik").textContent

// KROK 1: Zdefiniuj funkcję obliczRabat(kodRaw)
// Oczyść kod, zamień na wielkie litery, sprawdź długość (4-8 znaków)
// oraz pierwszy znak (R -> 0.20, V -> 0.30, inne -> 0.10; zły kod -> 0)
function obliczRabat(kodRaw) {
  // Twoje rozwiazanie
  const kodCzysty = kodRaw.trim();
  const kodCzystyDuze = kodCzysty.toUpperCase();
  let rabat;
  if(kodCzystyDuze.length >= 4 && kodCzystyDuze.length <= 8){
    let pierwszaLitera = kodCzystyDuze[0];
    switch(pierwszaLitera){
      case 'R':
        rabat = 0.20;
        break;
      case 'V':
        rabat = 0.30;
        break;
      default:
        rabat = 0.10;
        break;
    }
  } else{
    rabat = 0;
  }
  return rabat;
}

// KROK 2: Zdefiniuj funkcję generujRozliczenieKoszyka(klientRaw, koszykNetto, kodRaw)
// Oblicz kwoty, podatek VAT (23%) i sformatuj wielowierszowy paragon w szablonie tekstowym.
function generujRozliczenieKoszyka(klientRaw, koszykNetto, kodRaw) {
  // Twoje rozwiazanie
  let klientCzysty = klientRaw.trim();
  let kwotaRabatu = koszykNetto * rabat;
  let nettoPoRabacie = koszykNetto - kwotaRabatu;
  let kwotaVat = nettoPoRabacie * 0.23;
  let brutto = (nettoPoRabacie + kwotaVat).toFixed(2);
  const raport = `=== SKLEP INTERNETOWY ELEKTRO-MAX — PODSUMOWANIE KOSZYKA ZAKUPOWEGO ===
  WERYFIKACJA KODU RABATOWEGO:
    Rabat: ${rabat * 100}%
    Kod promocyjny pomyślnie zweryfikowany i naliczony.
  SZCZEGÓŁOWE ROZLICZENIE FINANSOWE ZAMÓWIENIA KLIENTA:
    Imię i nazwisko: ${klientCzysty}
    Kwota: ${brutto}
  Dziękujemy za zakupy w naszym sklepie internetowym! Zapraszamy ponownie.`
  return raport;
}

// KROK 3: Dane testowe
// Dane testowe wczytywane z pliku dane.js (stałe DANE_KOSZYKA_KLIENT, DANE_KOSZYKA_NETTO, DANE_KOSZYKA_KOD)
const klientTest = DANE_KOSZYKA_KLIENT;
const nettoTest = DANE_KOSZYKA_NETTO;
const kodTest = DANE_KOSZYKA_KOD;
let rabat = obliczRabat(kodTest);
let raport = generujRozliczenieKoszyka(klientTest, nettoTest, rabat);

// KROK 4: Wypisz rezultat do elementu #wynik oraz konsoli
const elWynik = document.getElementById("wynik");
if (elWynik) {
  elWynik.textContent = raport;
}
