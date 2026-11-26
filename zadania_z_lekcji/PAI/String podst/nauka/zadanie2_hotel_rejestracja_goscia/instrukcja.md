# Zadanie 2: Moduł czyszczenia danych meldunkowych i generowania karty gościa

## Cel zadania
Celem zadania jest opanowanie metod oczyszczania łańcuchów znaków z nadmiarowych białych znaków (`trim()`, `trimStart()`, `trimEnd()`) oraz formatowania czytelnych, wielowierszowych raportów za pomocą szablonów tekstowych (*template literals*) z interpolacją wyrażeń `${...}`. Zbudujesz moduł recepcyjny w systemie hotelowym, który przetwarza surowe dane wprowadzone przez gościa.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)
1. **Systemy rezerwacji hotelowej i biletowej (np. Booking.com, Airbnb):** Oczyszczanie nazwisk i numerów dokumentów tożsamości z przypadkowo skopiowanych spacji przed zapisem rezerwacji.
2. **Formularze logowania i rejestracji (np. Google, Microsoft):** Usuwanie spacji na początku i końcu adresu e-mail, co zapobiega odrzuceniu prawidłowego loginu przez serwer.
3. **Generatory biletów, voucherów i kart pokładowych:** Wstrzykiwanie danych pasażera i szczegółów podróży do wielowierszowych szablonów potwierdzeń PDF/tekstowych.

## Wymagania funkcjonalne
1. W pliku `script.js` utwórz funkcję `oczyscDaneTekstowe(tekstWejsciowy)`, która:
   - Przyjmuje surowy napis.
   - Za pomocą metody `trim()` usuwa z niego wszelkie wiodące i końcowe białe znaki (spacje, tabulatory, znaki nowej linii).
   - Zwraca oczyszczony łańcuch znaków.
2. Utwórz funkcję `przygotujKarcieMeldunkowa(imieNazwiskoRaw, numerPokojuRaw, liczbaDni, cenaZaDobe)`, która:
   - Oczyszcza `imieNazwiskoRaw` oraz `numerPokojuRaw` za pomocą zdefiniowanej funkcji oczyszczającej.
   - Oblicza całkowity koszt pobytu: `liczbaDni * cenaZaDobe`.
   - Zwraca wielowierszowy łańcuch tekstowy utworzony za pomocą szablonu w grawisach (backtickach `` `...` ``) z interpolacją wyliczonych wartości i stałych etykiet.
3. Wywołaj funkcję dla następujących danych testowych:
   - Gość: `"   Janusz Kowalczyk \t\n"`
   - Pokój: `"   304-A   "`
   - Liczba dób: `3`
   - Cena za dobę: `280.00`
4. Przypisz wygenerowaną kartę meldunkową do właściwości `textContent` elementu `document.getElementById("wynik")` oraz wypisz ją w konsoli przez `console.log`.

## Treść do wpisania
W skrypcie umieść dokładnie następujące napisy stałe w generowanym raporcie:
- Nagłówek modułu: `"=== GRAND HOTEL & SPA — KARTA MELDUNKOWA GOŚCIA HOTELOWEGO ==="`
- Etykieta potwierdzenia: `"POTWIERDZENIE REJESTRACJI POBYTU: Dane gościa zostały pomyślnie oczyszczone z białych znaków."`
- Etykieta rozliczenia: `"ROZLICZENIE POBYTU: Płatność uregulowana w recepcji przy zameldowaniu."`
- Życzenia końcowe: `"Życzymy udanego pobytu i zapraszamy do korzystania ze strefy Wellness!"`

## Wymagana zawartość raportu
Oprócz etykiet stałych raport musi zawierać:
1. Oczyszczone imię i nazwisko gościa oraz długość tego napisu po `trim()`.
2. Oczyszczony numer pokoju.
3. Liczbę dób oraz stawkę dobową sformatowaną przez `.toFixed(2)` z jednostką `PLN`.
4. Łączną kwotę pobytu (`liczbaDni * cenaZaDobe`) również przez `.toFixed(2)` z jednostką `PLN`.

Układ wierszy i brzmienie etykiet pól dynamicznych dobierz samodzielnie — byle były czytelne i zawierały powyższe informacje.

## Podpowiedź / Wskazówki składniowe
- Metoda `trim()` nie zmienia oryginalnej zmiennej, lecz zwraca nowy napis: `const czysty = wejscie.trim();`.
- Szablony tekstowe definiujemy za pomocą grawisów `` `...` ``, a zmienne wstawiamy za pomocą `${zmienna}`.
- Wewnątrz `${...}` można wykonywać działania arytmetyczne, np. `${(liczbaDni * cenaZaDobe).toFixed(2)}`.
