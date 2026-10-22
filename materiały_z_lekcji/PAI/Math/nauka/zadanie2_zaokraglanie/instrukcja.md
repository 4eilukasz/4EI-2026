# Zadanie 2: Zaokrąglanie do 2 miejsc po przecinku

## Cel

W szablonie jest puste pudełko o id „wynik”. Weź liczbę dziesiętną (na przykład `3.14159`), zaokrąglij ją do dwóch miejsc po przecinku metodą `Math.round` i wypisz wynik na stronie.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

- `Math.round(x)` zaokrągla do najbliższej liczby całkowitej.
- Żeby dostać dwa miejsca po przecinku, najpierw pomnóż przez 100, zaokrąglij, potem podziel przez 100: `Math.round(liczba * 100) / 100`.

## Wymagania

1. W kodzie jest zmienna z liczbą dziesiętną.
2. Po zaokrągleniu w elemencie o id „wynik” widać komunikat „Zaokrąglono: ” i wartość.

## Przykład

Dla liczby `3.14159` w pudełku pojawia się „Zaokrąglono: 3.14”.
