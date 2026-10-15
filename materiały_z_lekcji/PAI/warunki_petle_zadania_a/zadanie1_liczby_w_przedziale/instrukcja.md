# Sprawdzian Grupa 1 – Zadanie 1: Liczby w przedziale

## Cel

Poproś o dwie liczby całkowite: początek `A` i koniec `B`. Wypisz na stronie wszystkie liczby całkowite od `A` do `B` włącznie, oddzielone spacją albo przecinkiem.

## Przydatne

Pętla `for` dobrze pasuje, gdy znasz oba krańce zakresu. Zastanów się, co się stanie, gdy użytkownik poda najpierw większą liczbę — możesz iść malejąco albo pokazać komunikat o błędnym zakresie. Wejście z `prompt` zamień na liczbę, zanim porównasz `A` z `B`.

## Wymagania

1. Pobierz obie granice przez `prompt`.
2. Użyj pętli `for`.
3. Zabezpiecz przypadek, gdy `A` jest większe od `B`: wypisz liczby malejąco albo poinformuj o błędzie — Twój wybór.
4. Liczby na stronie oddziel spacją albo przecinkiem.

## Przykład

Wpisz `5` i `9`. Na stronie pojawia się `5, 6, 7, 8, 9`. Jeśli wpiszesz `4` i `1`, widać `4, 3, 2, 1` albo komunikat „Błędny zakres”.
