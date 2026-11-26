# Zadanie 4: Moduł weryfikacji kodów rabatowych i fakturowania koszyka zakupowego

## Cel zadania
Celem zadania integrującego jest połączenie wszystkich zagadnień poznanych w zadaniach 1–3: czyszczenia tekstu za pomocą `trim()`, konwersji wielkości liter (`toUpperCase()`), pomiaru długości tekstu (`length`), badania znaku początkowego (`tekst[0]`) oraz tworzenia czytelnego, wielowierszowego zestawienia finansowego za pomocą szablonów tekstowych (*template literals*). Zaimplementujesz moduł podsumowania koszyka zakupowego w sklepie internetowym.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)
1. **Sklepy internetowe (np. Media Expert, x-kom, Empik):** Sprawdzanie poprawności wpisywanych przez klientów kodów rabatowych (usunięcie spacji, konwersja do wielkich liter, sprawdzenie warunków minimalnej długości) i naliczanie zniżki na żywo.
2. **Platformy subskrypcyjne (np. Spotify, Netflix):** Walidacja kodów podarunkowych i kuponów zniżkowych wprowadzanych w trakcie procesu płatności.
3. **Systemy ERP i fakturowania online:** Generowanie sformatowanych dokumentów rozliczeniowych z podziałem na kwoty netto, rabaty, stawki podatku VAT oraz kwotę do zapłaty.

## Wymagania funkcjonalne
1. W pliku `script.js` utwórz funkcję `obliczRabat(kodRaw)`, która:
   - Oczyszcza surowy kod z białych znaków za pomocą `trim()`.
   - Przekształca oczyszczony kod do wielkich liter za pomocą `toUpperCase()`.
   - Sprawdza, czy długość kodu mieści się w przedziale od 4 do 8 znaków (`kod.length >= 4 && kod.length <= 8`). Jeśli kod nie spełnia tego warunku, funkcja zwraca `0` (brak rabatu).
   - Jeśli długość jest poprawna, bada pierwszy znak kodu (`kod[0]`):
     - Gdy pierwszy znak to `'R'` — zwraca stawkę rabatu `0.20` (20%).
     - Gdy pierwszy znak to `'V'` — zwraca stawkę rabatu `0.30` (30%).
     - W pozostałych przypadkach — zwraca stawkę rabatu `0.10` (10%).
2. Utwórz funkcję `generujRozliczenieKoszyka(klientRaw, koszykNetto, kodRaw)`, która:
   - Oczyszcza dane klienta za pomocą `trim()`.
   - Wywołuje funkcję `obliczRabat(kodRaw)` i pobiera stawkę zniżki.
   - Oblicza kwotę rabatu: `kwotaRabatu = koszykNetto * stawkaRabatu`.
   - Oblicza kwotę netto po rabacie: `nettoPoRabacie = koszykNetto - kwotaRabatu`.
   - Oblicza podatek VAT wynoszący 23%: `kwotaVat = nettoPoRabacie * 0.23`.
   - Oblicza kwotę brutto do zapłaty: `brutto = nettoPoRabacie + kwotaVat`.
   - Zwraca wielowierszowy paragon tekstowy przygotowany w szablonie tekstowym z interpolacją `${...}` i zaokrągleniami `.toFixed(2)`.
3. Przetestuj działanie skryptu dla danych:
   - Dane klienta: `"   Tomasz Zieliński \n"`
   - Wartość koszyka netto: `1500.00`
   - Kod promocyjny: `"   rabat20   "`
4. Wypisz gotowy dokument do `document.getElementById("wynik").textContent` oraz do konsoli za pomocą `console.log`.

## Treść do wpisania
W skrypcie umieść dokładnie następujące napisy stałe w generowanym raporcie:
- Nagłówek modułu: `"=== SKLEP INTERNETOWY ELEKTRO-MAX — PODSUMOWANIE KOSZYKA ZAKUPOWEGO ==="`
- Etykieta weryfikacji: `"WERYFIKACJA KODU RABATOWEGO: Kod promocyjny pomyślnie zweryfikowany i naliczony."`
- Etykieta rozliczenia: `"SZCZEGÓŁOWE ROZLICZENIE FINANSOWE ZAMÓWIENIA KLIENTA:"`
- Podziękowanie: `"Dziękujemy za zakupy w naszym sklepie internetowym! Zapraszamy ponownie."`

## Wymagana zawartość raportu
Oprócz etykiet stałych raport musi zawierać:
1. Oczyszczone dane klienta oraz długość tego napisu.
2. Znormalizowany kod promocyjny (po `trim()` i `toUpperCase()`), jego pierwszy znak oraz długość.
3. Przyznany rabat w procentach (np. `20` dla stawki `0.20`).
4. Kwoty sformatowane przez `.toFixed(2)` z jednostką `PLN`: netto bazowe, wartość zniżki, netto po rabacie, VAT 23%, brutto do zapłaty.

## Podpowiedź / Wskazówki składniowe
- Wszystkie metody stringów można wywoływać łańcuchowo: `const kod = kodRaw.trim().toUpperCase();`.
- Pamiętaj o użyciu nawiasów i `.toFixed(2)` dla wartości walutowych.
- Sprawdzenie przedziału długości: `kod.length >= 4 && kod.length <= 8`.
