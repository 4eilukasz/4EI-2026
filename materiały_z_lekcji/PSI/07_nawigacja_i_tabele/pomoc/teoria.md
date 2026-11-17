# Kompendium Teoretyczne: Paski nawigacyjne (menu poziome) oraz kompleksowe formatowanie tabel danych

## 1. Semantyka i architektura paska nawigacyjnego

Menu nawigacyjne witryny internetowej budujemy w oparciu o semantyczny znacznik `<nav>` oraz nieuporządkowaną listę `<ul>` z elementami `<li>` zawierającymi odnośniki `<a>`.

### Dlaczego stosujemy listę wypunktowaną wewnątrz znacznika `<nav>`?
1. **Dostępność cyfrowa (Screen Readers):** Czytniki ekranu dla osób niewidomych odczytują listę jako zgrupowany zbiór elementów i informują użytkownika: *„Nawigacja, lista z 4 elementami”*, co pozwala na natychmiastową orientację w strukturze witryny.
2. **Hierarchia semantyczna:** Oddzielenie nawigacji od zwykłych odnośników w treści akapitów.

---

## 2. Reset stylów listy i budowa poziomego menu (bez Flexboxa)

Domyślnie lista `<ul>` posiada kropki wypunktowania (`list-style-type: disc`), wewnętrzne wcięcie (`padding-inline-start: 40px`) oraz marginesy pionowe. Aby przekształcić ją w nowoczesny pasek nawigacyjny, konieczny jest reset:

```css
nav ul {
  list-style: none; /* Usunięcie kropek/znaczników listy */
  padding: 0;       /* Usunięcie domyślnego wcięcia przeglądarki */
  margin: 0;        /* Usunięcie marginesów zewnętrznych */
}
```

### Technika poziomego paska: `display: inline-block`
Ponieważ w Semestrze 2 obowiązuje rygor przed-flexboxowy, elementy `<li>` układamy w jednym wierszu nadając im właściwość `display: inline-block`:

```css
nav li {
  display: inline-block; /* Elementy listy stają obok siebie w jednej linii */
  margin-right: 15px;    /* Odstęp między pozycjami menu */
}
```

### Ergonomia kliknięcia: `display: block` na znaczniku `<a>`
Aby użytkownik mógł kliknąć w dowolne miejsce przycisku nawigacyjnego, odnośnik wewnątrz `<li>` powinien stać się blokiem o pełnym dopełnieniu:

```css
nav a {
  display: block;
  padding: 10px 16px;
  color: #1e293b;
  text-decoration: none;
  font-weight: 600;
  border-radius: 4px;
}

nav a:hover {
  background-color: #0284c7;
  color: #ffffff;
}
```

### Wyróżnienie pozycji aktywnej (`.aktywny`)
Użytkownik zawsze powinien wiedzieć, na której podstronie aktualnie się znajduje:

```css
nav a.aktywny {
  background-color: #0369a1;
  color: #ffffff;
  border-bottom: 3px solid #f59e0b;
}
```

---

## 3. Kompleksowe formatowanie tabel danych (`<table>`)

Tabele w standardzie HTML5 służą wyłącznie do prezentowania danych tabelarycznych (cenniki, harmonogramy, wyniki badań), a nie do budowy układu strony.

### Semantyczna struktura tabeli
Tabela powinna zawierać sekcje:
* `<caption>` – podpis/tytuł tabeli.
* `<thead>` – nagłówek tabeli z wierszem `<tr>` i komórkami nagłówkowymi `<th>`.
* `<tbody>` – ciało tabeli z wierszami danych `<tr>` i komórkami `<td>`.
* `<tfoot>` – opcjonalne podsumowanie (np. suma kwot).

---

## 4. Właściwość `border-collapse` – pojedyncze vs podwójne obramowanie

Domyślnie przeglądarka wyświetla obramowania tabeli w modelu rozdzielnym (`border-collapse: separate`), co tworzy nieestetyczną przerwę między komórkami.

```css
/* Prawidłowe formatowanie obramowań tabeli */
table {
  width: 100%;
  border-collapse: collapse; /* Złączenie obramowań sąsiadujących komórek w jedną wspólną linię */
  margin: 20px 0;
}

th, td {
  border: 1px solid #cbd5e1; /* Czysta, pojedyncza linia ramki */
  padding: 12px 16px;        /* Swobodne odstępy tekstu od krawędzi */
}
```

---

## 5. Pasy zebry (`:nth-child`) i interaktywne podświetlanie wierszy

Czytanie szerokich tabel danych jest trudne, jeśli wiersze zlewają się ze sobą. Stosujemy dwa zabiegi ułatwiające percepcję:

### Pasy zebry (naprzemienne tła)
Za pomocą pseudoklasy strukturalnej `:nth-child(even)` (wiersze parzyste) lub `:nth-child(odd)` (nieparzyste) nadajemy subtelne tło co drugiemu wierszowi:

```css
tbody tr:nth-child(even) {
  background-color: #f8fafc; /* Bardzo jasny odcień szarości/błękitu */
}
```

### Podświetlanie aktywnego wiersza (hover)
Gdy kursor znajduje się nad danym wierszem, podświetlamy cały rekord:

```css
tbody tr:hover {
  background-color: #e2e8f0; /* Wyraźniejsze tło wskazujące czytany wiersz */
}
```

---

## 6. Wyrównanie zawartości komórek tabeli

Egzaminy CKE kładą ogromny nacisk na estetykę typograficzną tabel:
* **Tekst opisowy (nazwy, tytuły):** wyrównanie do lewej (`text-align: left;`).
* **Liczby, ceny, kwoty walutowe:** wyrównanie do prawej (`text-align: right;`), co ułatwia porównywanie rzędów wielkości.
* **Ikony, statusy, identyfikatory:** wyśrodkowanie (`text-align: center;`).
* **Wyrównanie pionowe:** właściwość `vertical-align: middle;` (lub `top` przy wielolinijkowych opisach).

```css
th {
  background-color: #1e293b;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
}

td.cena {
  text-align: right;
  font-weight: 600;
}

td.status {
  text-align: center;
}
```

---

## 7. Dydaktyka: Typowe pomyłki uczniów

> [!WARNING] Typowa pomyłka 1: Brak właściwości border-collapse: collapse
> Uczeń definiuje `border: 1px solid black` dla `table`, `th` i `td`, ale nie dodaje `border-collapse: collapse`. Tabela wygląda na przestarzałą, z podwójnymi, „grubymi” ramkami i odstępami.

> [!WARNING] Typowa pomyłka 2: Stylowanie :hover na elemencie `table` zamiast `tr`
> Zapis `table:hover` podświetla całą tabelę naraz! Aby uzyskać podświetlenie czytanego wiersza, selektor musi wskazywać wiersz w ciele tabeli: `tbody tr:hover`.

> [!WARNING] Typowa pomyłka 3: Przerwy między pozycjami menu przy display: inline-block
> Elementy `inline-block` w kodzie HTML reagują na białe znaki (spacje i entery w kodzie źródłowym między tagami `</li>`), co tworzy około 4px niewidzialnego marginesu. Należy to uwzględniać i nie dodawać zbędnych podwójnych marginesów.
