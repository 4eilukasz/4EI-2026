# Pomoc: Szybka ściąga i zestawienie materiałów

Moduł: **T06: Obiekt String — wyszukiwanie i wycinanie w napisie**

---

## 1. Zestawienie struktury zadania

Każde zadanie w katalogu `nauka/` oraz `sprawdzian/` posiada dwa równoległe zestawy plików:

| Element | Folder zadania (szablon startowy) | Podfolder `rozwiazanie/` |
|:-------:|:----------------------------------|:-------------------------|
| **`index.html`** | Kompletna struktura dokumentu HTML z kontenerem `#wynik` i podpiętym skryptem. | W pełni działający plik referencyjny z identyczną strukturą HTML. |
| **`style.css`** | Gotowe style bazowe zawierające regułę `#wynik { white-space: pre-wrap; }`. | Tożsamy arkusz stylów CSS. |
| **`dane.js`** | Zewnętrzny plik danych (zadania 3–5 oraz zadania sprawdzianu) wczytywany przed `script.js`. | Identyczny plik danych referencyjnych dla rozwiązania. |
| **`script.js`** | Szablon z sygnaturami funkcji i komentarzami `// Twoje rozwiazanie`. | Kompletna, w 100% działająca implementacja referencyjna. |
| **`instrukcja.md`**| Treść zadania, specyfikacja parametrów oraz sekcja „Treść do wpisania”. | — |

---

## 2. Ściąga składniowa metod Obiektu String

Wszystkie metody obiektu `String` zwracają nową wartość — nie modyfikują oryginalnego napisu w pamięci.

```javascript
const tekst = "Logistyka_PL_2026.pdf";

// 1. Sprawdzanie obecności i granic (zwracają boolean true/false):
tekst.includes("PL");            // true  - sprawdza czy fragment istnieje
tekst.startsWith("Logistyka");   // true  - sprawdza czy napis zaczyna się od frazy
tekst.endsWith(".pdf");          // true  - sprawdza czy napis kończy się frazą

// 2. Lokalizacja indeksu znaku (zwraca indeks 0...N lub -1 gdy brak):
tekst.indexOf("_");              // 9     - indeks pierwszego wystąpienia
tekst.lastIndexOf("_");          // 12    - indeks ostatniego wystąpienia
tekst.indexOf("@");              // -1    - brak podanego znaku

// Szukanie kolejnego wystąpienia od wskazanego indeksu (niezbędne przy wycinaniu między separatorami #):
// indexOf(szukanyZnak, odIndeksu)
const startTagu = tekst.indexOf("EMAIL:") + "EMAIL:".length;
const koniecTagu = tekst.indexOf("#", startTagu); // szuka '#' dopiero PO znaczniku EMAIL:
const wartoscEmail = tekst.slice(startTagu, koniecTagu);

// 3. Wycinanie fragmentów:
tekst.slice(0, 9);               // "Logistyka" - od indeksu 0 do 9 (bez 9)
tekst.slice(13, 17);             // "2026"      - od indeksu 13 do 17 (bez 17)
tekst.slice(-4);                 // ".pdf"      - ujemny indeks: odliczanie od końca
tekst.substring(0, 9);           // "Logistyka" - nie obsługuje indeksów ujemnych

// 4. Zamiana podłańcuchów:
tekst.replace("_", "-");         // "Logistyka-PL_2026.pdf"  (tylko pierwsze wystąpienie)
tekst.replaceAll("_", "-");      // "Logistyka-PL-2026.pdf"  (wszystkie wystąpienia)
```

---

## 3. Szybkie przypomnienie (5 kluczowych zasad)

1. **Konsola DevTools (F12):** Zawsze otwieraj kartę *Console* w przeglądarce przed rozpoczęciem pisania kodu. Pozwala to natychmiast wykryć literówki, brakujące nawiasy czy błędy składniowe.
2. **Względne ścieżki plików:** Skrypt dołączamy za pomocą `<script src="script.js"></script>`, a styl przez `<link rel="stylesheet" href="style.css">`. Pliki w tym samym folderze łączymy bezpośrednio nazwą pliku.
3. **Czyste funkcje z `return`:** W funkcjach przetwarzających operacje na napisach zawsze zwracaj wynik słowem kluczowym `return`. Nie umieszczaj wypisu do DOM ani `console.log` wewnątrz ciała funkcji.
4. **Standard wyjścia w Semestrze 2:** Wynik prezentujemy w elemencie `#wynik` za pomocą właściwości `textContent`. Dzięki regule CSS `white-space: pre-wrap;` zachowane zostaną wszystkie znaki nowej linii (`\n`).
5. **Niemutowalność tekstu:** Po wywołaniu `napis.replace(...)` lub `napis.slice(...)` wynik musisz przypisać do nowej stałej (`const wynik = napis.slice(...)`), w przeciwnym razie wycięty fragment zostanie utracony.
6. **Zewnętrzne pliki danych (`dane.js`):** W zadaniach złożonych dane wejściowe znajdują się w pliku `dane.js` dołączanym przed `script.js`. Stałe `DANE_...` są widoczne w programie bez konieczności importowania ani ponownego ich definiowania.
