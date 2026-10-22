# Nauka – Pole koła (Math.PI, Math.pow)

## Cel

Strona pyta o promień koła. Oblicz pole ze wzoru \(P = \pi r^2\) i pokaż je w elemencie o id „wynik”, zaokrąglone do dwóch miejsc po przecinku.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

- `Math.PI` to stała π.
- `Math.pow(r, 2)` albo `r ** 2` podnosi promień do kwadratu.
- Dwa miejsca: `Math.round(x * 100) / 100`.

## Wymagania

1. Promień pobierasz z `prompt`.
2. W pudełku widać komunikat „Pole koła: ” i pole zaokrąglone do dwóch miejsc.

## Przykład

Dla promienia `2` w pudełku pojawia się „Pole koła: 12.57”.
