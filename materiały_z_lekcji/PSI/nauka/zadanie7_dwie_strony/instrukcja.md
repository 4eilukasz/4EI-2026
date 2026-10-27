# Nauka – Box model na dwóch podstronach (podsumowanie)

## Cel

Jeden wspólny `style.css` ma dać Startowi i Info to samo pudełko treści: szerokość, padding, margin, `border-box` i złotą linię pod tytułem.

## Przydatne

Korzystasz z zestawu z zadania 6. Oba pliki HTML linkują ten sam arkusz (`<link>`). Wartości liczbowe i kolory zostaw jak w zadaniu 6 — tu łączysz je w jedną witrynę, a nie wymyślasz nowe wymiary.

## Wymagania

1. `index.html` i `info.html`, menu Start / Info, różne `title`: `Pracownia — start` i `Pracownia — info`.
2. `body`: `margin: 0;`.
3. `main`: `width: 400px;`, `padding: 16px;`, `margin: 16px;`, `border: 2px solid #1e4d7b;`, `box-sizing: border-box;`.
4. `header`: `margin-bottom: 16px;`, `border-bottom: 3px solid #c9a227;`.
5. Autor na obu.

## Oczekiwany wynik

Wejdź na Start, potem przez menu na Info: obie strony mają tę samą kartę treści (`400px`, powietrze w środku, odstęp od krawędzi) i złotą linię pod tytułem. Menu przełącza podstrony bez zmiany wyglądu pudełka.
