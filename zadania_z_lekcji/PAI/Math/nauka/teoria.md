# Obiekt Math i jego metody w JavaScript

`Math` to wbudowany „namespace” (przestrzeń nazw) w JavaScript, który udostępnia **stałe matematyczne** i **funkcje** (metody statyczne) do obliczeń. W praktyce programistycznej `Math` pojawia się wszędzie tam, gdzie trzeba:

- **formatować liczby** (np. ceny, rabaty, podatki) i kontrolować zaokrąglenia,
- **losować** (kupony, identyfikatory, elementy gry, próbki danych),
- liczyć **odległości i pola** (UI, mapy, gry, grafika),
- ograniczać wartości do zakresu (**clamp**),
- pracować na logarytmach/trygonometrii (rzadziej na poziomie INF.03, ale bywa przy wykresach, animacjach i geometrii).

`Math` **nie jest konstruktorem** – nie używa się `new Math()`. Wszystko wywołujesz jako `Math.nazwa(...)`.

> Ważne: `Math` działa na typie `Number` (zmiennoprzecinkowe IEEE‑754). To oznacza, że pewne liczby dziesiętne nie mają dokładnej reprezentacji binarnej (np. 0.1) – dlatego w finansach i walidacji trzeba uważać na precyzję.

To dział **semestru 2** (po funkcjach). Temat to `Math`, ale **zmienia się też sposób wypisu** na stronę — poniżej.

---

## Wypis na stronę (od tego działu)

W semestrze 1 wynik lądował tam, gdzie stał znacznik `<script>`: `document.write("tekst")`. To był skrót na start. Po **pełnym wczytaniu** strony kolejne `document.write` **zamazuje cały dokument** — stąd od **Math** wpisujemy do konkretnego pudełka.

W szablonie HTML jest pusty element z `id="wynik"`. Skrypt stoi **tuż pod nim** (nie w `<head>`):

```html
<div id="wynik"></div>
<script src="script.js"></script>
```

W `script.js`:

```js
document.getElementById("wynik").textContent = "Wylosowano: " + los;
```

- `getElementById("wynik")` znajduje **jeden** element o tym `id` (jest w każdym zadaniu).
- `textContent` ustawia **zwykły tekst** (bezpieczniej niż `innerHTML`; nie wstawiamy tagów HTML).
- Kilka linii: sklejaj z `"\n"` (w CSS `#wynik` ma `white-space: pre-wrap`, więc Enter z `\n` widać na stronie). Nie używaj `<br>` przy `textContent` — to byłoby widać jako znaki, nie jako nową linię.
- **Nie** wracaj do `document.write` w tym dziale.
- To **nie** jest jeszcze semestr 3: bez `querySelector`, bez `createElement`, bez kliknięć. Jedna metoda, jeden `id`.

---

## Najczęstsze pułapki i praktyczne zasady

### 1) Zaokrąglanie pieniędzy i „dziwne” wyniki

- `0.1 + 0.2` daje `0.30000000000000004` – to normalne przy `Number`.
- Do kwot (zł, €) zwykle używa się „skalowania”:
  - do 2 miejsc: `Math.round(x * 100) / 100`
- Gdy pracujesz na wielu pozycjach (koszyk), często lepiej liczyć w **groszach** (liczba całkowita), np. `cenaZl * 100`, a dopiero na końcu dzielić.

### 2) `round` vs `floor` vs `ceil` vs `trunc`

- **`Math.round(x)`**: najbliższa liczba całkowita (0.5 w górę).
- **`Math.floor(x)`**: w dół (największa całkowita ≤ x).
- **`Math.ceil(x)`**: w górę (najmniejsza całkowita ≥ x).
- **`Math.trunc(x)`**: ucina część ułamkową (w stronę zera).

Przykład dla `x = -3.7`:
- `floor(-3.7) = -4`
- `ceil(-3.7) = -3`
- `trunc(-3.7) = -3`

### 3) Losowanie liczb całkowitych z zakresu

`Math.random()` zwraca liczbę z zakresu **[0, 1)**.

- losowanie całkowitej z **[min, max]**:

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

- losowanie całkowitej z **[min, max)** (bez max):

```js
Math.floor(Math.random() * (max - min)) + min
```

### 4) „Clamp” (ograniczenie do zakresu)

Częsty wzorzec w aplikacjach (np. suwak 0–100):

```js
const clamped = Math.min(max, Math.max(min, x));
```

### 5) Kody z cyfr (OTP, kupon) — `padStart`

Po `Math.floor(Math.random() * …)` dostajesz liczbę, np. `4271`. Kod SMS / OTP ma mieć stałą szerokość (4–6 cyfr) z zerami z przodu: `004271`. To API **String** (pełniej w dziale [`07_string`](../07_string/)), ale w zadaniach Math pojawia się zaraz po losowaniu.

```js
const kod = Math.floor(Math.random() * 1000000); // 0..999999
const kodTxt = String(kod).padStart(6, "0");
document.getElementById("wynik").textContent = "Kod: " + kodTxt;
```

`String(n)` zamienia liczbę na napis. `padStart(szerokosc, "0")` dopełnia z lewej do zadanej długości. Bez tego `4271` ma cztery znaki, a nie sześć.

**Po co:** kody promocyjne i OTP wyglądają jak na telefonie — zawsze tyle samo cyfr.

**Typowa pomyłka:** wypis samej liczby bez `padStart` — krótkie kody „uciekają” z lewej (brak wiodących zer).

---

## Stałe (właściwości statyczne)

- **`Math.E`** – liczba Eulera (~2.71828)
- **`Math.LN2`** – ln(2)
- **`Math.LN10`** – ln(10)
- **`Math.LOG2E`** – log2(E)
- **`Math.LOG10E`** – log10(E)
- **`Math.PI`** – π (~3.14159)
- **`Math.SQRT1_2`** – √(1/2)
- **`Math.SQRT2`** – √2

Dodatkowo:
- **`Math[Symbol.toStringTag]`** – wartość "Math" używana w `Object.prototype.toString()`.

---

## Metody `Math` (wszystkie)

Poniżej zebrane są wszystkie metody obiektu `Math` – z krótkim opisem i typowym zastosowaniem.

### Wartości bezwzględne i znak

- **`Math.abs(x)`** – wartość bezwzględna \\( |x| \\). Użyteczne dla różnic, odległości, „błędu”.
- **`Math.sign(x)`** – zwraca `-1`, `0`, `1` (lub `-0`, `NaN`) zależnie od znaku.

### Zaokrąglanie i obcinanie

- **`Math.round(x)`** – zaokrągla do najbliższej całkowitej.
- **`Math.floor(x)`** – zaokrągla w dół.
- **`Math.ceil(x)`** – zaokrągla w górę.
- **`Math.trunc(x)`** – ucina część ułamkową.
- **`Math.fround(x)`** – zaokrągla do najbliższej liczby typu float32 (pojedyncza precyzja).
- **`Math.f16round(x)`** – zaokrągla do najbliższej reprezentacji float16 (półprecyzja).

`fround`/`f16round` spotyka się rzadko w zadaniach szkolnych; są przydatne w grafice/obliczeniach, gdy chcesz zasymulować mniejszą precyzję.

### Minimum / maksimum

- **`Math.min(...liczby)`** – najmniejsza z liczb (może przyjąć wiele argumentów).
- **`Math.max(...liczby)`** – największa z liczb.

Uwaga: `Math.min()` bez argumentów zwraca `Infinity`, a `Math.max()` bez argumentów zwraca `-Infinity`.

### Potęgi i pierwiastki

- **`Math.pow(x, y)`** – \\(x^y\\) (w nowoczesnym JS często używa się też operatora `**`).
- **`Math.sqrt(x)`** – pierwiastek kwadratowy (dla x<0 zwróci `NaN`).
- **`Math.cbrt(x)`** – pierwiastek sześcienny.
- **`Math.hypot(a, b, ...)`** – \\(\sqrt{a^2 + b^2 + ...}\\). Idealne do odległości (2D/3D).

### Losowość

- **`Math.random()`** – pseudolosowa liczba z [0,1).

### Logarytmy i funkcje wykładnicze

- **`Math.exp(x)`** – \\(e^x\\).
- **`Math.expm1(x)`** – \\(e^x - 1\\) (dokładniejsze dla małych x).
- **`Math.log(x)`** – ln(x).
- **`Math.log1p(x)`** – ln(1+x) (dokładniejsze dla małych x).
- **`Math.log10(x)`** – logarytm dziesiętny.
- **`Math.log2(x)`** – logarytm o podstawie 2.

### Trygonometria (kąty w radianach)

Metody trygonometryczne pracują na **radianach**, nie stopniach.

- **`Math.sin(x)`**, **`Math.cos(x)`**, **`Math.tan(x)`**
- **`Math.asin(x)`**, **`Math.acos(x)`**, **`Math.atan(x)`** – funkcje odwrotne
- **`Math.atan2(y, x)`** – kąt na podstawie współrzędnych (lepsze niż `atan(y/x)` bo rozróżnia ćwiartki)

Konwersja:
- stopnie → radiany: `deg * (Math.PI / 180)`
- radiany → stopnie: `rad * (180 / Math.PI)`

### Funkcje hiperboliczne

- **`Math.sinh(x)`**, **`Math.cosh(x)`**, **`Math.tanh(x)`**
- **`Math.asinh(x)`**, **`Math.acosh(x)`**, **`Math.atanh(x)`**

W praktyce szkolnej rzadkie, ale warto wiedzieć, że istnieją.

### Operacje „32-bitowe” i niskopoziomowe

- **`Math.imul(a, b)`** – mnożenie 32-bitowych liczb całkowitych (wynik jak w arytmetyce 32-bit).
- **`Math.clz32(x)`** – liczba wiodących zer w 32-bitowej reprezentacji.

Te metody przydają się w kryptografii, hashowaniu, grafice, optymalizacjach – zwykle poza zakresem podstaw.

### Sumowanie z mniejszą utratą precyzji

- **`Math.sumPrecise(iterable)`** – sumuje elementy iterowalne (np. tablicę) tak, by unikać utraty precyzji w wynikach pośrednich.

To metoda nowa i raczej „dla ciekawych”, ale dobrze pasuje do realnych problemów typu „sumowanie koszyka”.

---

## Szybkie mapowanie: problem → metoda

- **Cena, kwota, podatek** → `round` + skalowanie, czasem `floor/ceil`
- **Zabezpieczenie zakresu** (0–100) → `min` + `max` (clamp)
- **Odległość na mapie / w grze** → `hypot` (lub `sqrt(pow(...)+pow(...))`)
- **Losowy kupon / rzut kostką** → `random` + `floor`
- **Kod OTP / kupon stałej długości** → `random` + `floor` + `String(...).padStart`
- **Pole koła** → `PI`, `pow` / `**`

---

## Podsumowanie

Najważniejsze na poziomie podstaw i INF.03 to: `round`, `floor`, `ceil`, `trunc`, `random`, `min`, `max`, `abs`, `sqrt`, `pow`, `PI`, `hypot`. Reszta metod `Math` rozszerza możliwości (logarytmy, trygonometria, operacje 32-bitowe, kontrola precyzji), a w praktyce spotkasz je przy bardziej zaawansowanych projektach.
