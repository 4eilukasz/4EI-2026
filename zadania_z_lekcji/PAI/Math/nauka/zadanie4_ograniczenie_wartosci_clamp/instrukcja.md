# Nauka – Ograniczenie wartości (clamp)

## Cel

Strona pyta o liczbę. W elemencie o id „wynik” pokaż ją „przyciętą” do zakresu od 0 do 100: wartość mniejsza niż 0 staje się 0, większa niż 100 staje się 100, a liczba ze środka zostaje bez zmian.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

- `Math.max(min, x)` podnosi wartość do minimum, gdy jest za niska.
- `Math.min(max, x)` obniża wartość do maksimum, gdy jest za wysoka.
- Wzorzec clamp: `Math.min(max, Math.max(min, x))`.

## Wymagania

1. Liczbę pobierasz z `prompt`.
2. Zakres to stałe `min = 0` i `max = 100`.
3. W pudełku widać komunikat „Wynik po clamp: ” i przyciętą wartość.

## Przykład

Wpisz `-20` — pojawia się „Wynik po clamp: 0”. Wpisz `50` — „Wynik po clamp: 50”. Wpisz `135` — „Wynik po clamp: 100”.
