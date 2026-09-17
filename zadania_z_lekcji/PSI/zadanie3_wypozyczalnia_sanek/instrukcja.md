# Zadanie 3. Wypożyczalnia sprzętu turystycznego

**Czas:** ok. 40 minut.

## Zlecenie

Przygotuj stronę internetową wypożyczalni **Szlak**. Na jednej stronie mają się znaleźć opis sprzętu (słownik pojęć), cennik w tabeli oraz formularz rezerwacji. Wygląd opisz w pliku `style.css`. Nie umieszczaj reguł wyglądu w pliku HTML.

Nie stosuj układu elastycznego, siatki ani pozycjonowania. Wymiary podawaj w pikselach. Nie zmieniaj wyglądu pola po ustawieniu w nim kursora.

## Pliki do utworzenia

```
zadanie3_wypozyczalnia_szlak/
  index.html
  style.css
```

## Materiały graficzne

To zadanie **nie** wymaga zdjęć.

---

## Struktura i treść strony

1. Dokument HTML5, język polski, kodowanie UTF-8, skalowanie mobilne jak na zajęciach. Autor: imię, nazwisko, klasa.
2. Tytuł na karcie przeglądarki: `Szlak — wypożyczalnia`.
3. Dołącz arkusz `style.css`.
4. Nagłówek witryny (tytuł pierwszego stopnia i menu), treść główna, stopka z Twoimi danymi.
5. Tytuł pierwszego stopnia: `Wypożyczalnia Szlak`.
6. Menu na **tej samej** stronie: odnośnik `Cennik` przenosi do cennika, odnośnik `Rezerwacja` — do formularza.

W treści głównej trzy części, w tej kolejności.

### Sprzęt

7. Śródtytuł: `Sprzęt`.
8. Słownik trzech pojęć (termin i jego objaśnienie):
   - `Namiot 2-os.` — `40 zł za dobę`;
   - `Rower trekkingowy` — `55 zł za dobę`;
   - `Kajak` — `70 zł za dobę`.

### Cennik

9. Śródtytuł: `Cennik`.
10. Tabela. Wiersz nagłówków kolumn: `Sprzęt`, `Doba`, `Weekend`. Trzy wiersze danych:

   | Sprzęt | Doba | Weekend |
   | ------ | ---- | ------- |
   | Namiot 2-os. | 40 zł | 70 zł |
   | Rower trekkingowy | 55 zł | 95 zł |
   | Kajak | 70 zł | 120 zł |

    Kwoty w kolumnach „Doba” i „Weekend” mają być pogrubione.

### Rezerwacja

11. Śródtytuł: `Rezerwacja`.
12. Formularz. Nie jest obsługiwany przez serwer: wysyłka na tę samą stronę, metoda POST. Każde pole ma etykietę — kliknięcie etykiety ustawia kursor w polu (albo zaznacza kontrolkę).
    - pole na imię, etykieta `Imię`;
    - pole na adres poczty elektronicznej, etykieta `E-mail`;
    - wybór sprzętu do rezerwacji — lista rozwijana, etykieta `Sprzęt`, pozycje: `Namiot 2-os.`, `Rower trekkingowy`, `Kajak`;
    - przycisk wysyłania z napisem `Zarezerwuj`.

---

## Wygląd

1. Strona: bez domyślnego odstępu od krawędzi okna. Tło zapisz w notacji rgb: 247, 243, 232. Tekst — rgb: 45, 90, 61. Krój Arial, zapasowo Helvetica, w ostateczności czcionka bezszeryfowa. Rozmiar pisma 16 pikseli, interliniia 1,5.
2. Nagłówek witryny i stopka: tło rgb 45, 90, 61, tekst `#ffffff`, odstęp wewnętrzny 16 pikseli. Tytuł witryny i tekst w stopce — wyśrodkowane.
3. Tytuł pierwszego stopnia: pismo pogrubione (waga 700). Śródtytuły: pismo zwykłe (waga 400).
4. Blok treści głównej: szerokość 640 pikseli **łącznie** z ramką i odstępem wewnętrznym, odstęp wewnętrzny 24 piksele, wyśrodkowany, 24 piksele odstępu od góry i dołu okna.
5. Odnośniki w menu: kolor `#ffffff`, bez podkreślenia. Po najechaniu: `#c9a227`.
6. Tabela cennika: szerokość 480 pikseli. Sąsiadujące krawędzie komórek mają tworzyć **jedną** linię, bez podwójnej siatki.
7. Komórki: ramka 1 piksel, ciągła, kolor rgb 45, 90, 61, odstęp wewnętrzny 8 pikseli.
8. Wiersz nagłówków kolumn: tło rgb 45, 90, 61, tekst `#ffffff`.
9. Formularz: szerokość 480 pikseli **łącznie** z ramką i odstępem wewnętrznym; odstęp wewnętrzny 16 pikseli góra i dół, 24 piksele po bokach; ramka 2 piksele, linia **przerywana**, kolor `#8b5a2b`; zaokrąglone narożniki 8 pikseli; odstęp od śródtytułu 16 pikseli.

---

## Oczekiwany wynik

Kliknięcie „Cennik” i „Rezerwacja” w menu przewija do właściwej części strony. Tabela ma ciemny wiersz nagłówka i pogrubione kwoty. W formularzu da się wybrać sprzęt z listy rozwijanej. Formularz leży w przerywanej, zaokrąglonej ramce i nie jest szerszy niż 480 pikseli. Kliknięcie napisu „Imię” ustawia kursor w polu imienia. Kolory tła strony i tekstu są zapisane przez rgb, nie przez angielską nazwę koloru.
