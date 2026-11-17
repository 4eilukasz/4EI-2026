# Zadanie 6: Arkusz egzaminacyjny CKE – Harmonogram przeglądów technicznych maszyn

## Cel zadania
Realizacja profesjonalnej witryny technicznej w standardzie egzaminu praktycznego INF.03 z semantycznym menu nawigacyjnym oraz tabelą przeglądów technicznych.

## Treść do wpisania
* Pozycje menu: "Strona Główna", "Harmonogram Przeglądów", "Cennik Badań", "Kontakt Techniczny"
* Tytuł tabeli: "Harmonogram Okresowych Przeglądów Technicznych - Maszyny Przemysłowe"
* Kolumny tabeli: "Kod Maszyny", "Typ Urządzenia", "Ostatni Przegląd", "Następny Termin", "Koszt Serwisu", "Decyzja"
* Rekord 1: "CNC-01", "Frezarka Numeryczna", "2025-11-10", "2026-05-10", "1 850.00 PLN", "Dopuszczona"
* Rekord 2: "HYD-04", "Prasa Hydrauliczna", "2025-12-01", "2026-06-01", "2 400.00 PLN", "Wymaga Wymiany Oleju"
* Rekord 3: "LAS-02", "Wycinarka Laserowa", "2026-01-15", "2026-07-15", "3 100.00 PLN", "Dopuszczona"

## Wskazówki aktywizujące i dobre praktyki
* Pamiętaj o wyzerowaniu marginesów listy `nav ul` (`list-style: none`, `margin: 0`, `padding: 0`).
* Aby elementy ułożyły się poziomo, zastosuj `display: inline-block` na elementach `li`.
* W tabelach zawsze dodawaj `border-collapse: collapse`, aby ramki nie dublowały się.

## Wymagania techniczne
1. Zaprojektuj nagłówek strony z logo "TechSerwis Przemysłowy" oraz menu nawigacyjnym `<nav>` ułożonym poziomo za pomocą `display: inline-block`.
2. W menu wyróżnij aktywny link "Harmonogram Przeglądów" klasą `.aktywny` (tło #0284c7, biały tekst).
3. Sformatuj tabelę techniczną:
   - Zastosuj `border-collapse: collapse` oraz szerokość 100%.
   - Nagłówek ciemnogranatowy (#0f172a), biały tekst, padding 12px 14px.
   - Pasy zebry w `tbody` (#f8fafc dla wierszy parzystych).
   - Podświetlenie wiersza przy najechaniu myszą na #e0f2fe.
   - Kolumnę kosztu serwisu wyrównaj do prawej (`text-align: right`).
