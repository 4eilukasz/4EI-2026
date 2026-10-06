# Ściąga: HTML + CSS 01–06

Na te cztery zadania wystarczy to, co poniżej. Style **tylko** w pliku CSS. Jednostki: **`px`**. Bez Flexboxa, Gridu i `position`.

---

## 1. Szkielet HTML5

```html
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content="Imię Nazwisko klasa" />
    <title>Tekst zakładki</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- treść -->
  </body>
</html>
```

| Element | Po co |
| ------- | ----- |
| `<!DOCTYPE html>` | tryb HTML5 |
| `lang="pl"` | język strony |
| `charset="UTF-8"` | polskie znaki |
| `title` | zakładka przeglądarki (to **nie** jest `h1`) |
| `meta author` | autor; te same dane co w stopce |
| `<link rel="stylesheet" href="style.css" />` | arkusz w `head`; ścieżka **względna** |

`title` na każdej podstronie **inny**. Dwie podstrony w tym samym folderze: obie mają `href="style.css"`.

Byty: `&copy;` ©, `&ndash;` –, `&oacute;` ó (gdy polecenie każe encję, nie wpisuj gołego znaku).

---

## 2. Semantyka i tekst

```html
<body>
  <header>
    <h1>Nazwa witryny</h1>
    <nav>
      <a href="index.html">Start</a>
      <a href="kontakt.html">Kontakt</a>
    </nav>
  </header>
  <main>
    <section>
      <h2>Rozdział</h2>
      <p>Akapit z <strong>ważnym</strong> i <em>wyróżnieniem</em>.</p>
      <p>Od <time datetime="2019">2019</time> roku.</p>
    </section>
    <article>…</article>
  </main>
  <footer>
    <p>Imię Nazwisko klasa</p>
  </footer>
</body>
```

- `header` — nagłówek witryny; `nav` — menu; `main` — treść tej podstrony (zwykle jeden); `footer` — stopka; `section` / `article` — rozdział / samodzielny kawałek.
- Menu: docelowo `nav` → `ul` → `li` → `a` (semantyka listy odnośników). Układ w poziomie wymaga jednak `display` (dział CSS 07) albo Flexa — na tym zestawie zostajesz przy `nav` z bezpośrednimi `a`.
- `h1` raz na stronę. Kolejne poziomy: `h2`, `h3`.
- `<a href="#cennik">` skacze do `id="cennik"` na **tej** stronie.
- Nie buduj szkieletu samymi `div`.

---

## 3. Obraz, lista, tabela

```html
<figure>
  <img src="https://picsum.photos/id/1011/640/360" alt="Opis treści zdjęcia" width="640" height="360" />
  <figcaption>Podpis pod zdjęciem.</figcaption>
</figure>

<ul>
  <li>punkt</li>
</ul>
<ol>
  <li>krok 1</li>
</ol>
<dl>
  <dt>Termin</dt>
  <dd>Definicja</dd>
</dl>
```

`alt` opisuje **co widać**, nie „obrazek”. `width` / `height` bez `px`. Adres `src` wklejasz **dokładnie** z instrukcji.

```html
<table>
  <thead>
    <tr>
      <th colspan="2">Tytuł nad dwiema kolumnami</th>
    </tr>
    <tr>
      <th>Kolumna A</th>
      <th>Kolumna B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>dana</td>
      <td>dana</td>
    </tr>
  </tbody>
</table>
```

`th` — nagłówek, `td` — dana. `colspan="2"` scala dwie komórki w poziomie. Ramkę tabeli dajesz w **CSS** (`border` na `table, th, td`). Przy dwóch krawędziach obok siebie przydaje się `border-collapse: collapse` na `table`.

---

## 4. Formularz i multimedia

```html
<form action="#" method="post">
  <p>
    <label for="imie">Imię</label>
    <input type="text" id="imie" name="imie" placeholder="Anna" required />
  </p>
  <p>
    <label for="mail">E-mail</label>
    <input type="email" id="mail" name="mail" />
  </p>
  <p>
    <label for="pakiet">Pakiet</label>
    <select id="pakiet" name="pakiet">
      <option value="mini">Mini</option>
    </select>
  </p>
  <p>
    <input type="radio" id="plener" name="miejsce" value="plener" />
    <label for="plener">Plener</label>
  </p>
  <p>
    <input type="checkbox" id="zgoda" name="zgoda" value="tak" />
    <label for="zgoda">Zgoda</label>
  </p>
  <p>
    <label for="data">Data</label>
    <input type="date" id="data" name="data" />
  </p>
  <p>
    <label for="uwagi">Uwagi</label>
    <textarea id="uwagi" name="uwagi" rows="4" cols="40"></textarea>
  </p>
  <p>
    <button type="submit">Wyślij</button>
  </p>
</form>
```

- `label` + `for` = `id` pola. `name` idzie przy wysyłce. `action="#"` — bez serwera.
- Radio w jednej grupie: **ten sam** `name`, różne `id` i `value`.
- `required` / `placeholder` — gdy polecenie każe.

```html
<video controls width="640" height="360" poster="https://picsum.photos/id/1018/640/360">
  Przeglądarka nie obsługuje odtwarzania wideo.
</video>

<iframe src="podglad.html" width="560" height="320" title="Opis ramki"></iframe>
```

`video` ma znacznik zamykający i tekst zapasowy. `controls` — pasek odtwarzania. `poster` — klatka przed startem. `iframe` — inny dokument w ramce (na tym zestawie: lokalny `podglad.html`); `title` obowiązkowy.

---

## 5. CSS: podłączenie i selektory

```css
selektor {
  właściwość: wartość;
}
```

Średnik po wartości. Nazwy z dywizem: `background-color`, nie `backgroundColor`.

| Selektor | Trafia w |
| -------- | -------- |
| `p` | każdy akapit |
| `.haslo` | `class="haslo"` |
| `#cennik` | `id="cennik"` (unikalne na stronie) |
| `header a` | odnośnik **wewnątrz** `header` |
| `h1, h2` | oba nagłówki **tymi samymi** deklaracjami |

Kaskada: przy równym „celowaniu” wygrywa **późniejsza** reguła w pliku. Węższy selektor (`header a`) przebija szerszy (`a`).

Nie pisz stylów w atrybucie `style="..."` ani w `<style>`.

---

## 6. Kolory, fonty, ramka

```css
body {
  background-color: #f4e8d8;
  color: #5c3a21;
}
h1 {
  color: rgb(201, 162, 39);
}
footer {
  background-color: rgba(0, 0, 0, 0.85);
}
```

| Zapis | Przykład |
| ----- | -------- |
| nazwa | `white`, `navy`, `gold` |
| hex | `#1e4d7b`, skrót `#fff` |
| rgb | `rgb(30, 77, 123)` |
| rgba | `rgba(0, 0, 0, 0.85)` — ostatnia liczba to przeźroczystość 0–1 |

`color` — litery. `background-color` — tło. Ciemne tło → jasny tekst.

```css
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
}
h1 {
  font-size: 32px;
  font-weight: 700;
}
.haslo {
  font-style: italic;
  text-align: center;
}
```

Nazwa kroju ze spacją: cudzysłów (`"Times New Roman"`). Na końcu stosu: `serif` / `sans-serif`.

```css
main {
  border: 2px solid #5c3a21;
}
header {
  border-bottom: 4px solid #c9a227;
}
form {
  border: 2px dashed #8b5a2b;
  border-radius: 8px;
}
```

Skrót `border`: **grubość, styl, kolor**. Bez stylu (`solid` / `dashed` / `dotted`) ramki często nie widać.

---

## 7. Box model

Od środka: treść → `padding` (w środku ramki) → `border` → `margin` (na zewnątrz).

```css
body {
  margin: 0;
}
main {
  width: 640px;
  padding: 24px;
  margin: 24px auto;
  border: 2px solid #5c3a21;
  box-sizing: border-box;
}
```

- `body { margin: 0; }` zdejmuje domyślny odstęp przeglądarki.
- `margin: 24px auto` — 24 px góra/dół, **wyśrodkowanie** bloku o stałej `width`.
- `padding: 16px 24px` — góra/dół 16, boki 24.
- `box-sizing: border-box` — `width` liczy treść **+** padding **+** ramkę (karta nie rozjeżdża się w bok).

---

## 8. Wygląd odnośników

Kolor z `body` **nie** maluje linków. Ustawiasz `a` (albo `nav a` / `main a`).

```css
a {
  color: #1e4d7b;
  text-decoration: none;
}
a:visited {
  color: #132f4d;
}
a:hover {
  color: #c9a227;
}
a:active {
  color: gold;
}
nav a {
  text-decoration: none;
}
main a {
  text-decoration: underline;
}
```

Kolejność w pliku: `a` → `:visited` → `:hover` → `:active`. Gdy `:hover` jest **przed** `:visited`, złoty hover na odwiedzonym linku może nie zadziałać.

`text-decoration: none` zdejmuje kreskę (menu). `underline` zostawia ją (link w akapicie).

---

## 9. Typowe pomyłki

1. `link` poza `head` albo `href="styles.css"` zamiast `style.css`.
2. Stopka bez `<footer>` albo dane ucznia tylko w `meta`.
3. `for` etykiety ≠ `id` pola; radio z różnymi `name`.
4. `alt` puste albo „zdjęcie1”.
5. `backgroundColor` / brak średnika / brak `#` przy hex.
6. Sam `border-width` bez `solid` — ramki nie widać.
7. `margin` zamiast `padding` (odstęp od sąsiada vs powietrze w ramce).
8. Linki nadal niebieskie, bo `color` jest tylko na `body`.
9. Druga podstrona bez `<link>` — wygląda jak czysty HTML.
10. Flex / `%` / `position` — na tym zestawie **nie**.
