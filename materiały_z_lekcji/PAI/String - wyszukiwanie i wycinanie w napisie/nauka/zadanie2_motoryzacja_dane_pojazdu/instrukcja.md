# Zadanie 2: Ekstrakcja danych diagnostycznych w serwisie pojazdów

## 1. Cel i wprowadzenie

Celem zadania jest opanowanie precyzyjnego lokalizowania separatorów za pomocą metod `indexOf()` oraz `lastIndexOf()`, a także wycinania podłańcuchów za pomocą metody `slice()`, w tym z użyciem indeksów ujemnych.

W systemach diagnostyki samochodowej parametry przeglądu przesyłane są często w postaci jednego skondensowanego łańcucha znaków, w którym poszczególne bloki danych rozdzielone są stałymi separatorami (np. znakiem kratki `#` lub dwukropkiem `:`). Programista musi wyciąć konkretne wartości i sformatować je w czytelny protokół serwisowy.

---

## 2. Gdzie to się stosuje? (Przykłady ze świata aplikacji)

1. **Interfejsy diagnostyczne OBD-II:** Parsowanie ramek danych wysyłanych przez komputer pokładowy samochodu do oprogramowania serwisowego mechanika.
2. **Systemy bankowe i płatnicze:** Wyodrębnianie kodu waluty, kwoty transakcji oraz identyfikatora banku z surowego łańcucha komunikatu SWIFT.
3. **Przetwarzanie adresów URL:** Ekstrakcja parametrów zapytania (ang. *query string*) znajdujących się po znaku zapytania `?` lub hashu `#`.

---

## 3. Wymagania funkcjonalne

1. W pliku `script.js` utwórz funkcję `parsujWpisSerwisowy(wpis)` przyjmującą parametr tekstowy w formacie:
   `VIN:wartosc#DATA:wartosc#KOD:wartosc#STATUS:wartosc`.
2. Wewnątrz funkcji za pomocą `indexOf()` oraz `slice()`:
   - Zlokalizuj prefiks `"VIN:"` i pierwszy separator `#`, a następnie wytnij numer VIN pojazdu.
   - Zlokalizuj fragment `"KOD:"` i wytnij kod usterki.
   - Za pomocą indeksu ujemnego w metodzie `slice(-5)` pobierz pięcioznakowy status końcowy wpisu (`PILNE`).
3. Funkcja musi zwrócić sformatowany, wielowierszowy protokół diagnostyczny za pomocą instrukcji `return`.
4. Poza ciałem funkcji pobierz dane za pomocą `prompt()` z obowiązkową wartością domyślną z sekcji „Treść do wpisania”.
5. Wywołaj funkcję dla pobranego łańcucha i wyświetl wynik w elemencie `#wynik` oraz w `console.log()`.

---

## Treść do wpisania

W zadaniu użyj dokładnie poniższych danych testowych i etykiet raportu:

- Wartość domyślna w oknie dialogowym prompt: `"VIN:WAUZZZ8K9BA123456#DATA:2026-05-15#KOD:ERR-AIRBAG-01#STATUS:PILNE"`
- Tytuł okna dialogowego prompt: `"Wprowadź ciąg danych diagnostycznych pojazdu:"`
- Nagłówek protokołu: `"=== PROTOKÓŁ STACJI KONTROLI I DIAGNOSTYKI POJAZDÓW ==="`
- Etykieta numeru VIN: `"Numer identyfikacyjny VIN: "`
- Etykieta kodu błędu: `"Zarejestrowany kod usterki: "`
- Etykieta priorytetu naprawy: `"Priorytet zgłoszenia serwisowego: "`

---

## 5. Wskazówki implementacyjne

- Aby wyciąć tekst pomiędzy separatorem A i B, użyj zapisu: `const wartosc = tekst.slice(indeksA + dlugoscA, indeksB);`.
- `prompt()` wywołaj **wyłącznie poza ciałem funkcji**, przekazując wynik jako argument wywołania.
- Indeks ujemny w `slice(-5)` odlicza dokładnie 5 znaków od końca napisu, co jest idealne przy stałej długości słowa `"PILNE"`.
