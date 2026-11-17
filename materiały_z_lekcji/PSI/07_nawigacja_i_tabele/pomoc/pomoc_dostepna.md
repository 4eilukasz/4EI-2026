# Pomoc Dostępna: Tworzenie poziomego menu i tabeli

Instrukcja wykonania krok po kroku prostym językiem.

---

## Słowniczek pojęć
* **Menu poziome:** Pasek odnośników ułożonych obok siebie w jednym wierszu.
* **list-style: none:** Polecenie usuwające kropki wypunktowania z listy.
* **display: inline-block:** Polecenie, które ustawia elementy listy obok siebie w jednej linii.
* **border-collapse: collapse:** Polecenie łączące podwójne obramowania tabeli w jedną wspólną linię.
* **nth-child(even):** Wybór co drugiego wiersza tabeli do nadania innego koloru tła (pasy zebry).

---

## Jak zrobić poziome menu w 4 krokach?
1. **Krok 1:** W pliku HTML stwórz znaczniki `<nav>`, a w środku listę `<ul>`, elementy `<li>` oraz odnośniki `<a>`.
2. **Krok 2:** W pliku CSS wpisz dla `nav ul` reguły: `list-style: none;`, `padding: 0;`, `margin: 0;`. Znikną kropki i wcięcia.
3. **Krok 3:** Dla `nav li` dodaj `display: inline-block;`. Pozycje menu ułożą się poziomo.
4. **Krok 4:** Dla `nav a` dodaj `display: block;` i `padding: 12px 18px;`. Cały przycisk stanie się łatwy do kliknięcia.

---

## Jak sformatować ładną tabelę w 4 krokach?
1. **Krok 1:** Dodaj dla `table` właściwość `border-collapse: collapse;`. Znikną podwójne linie ramek.
2. **Krok 2:** Dodaj dla `th` i `td` pojedyncze obramowanie `border: 1px solid #cbd5e1;` oraz odstęp `padding: 10px 14px;`.
3. **Krok 3:** Wyróżnij nagłówki `th` ciemnym tłem (`background-color: #1e293b;`) i białym tekstem (`color: #ffffff;`).
4. **Krok 4:** Dodaj dla `tbody tr:nth-child(even)` jasne tło, aby co drugi wiersz był szary.
