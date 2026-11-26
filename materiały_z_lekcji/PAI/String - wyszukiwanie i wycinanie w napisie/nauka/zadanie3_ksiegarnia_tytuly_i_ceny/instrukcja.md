# Zadanie 3: Czyszczenie i normalizacja katalogu w księgarni internetowej

## 1. Cel i wprowadzenie

Celem zadania jest opanowanie metod zamiany fragmentów tekstu: `replace()` (zamiana pierwszego wystąpienia) oraz `replaceAll()` (zamiana wszystkich wystąpień), a także łączenie ich z weryfikacją warunków logicznych.

W systemach e-commerce dane importowane z hurtowni lub zewnętrznych baz często zawierają techniczne separatory (np. podwójne podkreślenia `__` lub ukośniki), przestarzałe kody walut czy zbędne dopiski. Zadaniem programu jest automatyczne oczyszczenie tych wpisów i przekształcenie ich w profesjonalną kartę produktu gotową do publikacji w sklepie.

---

## 2. Gdzie to się stosuje? (Przykłady ze świata aplikacji)

1. **Systemy e-commerce (np. Allegro, Empik):** Normalizacja tytułów ofert wgrywanych masowo z plików CSV (usuwanie niedozwolonych znaków, ujednolicanie jednostek miar).
2. **Generatory adresów przyjaznych SEO (tzw. slug):** Zamiana spacji i znaków specjalnych w tytule artykułu na myślniki (np. `"Wprowadzenie do JS"` na `"wprowadzenie-do-js"`).
3. **Filtry antyspamowe i moderacja:** Automatyczne zastępowanie słów wulgarnych lub wrażliwych gwiazdkami w komentarzach użytkowników.

---

## 3. Wymagania funkcjonalne

1. W pliku `script.js` utwórz funkcję `formatujWpisKatalogowy(wpisSurowy)` przyjmującą jeden parametr tekstowy w formacie:
   `TYTUL:Mistrz__Czystego__Kodu__Wydanie__II#CENA:149 PLN#STATUS:PROMOCJA`.
2. Wewnątrz funkcji:
   - Zamień wszystkie podwójne podkreślenia `__` w tytule na spację za pomocą `replaceAll("__", " ")`.
   - Zastąp oznaczenie waluty `"PLN"` symbolem `"zł"` za pomocą metody `replace("PLN", "zł")`.
   - Sprawdź za pomocą `includes("PROMOCJA")`, czy produkt jest objęty rabatem, i przygotuj stosowną etykietę.
3. Funkcja musi zwrócić sformatowany opis produktu w postaci wielowierszowego łańcucha znaków za pomocą `return`.
4. Poza ciałem funkcji przetestuj funkcję na danych z sekcji „Treść do wpisania”.
5. Wyświetl wynik w elemencie `#wynik` oraz zrzuć raport do `console.log()`.

---

## Treść do wpisania

W zadaniu użyj dokładnie poniższych danych testowych i etykiet:

- Surowy wpis testowy 1: `"TYTUL:Mistrz__Czystego__Kodu__Wydanie__II#CENA:149 PLN#STATUS:PROMOCJA"`
- Surowy wpis testowy 2: `"TYTUL:Architektura__Aplikacji__Frontendowych#CENA:89 PLN#STATUS:STANDARD"`
- Nagłówek katalogu: `"=== SYSTEM KATALOGOWY KSIĘGARNI NAUKOWO-TECHNICZNEJ ==="`
- Etykieta tytułu: `"Znormalizowany tytuł publikacji: "`
- Etykieta ceny: `"Cena detaliczna brutto: "`
- Etykieta promocji TAK: `"Status rabatowy: Oferta specjalna w strefie promocji (obniżka naliczona)"`
- Etykieta promocji NIE: `"Status rabatowy: Cena regularna (brak aktywnych zniżek)"`

---

## 5. Wskazówki implementacyjne

- Pamiętaj o różnicy: `replace()` zamienia wyłącznie pierwsze napotkane dopasowanie, podczas gdy `replaceAll()` modyfikuje wszystkie wystąpienia w całym napisie.
- Do oddzielenia poszczególnych pól rekordu przed wywołaniem metod zamiany możesz użyć `indexOf("#")` i `slice()`.
