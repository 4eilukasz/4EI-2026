Wersja materiału dydaktycznego przygotowana z myślą o uczniach preferujących jednoznaczny, dosłowny przekaz instruktażowy.

---

## 1. Słowniczek pojęć tego działu

- **Łańcuch znaków (String):** Ciąg liter, cyfr, spacji i symboli ujęty w cudzysłów pojedynczy, podwójny lub grawis.
- **Indeks znaku:** Numer pozycji znaku w tekście liczony od zera. Pierwszy znak ma indeks 0, drugi ma indeks 1.
- **Podłańcuch (podnapis):** Dowolny wycięty fragment dłuższego tekstu.
- **Niemutowalność:** Właściwość polegająca na tym, że oryginalny tekst nigdy nie ulega zmianie w pamięci. Metody tekstowe zawsze zwracają nową kopię napisu.
- **Separator:** Znak lub ciąg znaków (np. spacja, myślnik, kropka) rozdzielający poszczególne informacje w jednym tekście.

---

## 2. Kolejność wykonywania każdego zadania

Wykonaj kolejne czynności krok po kroku:

1. Otwórz plik `instrukcja.md` w folderze wybranego zadania i przeczytaj dokładnie polecenie.
2. Zwróć uwagę na sekcję „Treść do wpisania”, która zawiera dosłowne teksty i wartości początkowe.
3. Otwórz plik `script.js` w edytorze kodu.
4. Znajdź w kodzie komentarz `// Twoje rozwiazanie`. W tym miejscu wpisz swoje instrukcje.
5. Jeśli instrukcja wymaga edycji struktury HTML, otwórz `index.html` i odszukaj komentarz w postaci `<!-- KROK N: ... -->`.
6. Zapisz wszystkie zmienione pliki za pomocą skrótu klawiszowego `Ctrl + S`.
7. Otwórz plik `index.html` w przeglądarce internetowej, aby sprawdzić działanie programu.
8. Naciśnij klawisz `F12` i przejdź do zakładki *Konsola*, aby upewnić się, że nie ma czerwonych komunikatów o błędach.
9. Po samodzielnej próbie rozwiązania zadania otwórz podfolder `rozwiazanie/`. Porównaj swój kod z kodem referencyjnym.

---

## 3. Ważne zasady pisania kodu w tym module

1. Po wywołaniu metody wycinającej lub zamieniającej tekst zawsze zapisz wynik do nowej stałej. Przykładowo napisz: `const wynik = tekst.slice(0, 5);`.
2. Podczas sprawdzania, czy znak istnieje w tekście metodą `indexOf()`, zawsze porównuj wynik z liczbą `-1`. Poprawny zapis to: `if (pozycja !== -1)`.
3. Przy wycinaniu kolejnych pól rozdzielonych znakiem `#` używaj drugiego argumentu `indexOf`: `tekst.indexOf("#", pozycjaPoTagu)`, a następnie `slice(start, koniec)`. Pełny wzorzec jest w `teoria.md` (sekcja 3.2) oraz w `pomoc_krotka_ogolna.md`.
4. Wewnątrz tworzonych funkcji nie wstawiaj kodu wyświetlającego wynik na stronie. Zamiast tego na końcu funkcji napisz instrukcję `return sformatowanyTekst;`.
5. Wyświetlanie wyniku wykonaj poza funkcją za pomocą przypisania: `document.getElementById("wynik").textContent = wynikFunkcji;`.

---

## 4. Podstawowe zasady dostępności cyfrowej (a11y)

1. Zachowaj logiczną hierarchię nagłówków na stronie: główny tytuł oznacz znacznikiem `<h1>`, a tytuły sekcji znacznikiem `<h2>`.
2. Zapewnij wysoki kontrast tekstu: ciemne litery na jasnym tle są łatwe do odczytania.
3. Każde pole wprowadzania danych w formularzu musi posiadać powiązaną etykietę `<label>` ze wskazanym atrybutem `for`.
4. Obrazki umieszczane na stronie muszą posiadać atrybut `alt` opisujący słownie zawartość grafiki.

---

## 5. Strategia pracy z Zadaniem Przyrostowym (Capstone)

Zadanie 5 (Zadanie Przyrostowe: Portal Usługowo-Handlowy IT-Partner) rozwija jedną, spójną aplikację biznesową przez cały semestr. Aby rozwiązać je krok po kroku i bez trudności, stosuj poniższą metodę 4 kroków:

1. **Zasada jednej funkcji na raz:**  
   Nie pisz całego programu od razu. W pierwszej kolejności zaimplementuj i przetestuj pojedynczą funkcję pomocniczą (np. `maskujEmail` i `maskujNip`). Przetestuj ich działanie w konsoli przeglądarki (`F12`), podając przykładowe adresy e-mail i numery NIP.

2. **Łączenie klocków (przepływ danych):**  
   Główna funkcja `przetworzZgloszeniePartnera` wycina poszczególne fragmenty tekstu (kod zlecenia, adres e-mail, NIP), a następnie przekazuje je do funkcji maskujących. Wyniki maskowania zapisuj do lokalnych stałych (`const`).

3. **Dosłowna struktura raportu z instrukcji:**  
   Otwórz plik `instrukcja.md` zadania 5 i odszukaj sekcję `## Treść do wpisania`. Skopiuj strukturę etykiet tekstowych, a w wyznaczone miejsca wstaw wartości swoich zmiennych za pomocą szablonu w grawisach (backticki `` `...` `` i `${zmienna}`).

4. **Weryfikacja w przeglądarce i konsoli deweloperskiej:**  
   Zapisz plik `script.js` i odśwież stronę `index.html`. Otwórz konsolę klawiszem `F12`. Upewnij się, że nie pojawiają się czerwone błędy (`Uncaught SyntaxError` lub `ReferenceError`), a w bloku `#wynik` wyświetla się pełny raport.
