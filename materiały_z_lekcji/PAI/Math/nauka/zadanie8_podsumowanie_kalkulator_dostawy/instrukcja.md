# Nauka – Podsumowanie: kalkulator dostawy

## Cel

Strona pyta o wagę paczki w kilogramach. Policz koszt dostawy i pokaż go w elemencie o id „wynik”, zaokrąglony do dwóch miejsc. Koszt podstawowy to 12 zł. Za każdy rozpoczęty kilogram powyżej 1 kg doliczasz 3 zł.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

- `Math.ceil(x)` zaokrągla w górę — to „rozpoczęty kilogram”.
- Nadwyżkę możesz policzyć jako `Math.max(0, waga - 1)`.
- Dwa miejsca: `Math.round(x * 100) / 100`.

## Wymagania

1. Wagę pobierasz z `prompt`.
2. Koszt liczy się według zasad z celu.
3. W pudełku widać komunikat „Koszt dostawy: ” oraz wartość z dwoma miejscami i „ zł”.

## Przykład

Dla wagi `0.7` pojawia się „Koszt dostawy: 12.00 zł”. Dla `1.2` — „Koszt dostawy: 15.00 zł”, bo jest rozpoczęty jeden kilogram nadwyżki. Dla `2.0` też 15.00 zł, a dla `2.1` — 18.00 zł.
