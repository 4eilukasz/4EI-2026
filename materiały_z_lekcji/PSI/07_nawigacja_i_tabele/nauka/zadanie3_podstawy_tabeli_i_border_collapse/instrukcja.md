# Zadanie 3: Podstawy tabeli danych i scalanie obramowań (border-collapse)

## Cel zadania
Budowa semantycznej tabeli danych HTML z nagłówkiem thead i ciałem tbody oraz usunięcie podwójnych obramowań za pomocą border-collapse: collapse.

## Treść do wpisania
* Nagłówki kolumn: "Identyfikator", "Nazwa Artykułu", "Stan Magazynowy", "Cena Netto (PLN)"
* Rekord 1: "ART-101", "Klawiatura Mechaniczna", "15 szt.", "240.00"
* Rekord 2: "ART-102", "Mysz Optyczna USB", "42 szt.", "85.50"
* Rekord 3: "ART-103", "Podkładka Ergonomiczna", "30 szt.", "45.00"

## Wskazówki aktywizujące i dobre praktyki
* Pamiętaj o wyzerowaniu marginesów listy `nav ul` (`list-style: none`, `margin: 0`, `padding: 0`).
* Aby elementy ułożyły się poziomo, zastosuj `display: inline-block` na elementach `li`.
* W tabelach zawsze dodawaj `border-collapse: collapse`, aby ramki nie dublowały się.

## Wymagania techniczne
1. W pliku `style.css` ostyluj tabelę o selektorze `table`:
   - Ustaw szerokość: `width: 100%`.
   - Scal linie ramek komórek: `border-collapse: collapse`.
   - Dodaj margines pionowy: `margin: 20px 0`.
2. Dla komórek `th` oraz `td` nadaj:
   - Obramowanie: `border: 1px solid #94a3b8`.
   - Dopełnienie wewnętrzne: `padding: 10px 14px`.
3. Dla komórek nagłówka `th` nadaj tło #334155, biały kolor tekstu oraz wyrównanie `text-align: left`.
4. Dla komórek z ceną nadaj klasę `.cena` i wyrównaj do prawej: `text-align: right`.
