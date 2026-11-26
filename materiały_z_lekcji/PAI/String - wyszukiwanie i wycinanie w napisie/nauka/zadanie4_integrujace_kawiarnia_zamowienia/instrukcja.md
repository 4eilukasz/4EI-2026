# Zadanie 4: Integrujący system przetwarzania bonów w kawiarni

## 1. Cel i wprowadzenie

Celem zadania jest zintegrowanie wszystkich poznanych dotąd operacji na łańcuchach znaków:
1. Sprawdzania obecności i granic tekstu (`startsWith`, `endsWith`, `includes`),
2. Precyzyjnego wycinania fragmentów (`indexOf`, `slice`),
3. Zamiany i czyszczenia separatorów (`replaceAll`).

W nowoczesnych lokalach gastronomicznych terminale kelnerskie przesyłają zamówienia stolikowe do drukarki kuchennej w formie pojedynczej ramki tekstowej. Program musi sprawdzić poprawność nagłówka i statusu płatności, wyciąć numer stolika i pozycję menu, usunąć separatory techniczne i wygenerować czytelny bon przygotowania zamówienia.

---

## 2. Gdzie to się stosuje? (Przykłady ze świata aplikacji)

1. **Systemy POS dla gastronomii (np. Dotykacka, Storyous, Gastro POS):** Przetwarzanie i kolejkowanie zamówień przesyłanych bezprzewodowo od kelnera do kuchni.
2. **Kioski samoobsługowe (np. w sieciach fast-food):** Generowanie podsumowania zamówienia i weryfikacja kodu zniżkowego przed autoryzacją płatności.
3. **Aplikacje dostaw jedzenia (np. Uber Eats, Pyszne.pl):** Formatowanie uwag do zamówienia oraz weryfikacja poprawności adresu dostawy.

---

## 3. Wymagania funkcjonalne

1. W pliku `script.js` utwórz funkcję `przetworzBonZamowienia(bon)` przyjmującą parametr tekstowy w formacie:
   `STOLIK-nr#NAPOJ:nazwa#KOD:kod_rabatowy#UWAGI:uwagi#STATUS:status`.
2. Wewnątrz funkcji:
   - Sprawdź za pomocą `startsWith("STOLIK-")`, czy bon posiada prawidłowy prefiks.
   - Sprawdź za pomocą `endsWith("OPLACONE")`, czy zamówienie zostało pomyślnie opłacone.
   - Za pomocą `indexOf()` oraz `slice()` wytnij numer stolika oraz nazwę napoju.
   - W nazwie napoju oraz uwagach zamień techniczne podwójne podkreślenia `__` na spacje za pomocą `replaceAll("__", " ")`.
   - Sprawdź za pomocą `includes("RABAT-10")`, czy klient skorzystał z kuponu rabatowego 10%.
3. Zwróć za pomocą `return` estetyczny, sformatowany bon kuchenny.
4. Poza ciałem funkcji pobierz dane za pomocą `prompt()` z obowiązkową wartością domyślną z sekcji „Treść do wpisania”.
5. Wyświetl wynik w elemencie `#wynik` oraz zrzuć raport do `console.log()`.

---

## Treść do wpisania

W zadaniu użyj dokładnie poniższych danych testowych i etykiet bonu:

- Domyślna wartość w oknie dialogowym prompt: `"STOLIK-12#NAPOJ:Kawa__Latte__Grande#KOD:RABAT-10#UWAGI:Mleko__owsiane#STATUS:OPLACONE"`
- Treść pytania w oknie dialogowym prompt: `"Wprowadź ciąg zamówienia z terminala kelnerskiego:"`
- Nagłówek wydruku: `"=== BON KUCHENNY — KAWIARNIA AROMA & BISTRO ==="`
- Etykieta numeru stolika: `"Stolik obsługiwany: Stolik nr "` (po etykiecie wstaw wycięty numer, np. `12`)
- Etykieta pozycji menu: `"Wybrana pozycja: "`
- Etykieta uwag: `"Specjalne uwagi klienta: "`
- Etykieta statusu płatności: `"Status rozliczenia: Zamówienie opłacone (rachunek zamknięty)"`
- Etykieta rabatu: `"Zastosowany rabat: 10% zniżki klubowej naliczone pomyślnie"`

---

## 5. Wskazówki implementacyjne

- Podziel zadanie na logiczne kroki: najpierw walidacja początkowa (`startsWith`, `endsWith`), potem wycinanie pól, a na końcu oczyszczenie tekstu za pomocą `replaceAll`.
- Pamiętaj, aby funkcja zwracała gotowy tekst instrukcją `return`, a wywołanie `prompt()` znajdowało się na zewnątrz funkcji.
