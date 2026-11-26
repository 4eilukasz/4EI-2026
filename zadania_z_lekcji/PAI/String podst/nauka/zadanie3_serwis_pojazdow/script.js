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
  const kodCzysty = kodRaw.trim();
  let raport;
  if(kodCzysty.length >= 5){
    const kodCzystyDuze = kodCzysty.toUpperCase();
    const pierwszyZnak = kodCzystyDuze[0];
    let typPojazdu;
    switch(pierwszyZnak){
      case 'O':
        typPojazdu = 'Pojazd Osobowy';
        break;
      case 'C':
        typPojazdu = 'Pojazd Ciężarowy';
        break;
      case 'M':
        typPojazdu = 'Motocykl / Jednoślad';
        break;
      default:
        typPojazdu = 'Pojazd Specjalny / Inny';
        break;
    }
    let priorytet;
    const ostatniZnak = kodCzystyDuze[kodCzystyDuze.length - 1];
    switch(ostatniZnak){
      case 'P':
        priorytet = 'Pilny (Ekspres 24h';
        break;
      case 'S':
        priorytet = 'Standardowy (termin do 3 dni)';
        break;
      default:
        priorytet = 'Kolejkowy (termin do 7 dni)';
        break;
    }
    raport = `=== AUTORYZOWANY SERWIS POJAZDÓW — DIAGNOSTYKA ZLECEŃ NAPRAWCZYCH ===
    ANALIZA KODU ZLECENIA:
      Kod pojazdu: ${kodCzystyDuze}
      Kod pojazdu został pomyślnie zweryfikowany pod kątem prefiksu i sufiksu.
    KWALIFIKACJA POJAZDU DO STANOWISKA SERWISOWEGO:
      Model pojazdu: ${modelPojazdu}
      Przydzielono mechanika dyżurnego.
    STATUS PILNOŚCI:
      ${priorytet}
      Zlecenie przyjęte do harmonogramu napraw bieżących.`
  } else{
    raport = `=== AUTORYZOWANY SERWIS POJAZDÓW — DIAGNOSTYKA ZLECEŃ NAPRAWCZYCH ===
    Wprowadzone dane są niepoprawne`;
  }
  return raport;
}

// KROK 2: Dane testowe
// Dane testowe wczytywane z pliku dane.js (stałe DANE_ZLECENIA_KOD i DANE_ZLECENIA_MODEL)
const kodWejsciowy = DANE_ZLECENIA_KOD;
const pojazdModel = DANE_ZLECENIA_MODEL;
const raport = analizujZlecenie(kodWejsciowy, pojazdModel);

// KROK 3: Wywołaj funkcję i wypisz rezultat do #wynik oraz konsoli
const elWynik = document.getElementById("wynik");
if (elWynik) {
  elWynik.textContent = raport;
}
