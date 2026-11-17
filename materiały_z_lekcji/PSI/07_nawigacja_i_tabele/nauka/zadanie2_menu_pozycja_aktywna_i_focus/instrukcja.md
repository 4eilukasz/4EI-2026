# Zadanie 2: Pozycja aktywna i dostępność fokusu w menu nawigacyjnym

## Cel zadania
Wyróżnienie aktywnej podstrony za pomocą dedykowanej klasy .aktywny oraz zapewnienie pełnej dostępności cyfrowej klawiatury za pomocą właściwości outline.

## Treść do wpisania
* Pozycja 1 (aktywna): "Aktualności"
* Pozycja 2: "Galeria Zdjęć"
* Pozycja 3: "Dokumenty"
* Pozycja 4: "Kontakt"

## Wskazówki aktywizujące i dobre praktyki
* Pamiętaj o wyzerowaniu marginesów listy `nav ul` (`list-style: none`, `margin: 0`, `padding: 0`).
* Aby elementy ułożyły się poziomo, zastosuj `display: inline-block` na elementach `li`.
* W tabelach zawsze dodawaj `border-collapse: collapse`, aby ramki nie dublowały się.

## Wymagania techniczne
1. W pliku HTML nadaj klasę `class="aktywny"` pierwszemu odnośnikowi w menu (`Aktualności`).
2. W pliku `style.css` ostyluj stan aktywny `nav a.aktywny`:
   - Tło: #0369a1.
   - Kolor tekstu: #ffffff.
   - Dolna ramka akcentująca: `border-bottom: 3px solid #f59e0b`.
3. Zapewnij dostępność nawigacji klawiszem Tab:
   - Dla selektora `nav a:focus` zdefiniuj kontur: `outline: 2px solid #f59e0b;` oraz `outline-offset: -2px;`.
