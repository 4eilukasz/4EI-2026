# Sprawdzian Grupa 1 – Zadanie 2: Kantor walut

## Cel

Przelicz kwotę w złotówkach na euro i na dolary amerykańskie. Kursy trzymaj w stałych.

## Przydatne

Kwota może mieć grosze, więc tekst z okienka zamień na liczbę. Przeliczenie z złotówek na inną walutę to dzielenie przez kurs. Stałe `const` dobrze pasują do kursów, które nie zmieniają się w trakcie działania programu. Jeśli chcesz, `.toFixed(2)` zostawia zawsze dwa miejsca po kropce.

## Wymagania

1. Przyjmij kurs euro `4.30` oraz kurs dolara `3.90` jako stałe.
2. Zapytaj: „Ile złotych chcesz wymienić?”.
3. Policz kwotę w euro i w dolarach (dzielenie).
4. W ramce pokaż: „Kwota [X] PLN to:”, potem linię „[Y] EUR” i linię „[Z] USD”.

## Przykład

Wpisz `430`. W ramce widać, że 430 PLN to 100 EUR oraz około 110.26 USD. Przy `100.50` wynik też ma mieć sens jako liczba, nie sklejony tekst.
