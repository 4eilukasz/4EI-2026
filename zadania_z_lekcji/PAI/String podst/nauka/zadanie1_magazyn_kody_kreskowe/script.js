// Zadanie 1: Weryfikacja i normalizacja kodów magazynowych SKU
// Standard wypisu: document.getElementById("wynik").textContent

// KROK 1: Zdefiniuj funkcję sprawdzDlugoscKodu(kod, wymaganaDlugosc)
// Funkcja powinna sprawdzić właściwość length i zwrócić true lub false.
function sprawdzDlugoscKodu(kod, wymaganaDlugosc) {
  // Twoje rozwiazanie: użyj właściwości length
  if(kod.length === wymaganaDlugosc){
    const status = true;
    return status;
  } else{
    const status = false;
    return status;
  }
}

// KROK 2: Zdefiniuj funkcję normalizujKodSKU(kod)
// Funkcja powinna przekształcić tekst do wielkich liter za pomocą toUpperCase().
function normalizujKodSKU(kod) {
  // Twoje rozwiazanie
  return kod.toUpperCase();
}

// KROK 3: Zdefiniuj funkcję utworzSlugNazwy(nazwaTowaru)
// Funkcja powinna przekształcić tekst do małych liter za pomocą toLowerCase().
function utworzSlugNazwy(nazwaTowaru) {
  // Twoje rozwiazanie
  return nazwaTowaru.toLowerCase();
}

// KROK 4: Zdefiniuj dane testowe i wywołaj zaimplementowane funkcje
const testowyKod = "sku-8472";
const testowaNazwa = "Dysk Twardy SSD NVMe 1TB";

const sprawdzDlugosc = sprawdzDlugoscKodu(testowyKod, 8);
const kodWielkie = normalizujKodSKU(testowyKod);
const nazwaMale = utworzSlugNazwy(testowaNazwa);

const raport = `
=== SYSTEM MAGAZYNOWY WMS — MODUŁ KONTROLI KODÓW TOWAROWYCH ===
STATUS KODU TOWAROWEGO: ${testowyKod}. Kod SKU spełnia wymogi długości (8 znaków).
ETYKIETA KODOWA: ${kodWielkie}.
KONTROLA DŁUGOŚCI NAZWY: ${nazwaMale}. Nazwa asortymentu została pomyślnie zweryfikowana.`;

// KROK 5: Zbuduj raport i wypisz go do #wynik oraz konsoli
const elWynik = document.getElementById("wynik");
if (elWynik) {
  if(status === false){
    elWynik.textContent = "Tutaj pojawi się wygenerowany raport magazynowy.";
  } else{
    elWynik.textContent = raport;
  }
}