# Sprawdzian Grupa 1 – Zadanie 3: Gra „Zgadnij liczbę”

## Cel

Skrypt ma zapisaną w kodzie liczbę całkowitą (na przykład 7). Gracz zgaduje, aż trafi. Po każdej złej próbie dostaje podpowiedź, a po sukcesie na stronie — nie w alercie — pojawia się gratulacja.

## Przydatne

Pętla `do...while` wymusza przynajmniej jedną próbę. Szukaną wartość ustaw na początku jako stałą albo zmienną. Porównanie „za mało / za dużo” robisz wewnątrz obrotu; sukces kończy pętlę. `prompt` i `alert` zatrzymują skrypt przy każdym strzale. Napis „BRAWO” za pętlą nie pojawi się, dopóki gracz nie zgadnie. Konsola nie zastąpi przeklikania.

## Wymagania

1. Użyj pętli `do...while`. Gracz podaje liczbę przynajmniej raz.
2. Gdy wpis jest mniejszy od szukanej, pokaż `alert` „Za mało!”. Gdy większy — `alert` „Za dużo!”.
3. Po trafieniu pętla się kończy, a na stronie pojawia się „BRAWO! Zgadłeś!”.
4. Opcjonalnie możesz zliczać próby i pokazać ich liczbę na końcu.

## Przykład

Szukana to na przykład 7. Najpierw wpisujesz `3` i widzisz alert „Za mało!”. Potem `10` i alert „Za dużo!”. Gdy wpiszesz `7`, alertów już nie ma, a na stronie widać „BRAWO! Zgadłeś!”.
