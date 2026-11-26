# Teoria: Obiekt String — podstawowe właściwości i metody

> ✦ **Materiały wspomagane AI** — treść działu powstała z udziałem narzędzi AI
> według programu i standardów INF.03; przed zajęciami weryfikuje ją nauczyciel.

---

## 1. Natura tekstu w JavaScript: typ prosty a obiekt String

W języku JavaScript tekst reprezentowany jest przez typ prymitywny `string`. Gdy tworzymy zmienną przechowującą napis:

```javascript
const nazwaUslugi = "Audyt Bezpieczeństwa Systemu";
```

zmienna ta zawiera wartość prostą, a nie obiekt. Jednak gdy w kodzie odwołujemy się do właściwości lub metody, na przykład:

```javascript
console.log(nazwaUslugi.length);
console.log(nazwaUslugi.toLowerCase());
```

silnik JavaScript wykonuje pod maską operację zwaną **automatycznym opakowywaniem** (*autoboxing*). Tworzy tymczasowy obiekt pomocniczy (instancję klasy `String`), wywołuje na nim wskazaną metodę lub odczytuje właściwość, a po zwróceniu wyniku natychmiast usuwa ten obiekt z pamięci. Dzięki temu programista może korzystać z bogatego zestawu metod bez konieczności ręcznego tworzenia obiektów.

### Zasada niezmienności łańcuchów znaków (Immutability)

W języku JavaScript łańcuchy znaków są **bezwzględnie niemutowalne** (*immutable*). Oznacza to, że raz utworzonego napisu w pamięci komputera nie można zmodyfikować. 

Każda metoda obiektu `String`, która pozornie zmienia tekst (np. zamienia litery na wielkie lub usuwa spacje), w rzeczywistości **tworzy i zwraca zupełnie nowy łańcuch znaków**. Oryginalna zmienna pozostaje nienaruszona, chyba że celowo przypiszemy do niej nowo wygenerowaną wartość.

```javascript
let miasto = "gdansk";
miasto.toUpperCase(); // Wywołanie zwraca "GDANSK", ale nie modyfikuje zmiennej!
console.log(miasto);  // Wypisze nadal: "gdansk"

miasto = miasto.toUpperCase(); // Dopiero ponowne przypisanie zmienia stan zmiennej
console.log(miasto);  // Wypisze: "GDANSK"
```

> **Po co to jest:**  
> Niemutowalność gwarantuje bezpieczeństwo danych w pamięci. Jeśli funkcja otrzymuje napis jako argument, masz 100% pewności, że żadna operacja wewnątrz tej funkcji nie uszkodzi ani nie zmieni tekstu w miejscu wywołania.

> **Typowa pomyłka:**  
> Wywołanie metody `tekst.trim()` lub `tekst.toUpperCase()` jako samodzielnej instrukcji bez przypisania wyniku do zmiennej (`tekst = tekst.trim()`) i dziwienie się, że tekst pozostał niezmieniony.

---

## 2. Właściwość `length` — pomiar długości tekstu

Właściwość `length` zwraca liczbę jednostek kodu UTF-16 (w praktyce: liczbę znaków) wchodzących w skład danego łańcucha tekstowego.

```javascript
const haslo = "Sekret123!";
const dlugoscHasla = haslo.length; // 10

const pustyNapis = "";
console.log(pustyNapis.length);    // 0
```

Warto zwrócić uwagę na kluczowy szczegół składniowy: `length` jest **właściwością** (*property*), a nie metodą. Oznacza to, że odwołujemy się do niej **bez nawiasów okrągłych**.

```javascript
function sprawdzDlugoscKodu(kodPocztowy) {
  if (kodPocztowy.length === 6) {
    return "Długość poprawna";
  } else {
    return "Niepoprawna liczba znaków (wymagane 6)";
  }
}

console.log(sprawdzDlugoscKodu("80-288")); // "Długość poprawna"
```

> **Po co to jest:**  
> Właściwość `length` jest fundamentem walidacji danych wejściowych: sprawdzania minimalnej długości haseł, poprawności numerów PESEL, NIP, numerów telefonów oraz limitów znaków w polach tekstowych.

> **Typowa pomyłka:**  
> Pisanie `tekst.length()` z nawiasami okrągłymi. JavaScript zgłosi wówczas błąd wykonania: `TypeError: tekst.length is not a function`.

---

## 3. Zmiana wielkości liter: `toLowerCase()` i `toUpperCase()`

W aplikacjach internetowych użytkownicy wprowadzają dane w różny sposób: jedni piszą z włączonym klawiszem Caps Lock, inni zaczynają z małej litery. Aby móc rzetelnie porównać dwa teksty lub przygotować dane do zapisu, stosuje się metody normalizacji wielkości liter:

- **`toLowerCase()`** — zwraca nowy łańcuch tekstowy, w którym wszystkie litery zostały zamienione na małe.
- **`toUpperCase()`** — zwraca nowy łańcuch tekstowy, w którym wszystkie litery zostały zamienione na wielkie.

Metody te nie wpływają na cyfry, spacje ani znaki interpunkcyjne.

```javascript
const wpisanyLogin = "Jan.Kowalski@Domena.PL";
const znormalizowanyLogin = wpisanyLogin.toLowerCase();
console.log(znormalizowanyLogin); // "jan.kowalski@domena.pl"

const kodWeryfikacyjny = "act-99x";
console.log(kodWeryfikacyjny.toUpperCase()); // "ACT-99X"
```

### Porównywanie tekstów bez względu na wielkość liter (Case-Insensitive)

Częstym zadaniem egzaminacyjnym i praktycznym jest sprawdzenie, czy dwa napisy są identyczne pod kątem treści, ignorując wielkość znaków:

```javascript
function czyRowneBezWzgleduNaWielkosc(tekstA, tekstB) {
  return tekstA.toLowerCase() === tekstB.toLowerCase();
}

console.log(czyRowneBezWzgleduNaWielkosc("GDAŃSK", "gdańsk")); // true
console.log(czyRowneBezWzgleduNaWielkosc("Admin", "ADMIN"));   // true
```

> **Po co to jest:**  
> Metody te są niezbędne do bezpiecznego porównywania nazw użytkowników, adresów e-mail, kodów promocyjnych oraz poleceń wprowadzanych w konsoli.

> **Typowa pomyłka:**  
> Porównywanie `tekstA === tekstB` bez wcześniejszego sprowadzenia obu ciągów do wspólnej wielkości liter, co prowadzi do sytuacji, gdzie `"Tak" !== "tak"`.

---

## 4. Oczyszczanie tekstu z białych znaków: `trim()`, `trimStart()`, `trimEnd()`

Białe znaki (*whitespace*) to znaki niedrukowalne, takie jak spacje (`" "`), tabulatory (`"\t"`) oraz znaki nowego wiersza (`"\n"`). Użytkownicy formularzy bardzo często przypadkowo dodają spację na początku lub na końcu wpisywanego tekstu (zwłaszcza podczas kopiowania i wklejania tekstu na telefonach komórkowych).

JavaScript oferuje zestaw metod służących do usuwania białych znaków z brzegów napisu:

- **`trim()`** — usuwa białe znaki z obu końców łańcucha (początku i końca).
- **`trimStart()`** (lub synonim `trimLeft()`) — usuwa białe znaki wyłącznie z początku napisu.
- **`trimEnd()`** (lub synonim `trimRight()`) — usuwa białe znaki wyłącznie z końca napisu.

Żadna z tych metod nie usuwa spacji znajdujących się **wewnątrz** tekstu (między wyrazami).

```javascript
const wejscieUzytkownika = "   Jan Kowalski \t\n";
const oczyszczone = wejscieUzytkownika.trim();

console.log(`Długość przed: ${wejscieUzytkownika.length}`); // 19
console.log(`Długość po:    ${oczyszczone.length}`);        // 12
console.log(`Wynik: "${oczyszczone}"`);                     // "Jan Kowalski"
```

```javascript
const numerKonta = "  PL 1010 2020   ";
console.log(`"${numerKonta.trimStart()}"`); // "PL 1010 2020   "
console.log(`"${numerKonta.trimEnd()}"`);   // "  PL 1010 2020"
```

> **Po co to jest:**  
> Metoda `trim()` jest pierwszą linią obrony w sanityzacji danych wejściowych. Bez jej użycia hasło `"sekret "` zostanie uznane za inne niż `"sekret"`, a adres `" jan@domena.pl"` nie przejdzie poprawnie testu poprawności.

> **Typowa pomyłka:**  
> Przekonanie, że `trim()` usuwa również wielokrotne spacje ze środka tekstu. `trim()` czyści wyłącznie zewnętrzne brzegi łańcucha.

---

## 5. Dostęp do pojedynczych znaków: notacja indeksowa i `charAt()`

Łańcuch tekstowy w JavaScript zachowuje się pod wieloma względami jak uporządkowany ciąg znaków indeksowany od zera. Pierwszy znak znajduje się na indeksie `0`, drugi na indeksie `1`, a ostatni na indeksie `length - 1`.

Do pojedynczego znaku możemy uzyskać dostęp na dwa sposoby:

### Sposób 1: Notacja nawiasów kwadratowych `tekst[indeks]`
Jest to zapis najbardziej zwarty i zalecany w nowoczesnym kodzie JavaScript.

```javascript
const jezyk = "JavaScript";
console.log(jezyk[0]); // "J"
console.log(jezyk[4]); // "S"
console.log(jezyk[jezyk.length - 1]); // "t" (ostatni znak)
```

Gdy podamy indeks spoza dopuszczalnego zakresu (np. `jezyk[100]`), JavaScript zwróci wartość `undefined`.

### Sposób 2: Metoda `tekst.charAt(indeks)`
Jest to klasyczna metoda obiektowa obecna w języku od pierwszych wersji.

```javascript
const jezyk = "JavaScript";
console.log(jezyk.charAt(0)); // "J"
console.log(jezyk.charAt(jezyk.length - 1)); // "t"
```

Gdy podamy indeks spoza zakresu (np. `jezyk.charAt(100)`), metoda `charAt()` zwróci **pusty łańcuch znaków** `""`, a nie `undefined`.

### Niemożność modyfikacji znaku przez indeks

Pamiętając o zasadzie immutability, próba nadpisania znaku przez przypisanie indeksowe zakończy się niepowodzeniem:

```javascript
let marka = "Audi";
marka[0] = "O"; // W trybie standardowym operacja zostanie zignorowana
console.log(marka); // Nadal "Audi", a nie "Oudi"!
```

### Iteracja po znakach tekstu w pętli `for`

Dzięki właściwości `length` oraz indeksowaniu możemy w prosty sposób przeglądać tekst znak po znaku:

```javascript
function zliczLiteryA(tekst) {
  let licznik = 0;
  for (let i = 0; i < tekst.length; i++) {
    const znak = tekst[i].toLowerCase();
    if (znak === "a") {
      licznik++;
    }
  }
  return licznik;
}

console.log(zliczLiteryA("Architektura Aplikacji")); // 4
```

> **Po co to jest:**  
> Dostęp do poszczególnych znaków pozwala analizować strukturę tekstu: badać pierwszą literę imienia, sprawdzać obecność cyfr, liczyć wystąpienia określonych znaków czy weryfikować sumy kontrolne.

> **Typowa pomyłka:**  
> Odwoływanie się do ostatniego znaku za pomocą `tekst[tekst.length]`. Ponieważ indeksowanie zaczyna się od `0`, poprawnym indeksem ostatniego znaku jest zawsze `tekst.length - 1`. Odwołanie `tekst[tekst.length]` zwróci `undefined`.

> **Uwaga (granice działu):**  
> Zapis `tekst[i]` to odczyt znaku z napisu — jest dozwolony. Zakazane w tym module są natomiast **literały tablicowe** (np. `const litery = ["a", "b"]`) i metody tablicowe.

---

## 6. Szablony tekstowe (*Template Literals*) a tradycyjna konkatenacja

W starszych wersjach JavaScriptu łączenie tekstów ze zmiennymi odbywało się wyłącznie za pomocą operatora plus (`+`) — tzw. konkatenacji:

```javascript
const imie = "Marek";
const wiek = 18;
// Tradycyjna konkatenacja: łatwo o pomyłkę ze spacjami i cudzysłowami
const komunikatStary = "Witaj, " + imie + "! Twój wiek to: " + wiek + " lat.";
```

W standardzie ES6 wprowadzono **szablony tekstowe** (*template literals*), które rewolucjonizują pracę z tekstem:
1. Cały szablon zamykamy w **grawisach** (tzw. *backticks*, znak klawiatury pod tyldą: `` `...` ``).
2. Wewnątrz szablonu możemy wstawiać zmienne oraz dowolne wyrażenia JavaScript za pomocą konstrukcji **`${wyrażenie}`** (tzw. interpolacja).
3. Szablony pozwalają na naturalne pisanie **wielowierszowego tekstu** bez konieczności sklejania łańcuchów znakiem `\n`.

```javascript
const produkt = "Dysk SSD NVMe 1TB";
const cenaNetto = 320.00;
const stawkaVat = 0.23;

// Szablon z interpolacją zmiennych i obliczeń arytmetycznych
const raport = `--- KARTA PRODUKTU ---
Nazwa towaru: ${produkt}
Cena netto:   ${cenaNetto.toFixed(2)} PLN
Podatek VAT:  ${(cenaNetto * stawkaVat).toFixed(2)} PLN
Cena brutto:  ${(cenaNetto * (1 + stawkaVat)).toFixed(2)} PLN
Status:       ${cenaNetto > 200 ? "Darmowa dostawa" : "Dostawa płatna"}`;

console.log(raport);
```

> **Po co to jest:**  
> Szablony tekstowe drastycznie zwiększają czytelność kodu, eliminują błędy związane z brakującymi spacjami na łączeniach stringów i pozwalają budować złożone raporty tekstowe w naturalnym, wielowierszowym formacie.

> **Typowa pomyłka:**  
> Użycie zwykłego apostrofu (`'`) lub cudzysłowu (`"`) zamiast grawisu (`` ` ``) przy próbie interpolacji `${zmienna}`. W zwykłym cudzysłowie ciąg `${zmienna}` zostanie potraktowany jako dosłowny tekst i nie zostanie zinterpretowany.

---

## 7. Standard prezentacji wyników w Semestrze 2

Zgodnie z wymogami dydaktycznymi i spiralnym modelem nauczania kwalifikacji INF.03, w Semestrze 2 obowiązuje ścisły standard wyprowadzania danych skryptu:

1. Wyniki prezentujemy, przypisując sformatowany tekst do właściwości `textContent` kontenera o identyfikatorze `id="wynik"`:
   ```javascript
   document.getElementById("wynik").textContent = raportTekstowy;
   ```
2. W arkuszu stylów CSS dla elementu `#wynik` ustawiona jest właściwość:
   ```css
   #wynik {
     white-space: pre-wrap;
   }
   ```
   Dzięki temu wszystkie znaki nowej linii (`\n`) oraz wielokrotne spacje zdefiniowane w szablonie tekstowym są zachowywane i renderowane w oknie przeglądarki dokładnie tak, jak zostały sformatowane w kodzie JavaScript.
3. Równolegle każdy istotny rezultat wypisujemy do konsoli przeglądarki za pomocą `console.log()`.
4. Obowiązuje bezwzględny zakaz stosowania `innerHTML` w zadaniach tego modułu (wypisujemy czysty tekst, a nie kod HTML) oraz zakaz modyfikacji jakichkolwiek innych elementów DOM.

---

### 7.1. Standard wejścia danych: Zewnętrzny plik `dane.js` (model CKE)

W rzeczywistych projektach oraz na egzaminie zawodowym INF.03 dane wejściowe często oddziela się od logiki programu. Zamiast wpisywać długie ciągi tekstowe bezpośrednio do pliku `script.js`, umieszcza się je w dedykowanym pliku danych (`dane.js`).

W strukturze strony WWW plik danych dołączany jest za pomocą osobnego znacznika `<script>` **przed** skryptem z logiką aplikacji:

```html
<!-- index.html -->
<script src="dane.js"></script>
<script src="script.js"></script>
```

**Jak to działa w przeglądarce?**
1. Przeglądarka najpierw wczytuje i wykonuje `dane.js`. Zadeklarowane w nim stałe (np. `const DANE_ZLECENIA_KOD = "   o-7821-p   ";`) trafiają do przestrzeni globalnej skryptów.
2. Następnie przeglądarka wczytuje `script.js`. Twój skrypt ma natychmiastowy dostęp do wszystkich stałych z `dane.js` — odwołujesz się do nich bezpośrednio po nazwie:
   ```javascript
   // script.js
   const kodDoAnalizy = DANE_ZLECENIA_KOD;
   ```
3. **Brak modułów ES (`import` / `export`):** Podczas otwierania plików bezpośrednio z dysku (protokół `file:///`) przeglądarki blokują moduły ES ze względów bezpieczeństwa (błędy CORS). Standard z dwoma znacznikami `<script>` działa niezawodnie w każdym środowisku szkolnym i egzaminacyjnym.

> **Po co to jest:**  
> Separacja danych od logiki: skrypt realizuje uniwersalny algorytm, a dane można łatwo podmienić (np. inny przypadek testowy) bez ingerencji w kod źródłowy aplikacji.

> **Typowa pomyłka:**  
> Próba ponownej deklaracji tej samej stałej w `script.js` (`const DANE_ZLECENIA_KOD = ...`), co skutkuje błędem `Identifier 'DANE_ZLECENIA_KOD' has already been declared`, albo próba pisania `import { DANE_... } from './dane.js'`, co wywołuje błąd CORS w przeglądarce.

---

## 8. Podsumowanie zestawienia metod i właściwości

| Składnia | Typ / Co zwraca | Opis działania |
|:---------|:----------------|:---------------|
| `tekst.length` | `number` | Zwraca liczbę znaków w tekście. Właściwość bez nawiasów `()`. |
| `tekst.toLowerCase()` | `string` (nowy) | Zwraca kopię tekstu ze wszystkimi literami zamienionymi na małe. |
| `tekst.toUpperCase()` | `string` (nowy) | Zwraca kopię tekstu ze wszystkimi literami zamienionymi na wielkie. |
| `tekst.trim()` | `string` (nowy) | Zwraca kopię tekstu z usuniętymi białymi znakami z obu końców. |
| `tekst.trimStart()` | `string` (nowy) | Usuwa białe znaki wyłącznie z początku napisu. |
| `tekst.trimEnd()` | `string` (nowy) | Usuwa białe znaki wyłącznie z końca napisu. |
| `tekst[indeks]` | `string` lub `undefined` | Zwraca znak na podanej pozycji (indeksowanie od 0 do length-1). |
| `tekst.charAt(indeks)` | `string` | Zwraca znak na podanej pozycji lub pusty ciąg `""` przy wyjściu poza zakres. |
| `` `Napis ${wyrażenie}` `` | `string` (nowy) | Szablon tekstowy z interpolacją i obsługą wielu wierszy. |
