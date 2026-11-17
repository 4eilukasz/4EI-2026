# Zadanie 7 (Extra): Zaawansowany panel zestawień logistycznych z filtrami i tabelą

## Cel zadania
Zaprojektowanie kompleksowego pulpitu dyspozytora logistycznego z wielopoziomowym menu nawigacyjnym, kartą statusową oraz zaawansowaną tabelą przewozów z podsumowaniem tfoot.

## Treść do wpisania
* Menu dyspozytora: "Pulpit Główny", "Trasy Aktywne", "Raporty Spalania", "Archiwum Zleceń"
* Tytuł: "Wykaz Realizowanych Frachtów Międzynarodowych"
* Trasa A: "PL-01", "Warszawa - Berlin", "4 800 kg", "Dostarczono", "4 200 PLN"
* Trasa B: "PL-02", "Gdańsk - Wiedeń", "12 500 kg", "W Transporcie", "8 900 PLN"
* Trasa C: "PL-03", "Kraków - Praga", "7 200 kg", "Załadunek", "5 100 PLN"
* Stopka podsumowania: "Łączna wartość zakontraktowanych frachtów:", "18 200 PLN"

## Wskazówki aktywizujące i dobre praktyki
* Pamiętaj o wyzerowaniu marginesów listy `nav ul` (`list-style: none`, `margin: 0`, `padding: 0`).
* Aby elementy ułożyły się poziomo, zastosuj `display: inline-block` na elementach `li`.
* W tabelach zawsze dodawaj `border-collapse: collapse`, aby ramki nie dublowały się.

## Wymagania techniczne
1. Zaprojektuj spójny panel nawigacyjny z podświetlaną zakładką aktywną `.aktywny`.
2. Zbuduj zaawansowaną tabelę z `thead`, `tbody` oraz `tfoot`.
3. Wprowadź wyróżnienia statusów:
   - Klasa `.status-sukces` z zielonkawym tłem dla dostarczonych frachtów.
   - Klasa `.status-ostrzezenie` z żółtawym tłem dla transportu w toku.
4. Zastosuj naprzemienne pasy zebry, płynne podświetlanie wiersza po najechaniu kursorem oraz pogrubione kwoty w `tfoot`.
