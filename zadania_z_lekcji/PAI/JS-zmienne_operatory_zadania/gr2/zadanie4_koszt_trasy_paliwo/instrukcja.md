# Sprawdzian Grupa 2 – Zadanie 4: Planowanie budżetu podróży

## Cel

Policz, ile litrów paliwa potrzeba na trasę i ile ta wyprawa będzie kosztować.

## Przydatne

Spalanie podaje się w litrach na 100 km, więc najpierw przeliczasz trasę na „setki kilometrów”, a dopiero potem mnożysz przez spalanie. Koszt to uzyskane litry razy cena za litr. Trzy wejścia zamień na liczby. Wzory zapisz w takiej kolejności, w jakiej liczyłbyś to na kartce.

## Wymagania

1. Pobierz długość trasy w km, spalanie w l/100 km oraz cenę paliwa za litr.
2. Najpierw policz litry: `(trasa / 100) * spalanie`.
3. Potem policz koszt: `iloscLitrow * cenaPaliwa`.
4. W ramce pokaż: „Potrzebujesz [X] litrów paliwa.” oraz „Koszt wyprawy: [Y] zł.”

## Przykład

Wpisz trasę `350`, spalanie `7.5` i cenę `6.40`. Program najpierw liczy litry, potem koszt i wypisuje obie linie raportu.
