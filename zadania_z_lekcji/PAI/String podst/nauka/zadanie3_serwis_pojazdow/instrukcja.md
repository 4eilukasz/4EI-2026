# Zadanie 3: Moduł analizy kodów zleceń serwisowych na podstawie prefiksu i sufiksu

## Cel zadania
Celem zadania jest opanowanie mechanizmów odczytu pojedynczych znaków w łańcuchu tekstowym za pomocą notacji indeksowej `tekst[indeks]` oraz metody `charAt(indeks)`. Uczniowie poznają również technikę bezpiecznego wyznaczania ostatniego znaku (`tekst[tekst.length - 1]`) oraz łączenia analizy znakowej z instrukcjami warunkowymi `if/else` lub `switch`. Zbudujesz moduł dyspozytorski dla autoryzowanego serwisu pojazdów.

## Gdzie to się stosuje? (Przykłady ze świata aplikacji)
1. **Systemy logistyczne i kurierskie (np. DPD, InPost, DHL):** Rozpoznawanie typu przesyłki (np. paleta, gabaryt, paczka standardowa) na podstawie pierwszej litery kodu nadania.
2. **Systemy bankowe i weryfikacja numerów rachunków (IBAN):** Odczytywanie dwuliterowego prefiksu kraju (np. `"PL"`) oraz sumy kontrolnej z pierwszych pozycji numeru.
3. **Warsztaty samochodowe i systemy flotowe:** Kategoryzacja zgłoszeń naprawczych według symbolu stanowiska (pierwszy znak) i priorytetu naprawy (ostatni znak kodu).

## Wymagania funkcjonalne
1. W pliku `script.js` utwórz funkcję `analizujZlecenie(kodRaw, modelPojazdu)`, która:
   - Oczyszcza kod z białych znaków za pomocą `trim()`.
   - Sprawdza, czy długość oczyszczonego kodu wynosi co najmniej 5 znaków (`kod.length >= 5`).
   - Odczytuje pierwszy znak kodu (`kod[0]`) i zamienia go na wielką literę:
     - Jeśli pierwszy znak to `'O'` — kategoria to `"Pojazd Osobowy"`.
     - Jeśli pierwszy znak to `'C'` — kategoria to `"Pojazd Ciężarowy"`.
     - Jeśli pierwszy znak to `'M'` — kategoria to `"Motocykl / Jednoślad"`.
     - W pozostałych przypadkach — kategoria to `"Pojazd Specjalny / Inny"`.
   - Odczytuje ostatni znak kodu (`kod[kod.length - 1]`) i zamienia go na wielką literę:
     - Jeśli ostatni znak to `'P'` — priorytet to `"Pilny (Ekspres 24h)"`.
     - Jeśli ostatni znak to `'S'` — priorytet to `"Standardowy (termin do 3 dni)"`.
     - W pozostałych przypadkach — priorytet to `"Kolejkowy (termin do 7 dni)"`.
   - Zwraca kompletny raport diagnostyczny sformatowany w szablonie tekstowym.
2. Przetestuj działanie funkcji dla danych:
   - Kod zlecenia (wczytywany z `dane.js` jako `DANE_ZLECENIA_KOD`): `"   o-7821-p   "`
   - Model pojazdu: `"Volvo XC60 D4"`
3. Wypisz raport do `document.getElementById("wynik").textContent` oraz wyświetl go w konsoli za pomocą `console.log`.

## Treść do wpisania
W skrypcie umieść dokładnie następujące napisy stałe w generowanym raporcie (ścieżka sukcesu, gdy `kod.length >= 5`):
- Nagłówek modułu: `"=== AUTORYZOWANY SERWIS POJAZDÓW — DIAGNOSTYKA ZLECEŃ NAPRAWCZYCH ==="`
- Etykieta analizy: `"ANALIZA KODU ZLECENIA: Kod pojazdu został pomyślnie zweryfikowany pod kątem prefiksu i sufiksu."`
- Etykieta kwalifikacji: `"KWALIFIKACJA POJAZDU DO STANOWISKA SERWISOWEGO: Przydzielono mechanika dyżurnego."`
- Etykieta pilności: `"STATUS PILNOŚCI: Zlecenie przyjęte do harmonogramu napraw bieżących."`

## Wymagana zawartość raportu
**Ścieżka sukcesu** — raport musi zawierać:
1. Powyższe etykiety stałe.
2. Oryginalny kod wejściowy oraz kod po `trim()` z podaną długością.
3. Model pojazdu.
4. Ustaloną kategorię oraz symbol prefiksu (pierwszy znak po `toUpperCase()`).
5. Ustalony priorytet oraz symbol sufiksu (ostatni znak po `toUpperCase()`).

**Ścieżka błędu** — gdy po `trim()` długość kodu jest mniejsza niż 5, funkcja ma zwrócić krótki komunikat błędu z oczyszczonym kodem i informacją o wymaganej minimalnej długości 5 znaków (bez pełnego raportu sukcesu).

## Podpowiedź / Wskazówki składniowe
- Pierwszy znak tekstu odczytasz za pomocą `tekst[0]` lub `tekst.charAt(0)`.
- Ostatni znak tekstu ma indeks o jeden mniejszy niż długość: `tekst[tekst.length - 1]`.
- Pamiętaj o użyciu metody `toUpperCase()` na pobranym znaku, aby porównanie z literami `'O'` czy `'P'` było niewrażliwe na wielkość liter.
