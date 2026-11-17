# Zadanie 1: Reset listy nawigacyjnej i poziomy układ inline-block

## Cel zadania
Opanowanie resetu marginesów i punktorów listy nawigacyjnej oraz ułożenie pozycji menu w jednym wierszu przy użyciu właściwości display: inline-block.

## Treść do wpisania
* Pozycja 1: "Strona Główna"
* Pozycja 2: "O Nas i Misja"
* Pozycja 3: "Oferta Usług"
* Pozycja 4: "Kontakt"

## Wskazówki aktywizujące i dobre praktyki
* Pamiętaj o wyzerowaniu marginesów listy `nav ul` (`list-style: none`, `margin: 0`, `padding: 0`).
* Aby elementy ułożyły się poziomo, zastosuj `display: inline-block` na elementach `li`.
* W tabelach zawsze dodawaj `border-collapse: collapse`, aby ramki nie dublowały się.

## Wymagania techniczne
1. W pliku `style.css` zresetuj listę nawigacyjną `nav ul`:
   - Usuń punktory listy (`list-style: none`).
   - Wyzeruj marginesy zewnętrzne i wewnętrzne (`margin: 0`, `padding: 0`).
   - Ustaw kolor tła paska menu na #1e293b oraz zaokrąglenie rogów `border-radius: 6px`.
2. Ustaw elementy listy `nav li` w jednej poziomej linii za pomocą `display: inline-block`.
3. Dla odnośników `nav a` nadaj:
   - Wyświetlanie jako blok: `display: block`.
   - Dopełnienie: `padding: 12px 20px`.
   - Kolor tekstu: #f8fafc.
   - Brak podkreślenia: `text-decoration: none`.
   - Grubość tekstu: `font-weight: bold`.
4. Zdefiniuj stan najechania `nav a:hover` z tłem #0284c7.
