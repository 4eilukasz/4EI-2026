# Teoria: Obiekt String — wyszukiwanie, wycinanie i modyfikacja tekstu

> ✦ **Materiały wspomagane AI** — treść działu powstała z udziałem narzędzi AI według programu i standardów INF.03; przed zajęciami weryfikuje ją nauczyciel.

---

## 1. Wstęp: niemutowalność łańcuchów znaków (Immutability)

W języku JavaScript teksty (łańcuchy znaków, czyli typ `string`) są **niemutowalne** (ang. *immutable*). Oznacza to, że raz utworzonego łańcucha znaków w pamięci komputera nie można bezpośrednio zmodyfikować. 

Kiedy wywołujemy metodę obiektu `String` (np. zmianę wielkości liter, wycięcie fragmentu czy zamianę słowa), silnik JavaScript nie modyfikuje oryginalnej zmiennej, lecz tworzy i zwraca **całkowicie nowy łańcuch znaków**. Aby zachować wynik operacji, musimy przypisać go do zmiennej lub zwrócić za pomocą instrukcji `return`.

```javascript
const oryginalnyNapis = "KOD-MAGAZYNOWY-2026";
// Wywołanie metody bez przypisania nie zmienia oryginalnego napisu:
oryginalnyNapis.toLowerCase();
console.log(oryginalnyNapis); // Wypisze nadal: "KOD-MAGAZYNOWY-2026"

// Prawidłowe zachowanie wyniku:
const przetworzonyNapis = oryginalnyNapis.toLowerCase();
console.log(przetworzonyNapis); // Wypisze: "kod-magazynowy-2026"
```

**Po co to jest:**  
Zasada niemutowalności gwarantuje bezpieczeństwo danych w programie. Przekazanie tekstu do funkcji pomocniczej daje pewność, że funkcja ta nie uszkodzi ani nie zmieni niespodziewanie wartości zmiennej w innej części aplikacji.

**Typowa pomyłka:**  
Oczekiwanie, że wywołanie metody modyfikującej (np. `tekst.replace("a", "b")` lub `tekst.slice(0, 3)`) zmieni wartość zmiennej `tekst` w miejscu jej deklaracji. Wynik metody zawsze należy przypisać do nowej stałej lub nadpisać zmienną `let`.

---

## 2. Sprawdzanie obecności podłańcuchów: `includes()`, `startsWith()`, `endsWith()`

Podczas weryfikacji danych tekstowych (np. sprawdzanie poprawności adresu e-mail, prefiksu numeru seryjnego czy rozszerzenia pliku) najczęściej potrzebujemy szybkiej odpowiedzi logicznej: `true` lub `false`.

### 2.1. Metoda `includes(szukanyNapis, [pozycjaStartowa])`
Sprawdza, czy dany fragment tekstu występuje wewnątrz łańcucha znaków. Wielkość liter ma kluczowe znaczenie (metoda rozróżnia małe i wielkie litery).

```javascript
const opisUslugi = "Kompleksowa wymiana oleju oraz filtrów silnika";

const czyOlej = opisUslugi.includes("oleju"); // true
const czyKlimatyzacja = opisUslugi.includes("klimatyzacji"); // false
const czyOlejOdZnaku20 = opisUslugi.includes("oleju", 25); // false (słowo występuje wcześniej)
```

**Po co to jest:**  
Metoda pozwala w prosty, czytelny sposób budować warunki `if (...)` sprawdzające obecność słów kluczowych bez konieczności porównywania indeksów liczbowych.

**Typowa pomyłka:**  
Zapominanie o rozróżnianiu wielkości liter (*case sensitivity*). Jeśli użytkownik wpisze "OLEJ", a metoda sprawdza "olej", wynikiem będzie `false`. Przed sprawdzeniem warto znormalizować napis za pomocą `toLowerCase()`.

---

### 2.2. Metoda `startsWith(szukanyPrefiks, [pozycjaStartowa])`
Sprawdza, czy łańcuch znaków rozpoczyna się od określonego podłańcucha.

```javascript
const kodTowaru = "PROMO_2026_PL";

const czyPromocja = kodTowaru.startsWith("PROMO_"); // true
const czyStandard = kodTowaru.startsWith("STD_"); // false
```

**Po co to jest:**  
Pozwala błyskawicznie weryfikować nagłówki protokołów, kody krajów (np. `PL`), identyfikatory zamówień czy prefiksy kategorii towarów.

**Typowa pomyłka:**  
Brak uwzględnienia białych znaków (np. spacji na początku wpisu użytkownika). Ciąg `" PROMO_123"` zwróci `false` dla `startsWith("PROMO_")`. Należy najpierw oczyścić tekst metodą `trimStart()` lub `trim()`.

---

### 2.3. Metoda `endsWith(szukanySufiks, [oczekiwanaDlugosc])`
Sprawdza, czy łańcuch znaków kończy się zadanym fragmentem.

```javascript
const nazwaPliku = "raport_kwartalny.pdf";

const czyPdf = nazwaPliku.endsWith(".pdf"); // true
const czyObraz = nazwaPliku.endsWith(".png"); // false
```

**Po co to jest:**  
Wykorzystywana powszechnie do weryfikacji rozszerzeń plików, jednostek miar (np. `px`, `kg`, `zł`) oraz końcówek domen internetowych (np. `.pl`, `.edu.pl`).

**Typowa pomyłka:**  
Mylenie drugiego argumentu `endsWith()` z pozycją startową. Drugi opcjonalny argument określa długość łańcucha branego pod uwagę (tekst jest traktowany tak, jakby miał tyle znaków, licząc od początku).

---

## 3. Dokładne lokalizowanie pozycji: `indexOf()` i `lastIndexOf()`

Gdy sama informacja o obecności podłańcucha nie wystarcza i musimy poznać jego **dokładny indeks** (np. po to, aby wyciąć tekst przed lub za nim), stosujemy metody `indexOf()` oraz `lastIndexOf()`.

### 3.1. Zasada działania indeksowania
Indeksy w łańcuchach znaków numerowane są od **0**. Pierwszy znak ma indeks `0`, drugi `1`, a ostatni `length - 1`.

- `indexOf(szukanyFragment, [pozycjaStartowa])` — szuka od początku tekstu i zwraca indeks **pierwszego** wystąpienia.
- `lastIndexOf(szukanyFragment, [pozycjaStartowa])` — szuka od końca tekstu i zwraca indeks **ostatniego** wystąpienia.
- Jeśli szukany fragment **nie istnieje** w tekście, obie metody zwracają wartość `-1`.

```javascript
const adresEmail = "jan.kowalski@portal-uslugowy.pl";

const pozycjaMalpy = adresEmail.indexOf("@"); // 12
const pozycjaKropkiPierwsza = adresEmail.indexOf("."); // 3 (w "jan.kowalski")
const pozycjaKropkiOstatnia = adresEmail.lastIndexOf("."); // 28 (w ".pl")
const pozycjaSpacji = adresEmail.indexOf(" "); // -1 (brak spacji w poprawnym adresie)

if (pozycjaMalpy !== -1) {
  console.log(`Znak @ znajduje się na pozycji o indeksie: ${pozycjaMalpy}`);
} else {
  console.log("Błąd: brak znaku @ w podanym adresie.");
}
```

**Po co to jest:**  
Zwrócenie indeksu pozwala precyzyjnie podzielić tekst na część przed i za separatorem (np. oddzielenie nazwy użytkownika od domeny pocztowej). Wartość `-1` stanowi uniwersalny warunek logiczny braku elementu.

**Typowa pomyłka:**  
Pisanie błędnego warunku `if (tekst.indexOf("@"))`. Jeśli znak `@` znajduje się na pierwszym miejscu (indeks `0`), liczba `0` jest w instrukcji warunkowej traktowana jako wartość fałszywa (`falsy`). Warunek nie wykona się, mimo że znak istnieje! Prawidłowy warunek to zawsze jawne porównanie: `if (tekst.indexOf("@") !== -1)`.

---

### 3.2. Wycinanie wartości między tagiem a separatorem (wzorzec praktyczny)

W aplikacjach biznesowych dane często przychodzą jako jeden łańcuch z polami rozdzielonymi znakiem `#` i oznaczonymi tagami (`EMAIL:`, `NIP:`, `KLIENT:` itd.). Aby wyciąć wartość konkretnego pola, łączymy `indexOf` (z drugim argumentem) oraz `slice`:

```javascript
const rekord = "ZLECENIE/2026#EMAIL:jan.kowalski@firma.pl#NIP:5252891234#TRYB:PILNY";

// 1. Znajdź początek wartości (tuż ZA tagiem "EMAIL:"):
const tagEmail = "EMAIL:";
const startEmail = rekord.indexOf(tagEmail) + tagEmail.length; // indeks litery "j"

// 2. Znajdź koniec wartości — kolejny "#" DOPIERO OD pozycji startEmail:
const koniecEmail = rekord.indexOf("#", startEmail);

// 3. Wytnij samą wartość:
const email = rekord.slice(startEmail, koniecEmail); // "jan.kowalski@firma.pl"

// Analogicznie dla NIP (do następnego "#" lub do końca łańcucha):
const tagNip = "NIP:";
const startNip = rekord.indexOf(tagNip) + tagNip.length;
const koniecNip = rekord.indexOf("#", startNip);
const nip = rekord.slice(startNip, koniecNip); // "5252891234"
```

**Po co to jest:**  
Drugi argument `indexOf(szukany, odIndeksu)` pozwala pominąć wcześniejsze separatory `#` i znaleźć wyłącznie ten, który zamyka aktualne pole. Bez niego `indexOf("#")` zawsze zwróci pierwszy `#` w całym napisie.

**Typowa pomyłka:**  
Wywołanie `rekord.indexOf("#")` bez drugiego argumentu przy wycinaniu drugiego lub trzeciego pola — program zawsze „wpada” w pierwszy separator i wycina zły fragment.

---

## 4. Wycinanie i pobieranie fragmentów: `slice()` oraz `substring()`

Aby pobrać fragment tekstu od określonego miejsca do określonego końca, korzystamy z metod ekstrakcji.

### 4.1. Metoda `slice(indeksPoczatkowy, [indeksKoncowy])`
Metoda wycina fragment tekstu rozpoczynający się od indeksu `indeksPoczatkowy` włącznie, aż do `indeksKoncowy` **wyłącznie** (znak o indeksie końcowym nie wchodzi w skład wyciętego fragmentu).

Główne zalety metody `slice()`:
- Jeśli pominiemy drugi argument, fragment zostanie pobrany od punktu startowego aż do samego końca napisu.
- **Obsługa indeksów ujemnych:** wartość ujemna oznacza odliczanie pozycji od końca tekstu (`-1` to ostatni znak, `-2` przedostatni itd.).

```javascript
const identyfikator = "ID-98745-PL";

// Wycięcie od indeksu 3 do 8 (znaki o indeksach 3, 4, 5, 6, 7):
const numer = identyfikator.slice(3, 8); // "98745"

// Wycięcie od indeksu 9 do końca:
const kraj = identyfikator.slice(9); // "PL"

// Użycie indeksów ujemnych (pobranie ostatnich 2 znaków):
const kodKraju = identyfikator.slice(-2); // "PL"

// Obcięcie pierwszych 3 i ostatnich 3 znaków:
const srodek = identyfikator.slice(3, -3); // "98745"
```

**Po co to jest:**  
`slice()` to najwygodniejsza i najbardziej uniwersalna metoda wycinania w nowoczesnym JavaScript. Dzięki ujemnym indeksom pozwala szybko odcinać stałe końcówki bez konieczności ręcznego odejmowania od `length`.

**Typowa pomyłka:**  
Oczekiwanie, że drugi argument to długość wycinanego fragmentu (jak w przestarzałej metodzie `substr()`). W `slice(3, 5)` drugi argument to indeks graniczny, więc wycięty zostanie fragment o długości $5 - 3 = 2$ znaki.

---

### 4.2. Metoda `substring(indeksPoczatkowy, [indeksKoncowy])`
Działa podobnie do `slice()`, ale posiada dwie istotne różnice konstrukcyjne:
1. Nie obsługuje indeksów ujemnych — każdą liczbę ujemną lub `NaN` traktuje jak `0`.
2. Jeśli `indeksPoczatkowy` jest większy niż `indeksKoncowy`, metoda automatycznie zamienia je miejscami: `substring(5, 2)` zadziała identycznie jak `substring(2, 5)`.

```javascript
const tekst = "Warszawa";

console.log(tekst.substring(0, 4)); // "Wars"
console.log(tekst.substring(4, 0)); // "Wars" (automatyczna zamiana argumentów)
console.log(tekst.substring(-3));   // "Warszawa" (indeks ujemny potraktowany jako 0)
```

**Po co to jest:**  
Przydatna w sytuacjach, gdy nie mamy pewności, który ze znalezionych indeksów jest mniejszy, a chcemy uniknąć pisania dodatkowego warunku zamiany zmiennych.

**Typowa pomyłka:**  
Próba użycia ujemnych indeksów w `substring()` z oczekiwaniem odcięcia końcówki tekstu. Do odliczania od końca napisu należy zawsze stosować `slice()`.

---

## 5. Zamiana treści w tekście: `replace()` oraz `replaceAll()`

Częstym zadaniem programistycznym jest czyszczenie danych, formatowanie numerów telefonów lub podmiana słów kluczowych w szablonach wiadomości.

### 5.1. Metoda `replace(szukanyTekst, nowyTekst)`
Szuka w łańcuchu wskazanego tekstu i zastępuje **tylko pierwsze** znalezione wystąpienie.

```javascript
const opis = "Cena: 150 PLN. Poprzednia cena: 180 PLN.";

// Zamiana pierwszego wystąpienia "PLN" na "zł":
const zmienionyOpis = opis.replace("PLN", "zł");
console.log(zmienionyOpis);
// Wynik: "Cena: 150 zł. Poprzednia cena: 180 PLN."
```

**Po co to jest:**  
Idealna do podmiany pojedynczego identyfikatora, nagłówka lub pierwszego wystąpienia określonego znacznika w tekście.

**Typowa pomyłka:**  
Oczekiwanie, że podanie prostego łańcucha znaków w `replace("PLN", "zł")` zamieni wszystkie wystąpienia w całym tekście. Do globalnej podmiany wszystkich dopasowań służy metoda `replaceAll()`.

---

### 5.2. Metoda `replaceAll(szukanyTekst, nowyTekst)`
Wprowadzona w standardzie ECMAScript 2021 metoda `replaceAll()` przeszukuje cały łańcuch i zastępuje **wszystkie** wystąpienia szukanego fragmentu nowym tekstem.

```javascript
const sciezkaPliku = "dokumenty/faktury/2026/styczen/faktura_01.pdf";

// Zamiana wszystkich ukośników na myślniki:
const znormalizowanaSciezka = sciezkaPliku.replaceAll("/", "-");
console.log(znormalizowanaSciezka);
// Wynik: "dokumenty-faktury-2026-styczen-faktura_01.pdf"
```

**Po co to jest:**  
Umożliwia pełne, globalne oczyszczenie tekstu (np. usunięcie wszystkich spacji, zamianę przecinków na kropki w danych liczbowych) bez konieczności stosowania zaawansowanych wyrażeń regularnych.

**Typowa pomyłka:**  
Podanie pustego łańcucha jako wzorca bez zrozumienia konsekwencji (`replaceAll("", "-")`). Spowoduje to wstawienie myślnika pomiędzy każdy znak w tekście.

---

## 6. Projektowanie funkcji operujących na napisach w Semestrze 2

W Semestrze 2 uczymy się modularnego podejścia do programowania. Każdą logiczną operację na tekście zamykamy w dedykowanej funkcji (klasycznej deklaracji `function` lub funkcji strzałkowej `() => {}`), która przyjmuje parametry wejściowe i zwraca wynik za pomocą `return`.

### Przykład czystej funkcji walidującej i maskującej:
```javascript
// Deklaracja tradycyjna:
function zamaskujNumerKonta(numerKonta) {
  const oczyszczony = numerKonta.replaceAll(" ", "");
  if (oczyszczony.length !== 26) {
    return "BŁĄD: Nieprawidłowa długość numeru konta";
  }
  const poczatek = oczyszczony.slice(0, 2);
  const koniec = oczyszczony.slice(-4);
  return `${poczatek}********************${koniec}`;
}

// Równoważna funkcja strzałkowa:
const zamaskujNumerKontaArrow = (numerKonta) => {
  const oczyszczony = numerKonta.replaceAll(" ", "");
  if (oczyszczony.length !== 26) {
    return "BŁĄD: Nieprawidłowa długość numeru konta";
  }
  const poczatek = oczyszczony.slice(0, 2);
  const koniec = oczyszczony.slice(-4);
  return `${poczatek}********************${koniec}`;
};

const wynik = zamaskujNumerKonta("PL 1010 2020 3030 4040 5050 6060");
console.log(wynik); // "PL********************6060"
```

**Po co to jest:**  
Czysta funkcja oddziela logikę obliczeniową od warstwy prezentacji. Dzięki temu tę samą funkcję formatującą możemy wielokrotnie wywoływać w aplikacji dla różnych danych.

**Typowa pomyłka:**  
Wypisywanie wyniku bezpośrednio do konsoli lub elementu DOM wewnątrz ciała funkcji (`document.getElementById("wynik").textContent = ...`), zamiast zwrócenia wartości przez `return`. Funkcja powinna przetwarzać dane, a decyzję o sposobie ich wyświetlenia podejmuje kod wywołujący.

---

## 7. Standard wypisu danych w Semestrze 2

W Semestrze 2 obowiązuje ścisły standard prezentacji danych na stronie:
1. Dane wyjściowe umieszczamy w kontenerze o identyfikatorze `wynik` za pomocą właściwości `textContent`:
   ```javascript
   document.getElementById("wynik").textContent = raportTekstowy;
   ```
2. W arkuszu stylów CSS kontener `#wynik` musi posiadać regułę:
   ```css
   #wynik {
     white-space: pre-wrap;
   }
   ```
   Dzięki tej właściwości przeglądarka respektuje znaki nowej linii (`\n`) oraz wielokrotne spacje umieszczone w szablonie tekstowym, prezentując estetyczny, sformatowany raport bez potrzeby wstrzykiwania kodu HTML.
3. Pomocniczo wszystkie kluczowe etapy obliczeń zrzucamy do konsoli deweloperskiej za pomocą `console.log()`.

### Zasada użycia `prompt()` w zadaniach:
- Okno dialogowe `prompt("Komunikat", "Wartość domyślna")` służy do opcjonalnego pobrania danych od użytkownika.
- **Ważne:** wywołanie `prompt()` całkowicie wstrzymuje wykonywanie wątku JavaScript w przeglądarce do momentu kliknięcia przycisku „OK” lub „Anuluj”.
- `prompt()` wolno wywołać **wyłącznie poza ciałem funkcji** (w głównym nurcie skryptu), przekazując pobraną wartość jako argument do funkcji przetwarzającej. Obowiązkowo podajemy drugi argument jako wartość domyślną.

---

### 7.1. Standard wejścia danych: Zewnętrzny plik `dane.js` (model CKE)

W rozbudowanych zadaniach analitycznych oraz na egzaminie zawodowym INF.03 dane wejściowe (np. rozbudowane rekordy zamówień, łańcuchy logistyczne) umieszcza się w zewnętrznym pliku `dane.js`.

Plik ten jest dołączany w kodzie strony HTML przed głównym skryptem:
```html
<script src="dane.js"></script>
<script src="script.js"></script>
```

**Zasada działania:**
1. Stałe zdefiniowane w pliku `dane.js` (np. `const DANE_REKORD_REZERWACJI = "...";`) stają się natychmiast dostępne w skrypcie `script.js` w zasięgu globalnym.
2. W `script.js` odwołujesz się do nich bezpośrednio po nazwie stałej — bez konieczności ponownego definiowania wartości ani używania składni importu:
   ```javascript
   const domyslnyWpis = DANE_REKORD_REZERWACJI;
   ```
3. W środowisku przeglądarki uruchamianej z dysku (`file:///`) nie stosujemy modułów ES (`type="module"`), ponieważ przeglądarki blokują je polityką CORS. Sekwencyjne ładowanie skryptów przez znaczniki `<script>` to standardowy, w 100% niezawodny wzorzec egzaminacyjny.

**Po co to jest:**  
Pozwala odseparować surowe dane wejściowe od logiki algorytmicznej i łatwo testować różne przypadki brzegowe.

**Typowa pomyłka:**  
Próba pisania `import ... from "./dane.js"` (co wywołuje błąd CORS) lub próba powtórnej deklaracji stałej `const DANE_... = ...` w `script.js`.

