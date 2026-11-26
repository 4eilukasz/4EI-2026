# Instrukcja krok po kroku — Moduł T05: Obiekt String

> Wersja materiału dydaktycznego przygotowana z myślą o uczniach preferujących jednoznaczny, dosłowny przekaz instruktażowy.

Niniejszy materiał przedstawia proces realizacji każdego ćwiczenia w sposób dosłowny i uporządkowany. Każdy krok zawiera jedną konkretną czynność do wykonania w edytorze kodu lub przeglądarce internetowej.

---

## 1. Słowniczek pojęć używanych w tym dziale

- **`String` (napis)** — typ danych w języku JavaScript służący do przechowywania tekstu zamkniętego w cudzysłowach lub apostrofach.
- **`length`** — właściwość tekstowa, która wskazuje dokładną liczbę znaków w danym napisie. Zapisujemy ją bez nawiasów okrągłych.
- **`toLowerCase()`** — metoda, która zamienia wszystkie litery w tekście na małe litery i zwraca nowy napis.
- **`toUpperCase()`** — metoda, która zamienia wszystkie litery w tekście na wielkie litery i zwraca nowy napis.
- **`trim()`** — metoda, która usuwa spacje i tabulatory znajdujące się na samym początku oraz na samym końcu tekstu.
- **`charAt(indeks)`** — metoda pobierająca jeden znak znajdujący się na podanej pozycji liczbowej.
- **Szablon tekstowy (backtick `` ` ``)** — napis otoczony grawisami, który pozwala na wstawianie zmiennych za pomocą zapisu `${zmienna}`.
- **`textContent`** — właściwość elementu strony internetowej służąca do bezpiecznego wpisania tekstu widocznego dla użytkownika.

---

## 2. Standardowy schemat pracy nad zadaniem

Wykonuj poniższe kroki po kolei dla każdego zadania w folderze `nauka/`:

1. **Krok 1: Otwórz plik `instrukcja.md` w folderze zadania.**  
   Przeczytaj opis celu oraz sekcję z wymaganymi danymi tekstowymi. Zwróć uwagę na dokładne napisy, które należy oczyścić lub sformatować.

2. **Krok 2: Otwórz plik `script.js` w swoim edytorze kodu.**  
   Znajdź w kodzie komentarz `// Twoje rozwiazanie`. W tym wyznaczonym miejscu wpiszesz swój kod JavaScript. Sprawdź też, czy w pliku są już przygotowane dane testowe (`const ...`) lub czy zadanie korzysta z pliku `dane.js` (wtedy odwołujesz się bezpośrednio do stałych `DANE_...`).

3. **Krok 3: Zaimplementuj funkcje z instrukcji.**  
   Przeczytaj sekcję wymagań funkcjonalnych. Nie każde zadanie wymaga `trim()` — stosuj tylko te metody, które są wymienione w danej instrukcji (`length`, `toUpperCase` / `toLowerCase`, `trim`, odczyt znaku, szablon).

4. **Krok 4: Gdy instrukcja wymaga oczyszczenia — użyj `trim()`.**  
   Usuń spacje z początku i końca: `const czystyTekst = tekstWejsciowy.trim();`. Pamiętaj o przypisaniu wyniku do zmiennej.

5. **Krok 5: Przygotuj tekst końcowy.**  
   Użyj szablonu w grawisach `` `...` `` z `${...}` albo konkatenacji ze znakiem `\n`. Sprawdź sekcję „Wymagana zawartość raportu” w instrukcji — wypisz wszystkie wymienione informacje.

6. **Krok 6: Wypisz wynik na stronę internetową.**  
   Odszukaj kontener za pomocą `document.getElementById("wynik")`. Przypisz swój gotowy tekst do właściwości `textContent` i równolegle użyj `console.log`.

7. **Krok 7: Zapisz plik i otwórz stronę `index.html` w przeglądarce.**  
   Naciśnij klawisze Ctrl+S, aby zapisać plik. Uruchom stronę w przeglądarce i naciśnij klawisz F12, aby sprawdzić, czy w konsoli nie ma czerwonych komunikatów o błędach.

8. **Krok 8: Porównaj kod z podkatalogiem `rozwiazanie/`.**  
   Dopiero po wykonaniu własnej próby otwórz plik `script.js` znajdujący się w podkatalogu `rozwiazanie/`. Porównaj swoje rozwiązanie z kodem wzorcowym.

---

## 3. Ważne zasady tworzenia czytelnego kodu (Dostępność i A11y)

- Element wyjściowy na stronie posiada identyfikator `id="wynik"`. W pliku HTML oznaczony jest komentarzem `<!-- KROK N: Miejsce na wynik skryptu -->`.
- Wszystkie teksty prezentowane użytkownikowi muszą mieć wysoki kontrast względem tła (ciemny tekst na jasnym tle lub jasny na ciemnym).
- Nagłówki stron muszą zachowywać prawidłową hierarchię: najpierw nagłówek główny `<h1>`, a pod nim nagłówki sekcji `<h2>`. Nie wolno pomijać poziomów nagłówków.
- Wypisywany tekst powinien być prosty i czytelny, z wyraźnym oznaczeniem etykiet i wartości (np. „Klient:”, „Kod:”).

---

## 4. Strategia pracy z Zadaniem Przyrostowym (Capstone)

Zadanie 5 (Zadanie Przyrostowe: Portal Usługowo-Handlowy IT-Partner) rozwija jedną, spójną aplikację biznesową przez cały semestr. Aby rozwiązać je krok po kroku i bez trudności, stosuj poniższą metodę 4 kroków:

1. **Zasada jednej funkcji na raz:**  
   Nie pisz całego programu od razu. W pierwszej kolejności zaimplementuj i przetestuj pojedynczą funkcję pomocniczą (np. oczyszczanie tekstu za pomocą `trim()`, normalizację do wielkich liter przez `toUpperCase()` czy odczyt pierwszego znaku). Przetestuj jej wynik w konsoli przeglądarki (`F12`).

2. **Łączenie klocków (przepływ danych):**  
   Główna funkcja generująca raport wywołuje wcześniejsze funkcje pomocnicze, przekazując im dane wejściowe. Wyniki zwracane przez instrukcję `return` z funkcji pomocniczych zapisuj do lokalnych stałych (`const`).

3. **Dosłowna struktura raportu z instrukcji:**  
   Otwórz plik `instrukcja.md` zadania 5 i odszukaj sekcję `## Treść do wpisania`. Skopiuj strukturę etykiet tekstowych, a w wyznaczone miejsca wstaw wartości swoich zmiennych za pomocą szablonu w grawisach (backticki `` `...` `` i `${zmienna}`).

4. **Weryfikacja w przeglądarce i konsoli deweloperskiej:**  
   Zapisz plik `script.js` i odśwież stronę `index.html`. Otwórz konsolę klawiszem `F12`. Upewnij się, że nie pojawiają się czerwone błędy (`Uncaught SyntaxError` lub `ReferenceError`), a w bloku `#wynik` wyświetla się pełny raport.
