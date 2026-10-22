# Nauka – Odległość między punktami (Math.hypot)

## Cel

Strona pyta o współrzędne dwóch punktów: `(x1, y1)` i `(x2, y2)`. Oblicz odległość między nimi i pokaż ją w elemencie o id „wynik”. To ten sam problem, który pojawia się w grach 2D albo na mapie.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

- Różnice współrzędnych: `dx = x2 - x1`, `dy = y2 - y1`.
- `Math.hypot(dx, dy)` liczy pierwiastek z `dx² + dy²`.
- Dwa miejsca po przecinku: `Math.round(wynik * 100) / 100`.

## Wymagania

1. Cztery liczby pobierasz z `prompt`.
2. W pudełku widać komunikat „Odległość: ” i wartość (może być zaokrąglona).

## Przykład

Dla punktów `(0, 0)` i `(3, 4)` w pudełku pojawia się „Odległość: 5”.
