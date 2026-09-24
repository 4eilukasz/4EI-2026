# Sprawdzian Grupa 1 – Zadanie 6: Faktura VAT

## Cel

Na podstawie nazwy towaru i ceny netto policz podatek VAT oraz cenę brutto. Wynik pokaż jak krótką fakturę.

## Przydatne

Stawka 23% to ułamek `0.23`. Podatek to netto razy stawka, a brutto to netto plus podatek. Jeśli cena zostanie tekstem, dodawanie sklei napisy zamiast dodać liczby — zamień cenę przez `Number()` albo `parseFloat()`. Kwoty pieniężne zwykle zaokrągla się do dwóch miejsc po kropce.

## Wymagania

1. Ustaw stałą `STAWKA_VAT` równą `0.23`.
2. Pobierz nazwę towaru oraz cenę netto.
3. Policz kwotę podatku (`cenaNetto * STAWKA_VAT`) oraz cenę brutto (`cenaNetto + podatek`).
4. W ramce pokaż czytelnie: „Towar: [Nazwa]”, „Cena Netto: [X] PLN”, „Podatek VAT (23%): [Y] PLN”, „Cena Brutto: [Z] PLN”. Wyniki zaokrąglij do dwóch miejsc po przecinku (`.toFixed(2)`).

## Przykład

Wpisz towar `Książka` i netto `100`. W ramce widać towar, netto 100.00 PLN, VAT 23.00 PLN i brutto 123.00 PLN.
