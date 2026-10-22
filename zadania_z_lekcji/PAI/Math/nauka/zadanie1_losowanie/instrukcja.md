# Zadanie 1: Losowanie liczby z zakresu

## Cel

W szablonie jest puste pudełko o id „wynik”. Napisz skrypt, który wylosuje liczbę całkowitą z zakresu od `min` do `max` (włącznie) i wypisze ją w tym pudełku. Wartości `min` i `max` ustaw w kodzie, na przykład 1 i 10.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

- `Math.random()` zwraca liczbę z przedziału od 0 włącznie do 1 wyłącznie.
- `Math.floor(x)` obcina w dół do liczby całkowitej.
- Wzór na całkowitą z zakresu `[min, max]`: `Math.floor(Math.random() * (max - min + 1)) + min`.

## Wymagania

1. W kodzie są stałe `min` i `max`.
2. Wylosowana liczba ląduje w zmiennej, a potem w elemencie o id „wynik”.
3. Tekst ma postać „Wylosowano: ” i liczba.

## Przykład

Otwórz stronę. W pudełku pojawia się na przykład „Wylosowano: 7”. Po odświeżeniu liczba może być inna, ale zawsze z zakresu od 1 do 10.
