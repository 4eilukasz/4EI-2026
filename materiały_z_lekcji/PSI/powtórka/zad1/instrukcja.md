# Zadanie 1. Wizytówka pracowni ceramicznej

**Czas:** ok. 35 minut.

## Zlecenie

Przygotuj stronę internetową pracowni ceramicznej **Glina i ogień**. Stronę zapisz w pliku `index.html`. Cały wygląd opisz w osobnym pliku `style.css` dołączonym do dokumentu. Nie umieszczaj reguł wyglądu w pliku HTML.

Nie stosuj układu elastycznego, siatki ani pozycjonowania. Wymiary podawaj w pikselach.

## Pliki do utworzenia

```
zadanie1_pracownia_ceramiczna/
  index.html
  style.css
```

Oba pliki w **tym samym** folderze.

## Materiały graficzne

Zdjęcie pieca:

https://picsum.photos/id/1011/640/360

Do wczytania zdjęcia potrzebne jest połączenie z internetem.

---

## Struktura i treść strony

1. Dokument zgodny z HTML5. Język: polski. Kodowanie znaków: UTF-8. Skalowanie na urządzeniach mobilnych — jak na zajęciach.
2. W informacjach o dokumencie (niewidocznych na stronie) zapisz autora: swoje imię, nazwisko i klasę.
3. Tytuł widoczny na karcie przeglądarki: `Glina i ogień — pracownia`.
4. Dołącz arkusz `style.css`.
5. Strona ma mieć czytelny podział: **nagłówek witryny**, **treść główna** i **stopka**. Nie improwizuj tego podziału zwykłymi pojemnikami bez znaczenia.
6. W nagłówku witryny — tytuł pierwszego stopnia: `Glina i ogień`.
7. W treści głównej, w tej kolejności:
   - akapit: *Pracownia **Glina i ogień** działa przy szkole od 2019 roku. Wypalamy naczynia użytkowe i ozdobne.*  
     Słowa **Glina i ogień** oznacz jako ważne. Słowo *użytkowe* — jako wyróżnienie (pochylenie). Rok 2019 oznacz jako datę.
   - zdjęcie z materiałów: szerokość 640 pikseli, wysokość 360 pikseli. Tekst alternatywny: `Piec ceramiczny w pracowni`.
   - śródtytuł: `Co wypalamy`.
   - lista punktowana: `kubki`, `miski`, `wazony`, `kafle`.
   - linia pozioma oddzielająca dalszy tekst.
   - akapit zaczynający się od symbolu copyright, potem spacja i `Glina i ogień`.
8. W stopce — akapit z Twoim imieniem, nazwiskiem i klasą (te same dane co przy autorze dokumentu).

---

## Wygląd

1. Cała strona: bez domyślnego odstępu od krawędzi okna przeglądarki. Tło `#f4e8d8`, tekst `#5c3a21`. Krój Arial, zapasowo Helvetica, w ostateczności czcionka bezszeryfowa. Rozmiar pisma 16 pikseli.
2. Nagłówek witryny: tło `#5c3a21`, tekst biały, odstęp wewnętrzny 16 pikseli, treść wyśrodkowana.
3. Tytuł pierwszego stopnia: 32 piksele, kolor `#c9a227`.
4. Blok treści głównej: szerokość 640 pikseli, odstęp wewnętrzny 24 piksele, odstęp od otoczenia 24 piksele, ramka 2 piksele — linia ciągła, kolor `#5c3a21`.
5. Zdjęcie: ramka 4 piksele — linia ciągła, kolor `#c9a227`. Ramka ma mieścić się w szerokości bloku treści (640 pikseli) i go nie rozpychać.
6. Stopka: tło `#5c3a21`, tekst biały, odstęp wewnętrzny 12 pikseli, treść wyśrodkowana.

---

## Oczekiwany wynik

Po otwarciu pliku widać ciemny pasek ze złotym tytułem, jasną kartę z ramką, zdjęcie pieca w złotej ramce, listę wyrobów i ciemną stopkę z danymi ucznia. Zakładka przeglądarki: `Glina i ogień — pracownia`. Po wyłączeniu arkusza stylów nadal widać tytuł, treść, listę i stopkę.
