# Zadanie 1: Moduł weryfikacji i normalizacji kodów magazynowych SKU

## Cel zadania
Celem pierwszego zadania laboratoryjnego jest opanowanie elementarnych operacji na łańcuchach znaków w języku JavaScript: sprawdzania liczby znaków za pomocą właściwości `length` oraz transformacji wielkości liter za pomocą metod `toLowerCase()` i `toUpperCase()`. Zaimplementujesz funkcje pomocnicze pracujące na kodach towarowych w systemie zarządzania magazynem (WMS).

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)
1. **Systemy logistyczne i e-commerce (np. Allegro, Amazon):** Ujednolicanie kodów produktów (SKU / EAN) wprowadzanych przez pracowników magazynu do formatu wielkich liter, aby uniknąć duplikatów w bazie danych.
2. **Systemy kasowe i fiskalne (np. Subiekt GT, Comarch ERP):** Sprawdzanie, czy zeskanowany kod kreskowy ma wymaganą liczbę cyfr lub znaków przed wysłaniem zapytania do bazy.
3. **Wyszukiwarki asortymentu w sklepach internetowych:** Konwertowanie zapytań klientów do małych liter w celu wyszukiwania produktów bez względu na wciśnięty klawisz Caps Lock.

## Wymagania funkcjonalne
1. W pliku `script.js` utwórz funkcję `sprawdzDlugoscKodu(kod, wymaganaDlugosc)`, która:
   - Przyjmuje kod towaru (string) oraz oczekiwaną długość (liczba całkowita).
   - Za pomocą właściwości `length` sprawdza, czy długość kodu jest dokładnie równa wartości `wymaganaDlugosc`.
   - Zwraca wartość logiczną `true`, jeśli długość jest zgodna, lub `false` w przeciwnym razie.
2. Utwórz funkcję `normalizujKodSKU(kod)`, która:
   - Przyjmuje parametr tekstowy `kod`.
   - Zwraca nowy łańcuch znaków przekształcony w całości na wielkie litery za pomocą metody `toUpperCase()`.
3. Utwórz funkcję `utworzSlugNazwy(nazwaTowaru)`, która:
   - Przyjmuje nazwę asortymentu.
   - Zwraca nowy łańcuch znaków przekształcony w całości na małe litery za pomocą metody `toLowerCase()`.
4. Wywołaj zdefiniowane funkcje dla następujących danych testowych:
   - Kod SKU: `"sku-8472"` (wymagana długość: 8 znaków).
   - Nazwa towaru: `"Dysk Twardy SSD NVMe 1TB"`.
5. Zbuduj wielowierszowy raport tekstowy zawierający status weryfikacji, znormalizowany kod oraz nazwę w małych literach.
6. Wypisz raport do elementu `document.getElementById("wynik").textContent` oraz wyświetl go w konsoli za pomocą `console.log`.

## Treść do wpisania
W skrypcie umieść dokładnie następujące napisy stałe w generowanym raporcie:
- Nagłówek modułu: `"=== SYSTEM MAGAZYNOWY WMS — MODUŁ KONTROLI KODÓW TOWAROWYCH ==="`
- Etykieta statusu długości (gdy długość jest poprawna): `"STATUS KODU TOWAROWEGO: Kod SKU spełnia wymogi długości (8 znaków)."`
- Etykieta znormalizowanego kodu (stały napis — bez podstawiania wartości w tym wierszu): `"ETYKIETA KODOWA: [KOD ZNORMALIZOWANY DO WIELKICH LITER]"`
- Etykieta kontrolna nazwy: `"KONTROLA DŁUGOŚCI NAZWY: Nazwa asortymentu została pomyślnie zweryfikowana."`

## Wymagana zawartość raportu
Raport ma być wielowierszowy i zawierać (w dowolnej czytelnej kolejności po nagłówku):
1. Powyższe etykiety stałe.
2. Wiersz z wygenerowanym kodem SKU po `toUpperCase()` (np. `Wygenerowany kod SKU: SKU-8472`).
3. Wiersz z oryginalną nazwą towaru oraz jej długością (`length`).
4. Wiersz ze znormalizowaną nazwą (po `toLowerCase()`).
5. Gdy długość kodu jest niepoprawna — zamiast etykiety statusu sukcesu wypisz komunikat błędu z faktyczną i wymaganą długością.

## Podpowiedź / Wskazówki składniowe
- Pamiętaj, że `length` jest właściwością, a nie funkcją — zapisujemy ją bez nawiasów: `kod.length`.
- Metody `toUpperCase()` oraz `toLowerCase()` wymagają nawiasów okrągłych i zwracają nowy łańcuch znaków.
- Do łamania wierszy w raporcie tekstowym stosuj znak `\n` lub szablony w grawisach `` `...` ``.
