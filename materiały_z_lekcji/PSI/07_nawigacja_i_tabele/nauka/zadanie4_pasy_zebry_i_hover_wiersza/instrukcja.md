# Zadanie 4: Pasy zebry (:nth-child) i interaktywne podświetlanie wierszy (:hover)

## Cel zadania
Zwiększenie czytelności wielowierszowej tabeli danych poprzez naprzemienne pasy zebry oraz dynamiczne podświetlanie aktywnego rekordu.

## Treść do wpisania
* Nagłówki: "Lp.", "Pracownik", "Dział", "Stanowisko", "Staż (lata)"
* Wiersz 1: "1", "Anna Kowalska", "IT", "Architekt Systemów", "7"
* Wiersz 2: "2", "Piotr Nowak", "Marketing", "Specjalista SEO", "3"
* Wiersz 3: "3", "Marta Wiśniewska", "Finanse", "Główny Księgowy", "10"
* Wiersz 4: "4", "Tomasz Kamiński", "IT", "Programista Frontend", "2"
* Wiersz 5: "5", "Zofia Lewandowska", "HR", "Koordynator Szkoleń", "5"

## Wskazówki aktywizujące i dobre praktyki
* Pamiętaj o wyzerowaniu marginesów listy `nav ul` (`list-style: none`, `margin: 0`, `padding: 0`).
* Aby elementy ułożyły się poziomo, zastosuj `display: inline-block` na elementach `li`.
* W tabelach zawsze dodawaj `border-collapse: collapse`, aby ramki nie dublowały się.

## Wymagania techniczne
1. W pliku `style.css` sformatuj tabelę o szerokości 100% z `border-collapse: collapse`.
2. Dodaj pasy zebry dla parzystych wierszy w ciele tabeli:
   - Selektor: `tbody tr:nth-child(even)` z tłem #f1f5f9.
3. Dodaj podświetlenie wiersza pod kursorem myszy:
   - Selektor: `tbody tr:hover` z tłem #e2e8f0.
4. Nagłówek tabeli `thead th` wyróżnij tłem #1e293b, białym tekstem oraz paddingiem 12px 16px.
