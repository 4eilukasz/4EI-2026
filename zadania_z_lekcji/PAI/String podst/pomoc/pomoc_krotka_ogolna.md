# Szybka pomoc ogólna — Moduł T05: Obiekt String (podstawowe metody)

Podręczna ściąga syntaktyczna i organizacyjna dla uczniów realizujących ćwiczenia laboratoryjne oraz sprawdzian praktyczny z modułu T05.

---

## 1. Struktura plików: szablon startowy a folder `rozwiazanie/`

Każde zadanie w module posiada przejrzystą, spójną strukturę plików:

| Element / Plik | Rola w katalogu zadania | Rola w podkatalogu `rozwiazanie/` |
|:---------------|:------------------------|:-----------------------------------|
| `instrukcja.md` | Pełna treść zadania, dane wejściowe, cele i wymagania techniczne. | Kopia referencyjna instrukcji. |
| `index.html` | Gotowa struktura strony z elementem `<pre id="wynik"></pre>` lub `<div id="wynik"></div>` i podpiętym skryptem. | Wzorcowy plik HTML powiązany z działającym rozwiązaniem. |
| `style.css` | Kompletny arkusz stylów definiujący m.in. `white-space: pre-wrap` dla `#wynik`. | Ten sam arkusz stylów zapewniający poprawną prezentację. |
| `dane.js` | Zewnętrzny plik danych (zadania 3–5 oraz zadania sprawdzianu) — wczytywany przed `script.js`. | Identyczny plik danych referencyjnych dla rozwiązania. |
| `script.js` | Plik roboczy ucznia — zawiera komentarze prowadzące i miejsca na samodzielną implementację (`// Twoje rozwiazanie`). | Kompletny, w 100% działający kod wzorcowy przygotowany przez nauczyciela. |

---

## 2. Ściąga składniowa i kanoniczne wzorce modułu T05

### Pomiar długości tekstu (`length`)
```javascript
const haslo = "MojeHaslo123";
const ileZnakow = haslo.length; // 12 (właściwość BEZ nawiasów!)
```

### Zmiana wielkości liter (`toLowerCase`, `toUpperCase`)
```javascript
const login = "User_PRO";
const malymi = login.toLowerCase(); // "user_pro"
const wielkimi = login.toUpperCase(); // "USER_PRO"
// PAMIĘTAJ: metody zwracają NOWY napis, nie zmieniają zmiennej login!
```

### Usuwanie białych znaków z brzegów (`trim`, `trimStart`, `trimEnd`)
```javascript
const wejscie = "   Jan Kowalski   ";
const czyste = wejscie.trim(); // "Jan Kowalski"
const bezPoczatku = wejscie.trimStart(); // "Jan Kowalski   "
const bezKonca = wejscie.trimEnd(); // "   Jan Kowalski"
```

### Dostęp do pojedynczych znaków (`[]` oraz `charAt`)
```javascript
const tekst = "Warszawa";
const pierwszy = tekst[0]; // "W"  — dozwolone (indeksowanie napisu, NIE tablica!)
const pierwszyMetoda = tekst.charAt(0); // "W"
const ostatni = tekst[tekst.length - 1]; // "a"

// Poza zakresem:
console.log(tekst[99]); // undefined
console.log(tekst.charAt(99)); // "" (pusty ciąg znaków)
// Zakazane w module: const litery = ["a", "b"];  ← to jest literał tablicowy
```

### Szablony tekstowe (*Template Literals*)
```javascript
const usluga = "Wymiana matrycy";
const cena = 250.00;

// Grawisy (backticki `...`) oraz interpolacja ${...}
const raport = `ZLECENIE SERWISOWE:
Usługa: ${usluga.toUpperCase()}
Cena:   ${cena.toFixed(2)} PLN
Status: Przyjęto do realizacji`;
```

### Standard wyprowadzania wyników na stronę (Semestr 2)
```javascript
const elWynik = document.getElementById("wynik");
elWynik.textContent = raport; // Bezpieczny wypis tekstu (nie innerHTML!)
console.log(raport); // Równoległy wypis do konsoli
```

---

## 3. Szybkie przypomnienie procedur laboratoryjnych

1. **Konsola DevTools (klawisz F12):** Zawsze trzymaj otwartą konsolę w przeglądarce. Wszelkie błędy składniowe i literówki w nazwach funkcji wyświetlają się w niej na czerwono.
2. **Zasada niemutowalności:** Jeśli wywołasz `tekst.trim()`, zmienna `tekst` się nie zmieni! Zawsze przypisuj wynik do nowej stałej (`const oczyszczony = tekst.trim();`) lub nadpisz zmienną (`tekst = tekst.trim();`).
3. **Ścieżki i powiązania:** Plik `index.html` łączy się ze skryptem przez `<script src="script.js"></script>`. Nie zmieniaj nazw plików ani relatywnych ścieżek w folderze zadania.
4. **Wypis `#wynik.textContent`:** Nigdy nie wpisuj znaczników HTML (`<br>`, `<b>`) do `textContent`, ponieważ zostaną one wyświetlone jako dosłowny tekst. Do łamania wierszy używaj znaku `\n` lub wielowierszowych szablonów w backtickach.
5. **Indeksowanie od zera:** Pamiętaj, że pierwszy znak ma indeks `0`, a ostatni `tekst.length - 1`. Odwołanie `tekst[tekst.length]` zawsze da `undefined`.
6. **Zewnętrzne pliki danych (`dane.js`):** W zadaniach z plikiem `dane.js` dane wejściowe są wczytywane przed Twoim skryptem (`<script src="dane.js"></script>`). Stałe `DANE_...` są widoczne bezpośrednio w `script.js` — nie przepisuj ich ręcznie ani nie używaj `import`.
