# Nauka – Zaokrąglanie ceny w koszyku

## Cel

Strona pyta o cenę produktu i rabat w procentach. Oblicz cenę po rabacie i pokaż ją w elemencie o id „wynik”, zaokrągloną do dwóch miejsc po przecinku. To typowa sytuacja ze sklepu internetowego.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`. Kilka linii sklejasz znakiem `"\n"`.

- `Math.round(x)` zaokrągla do najbliższej liczby całkowitej.
- Dwa miejsca: `Math.round(x * 100) / 100`.
- Cena po rabacie to `cena * (1 - rabat / 100)`. W finansach zaokrąglaj na końcu, bo liczby zmiennoprzecinkowe bywają niedokładne.

## Wymagania

1. Cenę i rabat pobierasz z `prompt` i zamieniasz na liczby.
2. W pudełku widać cenę po rabacie zaokrągloną do dwóch miejsc.
3. Komunikat ma postać „Cena po rabacie: ” oraz wartość i „ zł”.

## Przykład

W pierwszym oknie wpisz `49.99`, w drugim `15`. W pudełku pojawia się „Cena po rabacie: 42.49 zł”.
