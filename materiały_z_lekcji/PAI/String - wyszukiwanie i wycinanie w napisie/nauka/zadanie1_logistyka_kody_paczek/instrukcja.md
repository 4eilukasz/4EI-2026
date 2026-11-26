# Zadanie 1: Weryfikacja formatu identyfikatorów przesyłek kurierskich

## 1. Cel i wprowadzenie

Celem zadania jest opanowanie metod logicznych obiektu `String`: `startsWith()`, `endsWith()` oraz `includes()`. W aplikacjach biznesowych przed przetworzeniem danych wejściowych należy sprawdzić, czy dostarczony identyfikator spełnia wymogi formatu (np. zaczyna się od wymaganego prefiksu organizacji, kończy kodem kraju i zawiera wymagany znacznik usługi).

Twoim zadaniem jest napisanie czystej funkcji JavaScript, która zweryfikuje ciąg znaków reprezentujący kod paczki kurierskiej i zwróci czytelny raport tekstowy.

---

## 2. Gdzie to się stosuje? (Przykłady ze świata aplikacji)

1. **Firmy kurierskie (np. DPD, InPost, DHL):** Weryfikacja poprawności numeru listu przewozowego wpisanego przez klienta w polu śledzenia paczki zanim system wyśle zapytanie do bazy danych.
2. **Sklepy internetowe (np. Allegro, Amazon):** Sprawdzanie prefiksu kodu promocyjnego (np. czy kod rozpoczyna się od frazy `"RABAT-"` lub `"BLACKFRIDAY-"`).
3. **Panele logowania i rejestracji:** Weryfikacja, czy adres e-mail kończy się dozwoloną domeną firmową (np. `endsWith("@firma.pl")`).

---

## 3. Wymagania funkcjonalne

1. W pliku `script.js` zdefiniuj funkcję `sprawdzKodPaczki(kod)` przyjmującą jeden parametr typu `string`.
2. Wewnątrz funkcji wykonaj sprawdzenia:
   - Czy kod rozpoczyna się od prefiksu `"PACZKA-"` za pomocą `startsWith()`.
   - Czy kod kończy się oznaczeniem kraju `"PL"` za pomocą `endsWith()`.
   - Czy przesyłka posiada status ekspresowy, sprawdzając obecność frazy `"-EXP-"` za pomocą `includes()`.
3. Funkcja musi zwrócić za pomocą `return` sformatowany raport wielowierszowy informujący o wyniku weryfikacji.
4. Poza ciałem funkcji przetestuj działanie dla danych z sekcji „Treść do wpisania”.
5. Wyświetl wynik w elemencie `#wynik` za pomocą właściwości `textContent` oraz zrzuć raport do `console.log()`.

---

## Treść do wpisania

W swoim kodzie użyj dokładnie poniższych danych testowych i komunikatów tekstowych:

- Identyfikator testowy 1: `"PACZKA-EXP-84920-PL"`
- Identyfikator testowy 2: `"KURIER-STD-31049-DE"`
- Nagłówek raportu: `"=== RAPORT SYSTEMU LOGISTYCZNEGO KURIER-EXPRESS ==="`
- Komunikat powodzenia: `"Format kodu jest w 100% poprawny dla przesyłek krajowych."`
- Komunikat błędu: `"BŁĄD: Kod nie spełnia standardu przesyłki krajowej PACZKA-...-PL"`
- Informacja o statusie ekspresowym: `"Opcja ekspresowa: TAK (przesyłka priorytetowa)"` lub `"Opcja ekspresowa: NIE (przesyłka standardowa)"`

---

## 5. Wskazówki implementacyjne

- Pamiętaj, że metody `startsWith`, `endsWith` i `includes` rozróżniają wielkość liter (*case-sensitive*).
- Zastosuj szablony tekstowe z grawisem (template literals `${...}`) i znak nowej linii `\n`, aby przygotować czytelny raport.
