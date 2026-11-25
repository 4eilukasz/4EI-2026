# Zadanie 1: Jednostki typograficzne — em kontra rem w praktyce

---

## 1. Cel zadania
Zrozumienie fundamentalnej różnicy pomiędzy jednostką `em` (relatywną do rodzica/elementu) a jednostką `rem` (relatywną do elementu głównego `<html>`), zbadanie groźnego zjawiska kaskadowego mnożenia wielkości czcionki (*Compounding Trap*) w zagnieżdżonych listach oraz ustabilizowanie typografii karty za pomocą `rem`.

---

## Treść do wpisania
* Nagłówek główny h1: "Laboratorium typografii: jednostki em i rem"
* Podtytuł: "Porównanie zachowania jednostek relatywnych w hierarchii dokumentu HTML."
* Karta 1: "Hierarchia z jednostką em (pułapka kaskadowa)"
  - Poziom 1: "Flota pojazdów ciężarowych"
  - Poziom 2: "Ciągniki siodłowe Euro 6"
  - Poziom 3: "Przypisane naczepy chłodnicze"
* Karta 2: "Hierarchia z jednostką rem (stabilna typografia)"
  - Poziom 1: "Magazyn centralny (Węzeł A)"
  - Poziom 2: "Sektor załadunku paletowego"
  - Poziom 3: "Doki przeładunkowe 1-8"

---

## 2. Wskazówki dydaktyczne (Kluczowe mechanizmy)
- Zwróć uwagę, że jeśli zadeklarujesz `font-size: 1.3em` na znaczniku `li`, każdy kolejny poziom zagnieżdżenia listy (`ul ul li`) będzie mnożył wielkość czcionki swojego przodka ($16\text{px} \times 1.3 \times 1.3 \dots$).
- W przypadku `rem` odniesienie następuje zawsze do bazowego rozmiaru w `<html>` (domyślnie $16\text{px}$), dzięki czemu zagnieżdżone elementy zachowują stały, czytelny rozmiar.
- Jednostka `em` doskonale sprawdza się natomiast przy dopełnieniach wewnętrznych przycisków (`padding: 0.5em 1em`), ponieważ proporcjonalnie reaguje na wielkość tekstu etykiety.

---

## 3. Wymagania techniczne
1. W pliku `index.html` dołącz zewnętrzny arkusz stylów `style.css`.
2. Zdefiniuj uniwersalny reset marginesów, dopełnień i model `box-sizing: border-box`.
3. Dla elementu `html`:
   - ustaw bazową wielkość czcionki: `font-size: 16px;`.
4. Dla elementu `body`:
   - kolor tła: `#f8fafc`,
   - kolor tekstu: `#0f172a`,
   - bezszeryfowy stos czcionek systemowych,
   - `line-height: 1.6`.
5. Dla kontenera `.kontener`:
   - maksymalna szerokość: 840px,
   - margines pionowy: 2.5rem, poziomy: `auto`,
   - dopełnienie boczne: 1rem.
6. Dla karty demonstracyjnej `.karta-porownawcza`:
   - kolor tła: `#ffffff`,
   - obramowanie: 1px solid `#cbd5e1`,
   - zaokrąglenie narożników: 8px,
   - dopełnienie wewnętrzne: `2rem`,
   - margines dolny: `2rem`,
   - cień pudełkowy: `0 4px 6px -1px rgba(0, 0, 0, 0.05)`.
7. Dla typografii opartej o `rem`:
   - nagłówek pierwszego stopnia (`h1`): `font-size: 1.75rem`, kolor `#0f172a`, margines dolny `1rem`,
   - nagłówek drugiego stopnia (`h2`): `font-size: 1.25rem`, kolor `#1e293b`, margines dolny `0.75rem`,
   - akapity tekstu (`p`): `font-size: 1rem`, kolor `#334155`, margines dolny `1rem`.
8. Dla listy demonstracyjnej opartej o `em` (`.lista-em`):
   - usunięcie punktorów,
   - `li`: `font-size: 1.25em; padding: 0.3em 0; color: #b91c1c;` (zaobserwuj, jak podpunkty stają się nienaturalnie wielkie).
9. Dla stabilnej listy opartej o `rem` (`.lista-rem`):
   - usunięcie punktorów,
   - `li`: `font-size: 0.95rem; padding: 0.35rem 0; color: #047857;` (zaobserwuj idealną równość tekstu niezależnie od poziomu zagnieżdżenia).
10. Dla przycisku demonstracyjnego `.btn-skalowalny`:
    - wyświetlanie `inline-block`,
    - `font-size: 1.25rem`,
    - dopełnienie oparte o `em`: `padding: 0.6em 1.2em`,
    - kolor tła `#0284c7`, kolor tekstu biały, brak podkreślenia, zaokrąglenie `0.4em`.

---

## 4. Oczekiwany wynik
Na stronie widoczne są dwie karty porównawcze. W pierwszej (z użyciem `em`) zagnieżdżone elementy listy dramatycznie powiększają się z każdym poziomem, demonstrując pułapkę kaskadową. W drugiej karcie (z użyciem `rem`) cała hierarchia zachowuje spójny, estetyczny i czytelny rozmiar czcionki. Przycisk na dole demonstruje poprawne zastosowanie `em` w dopełnieniach.
