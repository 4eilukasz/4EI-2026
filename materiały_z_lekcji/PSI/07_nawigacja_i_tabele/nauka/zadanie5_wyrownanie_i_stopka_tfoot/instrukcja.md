# Zadanie 5: Wyrównanie typograficzne danych i stopka podsumowująca (tfoot)

## Cel zadania
Formatowanie danych finansowych z wyrównaniem kwot do prawej, centrowaniem statusów oraz wyróżnioną stopką tabeli tfoot.

## Treść do wpisania
* Nagłówki: "Nr Faktury", "Klient", "Data Wystawienia", "Status", "Wartość Brutto"
* FV/2026/01, Alfa Sp. z o.o., 2026-03-01, Opłacona, 1 230.00 PLN
* FV/2026/02, Beta S.A., 2026-03-05, Oczekująca, 4 500.00 PLN
* FV/2026/03, Gamma IT, 2026-03-08, Opłacona, 890.00 PLN
* Stopka podsumowania: "Razem do zapłaty:", "6 620.00 PLN"

## Wskazówki aktywizujące i dobre praktyki
* Pamiętaj o wyzerowaniu marginesów listy `nav ul` (`list-style: none`, `margin: 0`, `padding: 0`).
* Aby elementy ułożyły się poziomo, zastosuj `display: inline-block` na elementach `li`.
* W tabelach zawsze dodawaj `border-collapse: collapse`, aby ramki nie dublowały się.

## Wymagania techniczne
1. W pliku HTML utwórz tabelę z sekcjami `thead`, `tbody` oraz `tfoot`.
2. W stopce `tfoot` zastosuj atrybut `colspan="4"` dla komórki z napisem "Razem do zapłaty:".
3. W pliku `style.css`:
   - Zastosuj `border-collapse: collapse` oraz szerokość 100%.
   - Komórki z kwotami (`.kwota`) wyrównaj do prawej: `text-align: right`.
   - Komórki ze statusem (`.status`) wyśrodkuj: `text-align: center`.
   - Sformatuj `tfoot th, tfoot td`: tło #0f172a, biały pogrubiony tekst, padding 14px.
