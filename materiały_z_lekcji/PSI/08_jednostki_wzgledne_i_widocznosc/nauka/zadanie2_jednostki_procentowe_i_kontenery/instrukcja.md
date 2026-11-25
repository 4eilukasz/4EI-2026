# Zadanie 2: Jednostki procentowe i elastyczne kontenery blokowe

---

## 1. Cel zadania
Zrozumienie działania jednostek procentowych (`%`) w odniesieniu do szerokości bloku nadrzędnego (*containing block*), zastosowanie właściwości `max-width` w procentach w celu zabezpieczenia elementów przed przepełnieniem oraz zbudowanie wielokolumnowego układu opartego o `inline-block` i model `border-box`.

---

## Treść do wpisania
* Nagłówek: "Centrum Logistyczne — Układy Procentowe"
* Podtytuł: "Trzy kolumny prezentujące statusy operacyjne terminali przeładunkowych."
* Kolumna 1: "Terminal Północ (Gdańsk)", status: "Aktywność: 94%", opis: "Obsługa drobnicy morskiej i kontenerów chłodniczych."
* Kolumna 2: "Terminal Centralny (Łódź)", status: "Aktywność: 88%", opis: "Główny hub przeładunkowy sieci kolejowo-drogowej."
* Kolumna 3: "Terminal Południe (Katowice)", status: "Aktywność: 91%", opis: "Dystrybucja transgraniczna i magazyn wysokiego składu."

---

## 2. Wskazówki dydaktyczne (Kluczowe mechanizmy)
- Wartość `width: 50%` odnosi się wyłącznie do szerokości obszaru zawartości (*content-box*) lub obszaru z dopełnieniem (*border-box*) bezpośredniego rodzica.
- Bez deklaracji `box-sizing: border-box`, dodanie `padding: 20px` do elementu o szerokości `width: 50%` spowoduje, że dwa takie elementy nie zmieszczą się w jednym wierszu ($50\% + 20\text{px} + 20\text{px} + 50\% + 20\text{px} + 20\text{px} > 100\%$).
- W układach wielokolumnowych opartych na `display: inline-block` białe znaki (spacje i entery w kodzie HTML między znacznikami) zajmują około $4\text{px}$ szerokości. Aby dwie kolumny po $50\%$ zmieściły się obok siebie, należy usunąć odstęp między znacznikami w HTML lub zastosować technikę zerowania czcionki na rodzicu (`font-size: 0` na wierszu i przywrócenie `font-size: 1rem` na kolumnach).
- Reguła `max-width: 100%; height: auto;` dla obrazów zapobiega wychodzeniu grafiki poza szerokość jej kontenera.

---

## 3. Wymagania techniczne
1. W pliku `index.html` dołącz zewnętrzny arkusz stylów `style.css`.
2. Zdefiniuj uniwersalny reset marginesów, dopełnień i `box-sizing: border-box`.
3. Dla `body`:
   - tło: `#f1f5f9`,
   - tekst: `#1e293b`,
   - bezszeryfowy stos czcionek systemowych,
   - `line-height: 1.5`.
4. Dla kontenera `.kontener`:
   - szerokość `width: 90%`,
   - maksymalna szerokość `max-width: 960px`,
   - wycentrowanie w poziomie: margines pionowy `2rem`, poziomy `auto`,
   - dopełnienie wewnętrzne: `1.5rem`,
   - tło białe `#ffffff`, zaokrąglenie `8px`, obramowanie `1px solid #cbd5e1`.
5. Dla kontenera wiersza kolumn `.wiersz-kolumn`:
   - technika niwelowania białych znaków: `font-size: 0`,
   - margines dolny: `1.5rem`.
6. Dla kolumn o szerokości połowicznej `.kolumna-polowa`:
   - wyświetlanie `inline-block`,
   - szerokość `width: 50%`,
   - wyrównanie pionowe: `vertical-align: top`,
   - przywrócenie wielkości czcionki: `font-size: 1rem`,
   - dopełnienie wewnętrzne: `0.75rem`.
7. Dla wewnętrznego pudełka karty `.karta-wewnetrzna`:
   - tło: `#f8fafc`,
   - obramowanie: 1px solid `#e2e8f0`,
   - zaokrąglenie: 6px,
   - dopełnienie: `1.25rem`.
8. Dla nagłówków `h2`:
   - wielkość `1.25rem`, kolor `#0f172a`, margines dolny `0.5rem`.
9. Dla akapitów `p`:
   - wielkość `0.95rem`, kolor `#475569`, margines dolny `0.75rem`.
10. Dla responsywnego obrazu `.obraz-responsywny`:
    - `max-width: 100%`,
    - `height: auto`,
    - wyświetlanie blokowe `display: block`,
    - zaokrąglenie `4px`.
11. Dla paska postępu `.pasek-postepu-kontener`:
    - tło: `#e2e8f0`,
    - wysokość: `16px`,
    - zaokrąglenie: `8px`,
    - przepełnienie `overflow: hidden`,
    - pasek wypełnienia `.pasek-postepu-wartosc`:
      - wysokość `100%`,
      - tło: `#2563eb`,
      - szerokość procentowa: `width: 75%`.

---

## 4. Oczekiwany wynik
Strona prezentuje wycentrowany elastyczny kontener o szerokości 90% (do maks. 960px). Wewnątrz znajdują się dwie równe kolumny po 50% szerokości umieszczone w jednym wierszu dzięki `inline-block`. W lewej kolumnie znajduje się grafika płynnie dopasowująca się do 100% szerokości kolumny, a w prawej metryki z paskiem postępu o szerokości 75%.
