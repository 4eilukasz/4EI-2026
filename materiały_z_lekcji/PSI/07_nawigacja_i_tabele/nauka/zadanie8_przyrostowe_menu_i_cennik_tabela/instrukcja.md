# Zadanie 8 (Capstone): Poziomy pasek nawigacji i pełna tabela cennika w Portalu IT-Partner

## Cel zadania
Rozbudowa projektu przewodniego Portalu IT-Partner o pełną semantyczną tabelę cennika pakietów hostingowych i chmurowych z pasami zebry i podświetlaniem wierszy oraz dopracowany pasek nawigacyjny.

## Treść do wpisania
* Pozycje nawigacji: "Usługi", "Cennik Pakietów", "Zamówienie", "Kontakt"
* Tabela Cennika: #tabela-danych
* Kolumny: "Pakiet Chmurowy", "Pojemność NVMe", "Limit Transferu", "Wsparcie Techniczne", "Cena Miesięczna"
* Rekord 1: "Startup Cloud", "50 GB", "500 GB / mc", "Standard (Email)", "49.00 PLN"
* Rekord 2: "Business Pro", "200 GB", "Nielimitowany", "Priorytet 24/7", "129.00 PLN"
* Rekord 3: "Enterprise High-Load", "1 000 GB", "Nielimitowany", "Dedykowany Inżynier", "399.00 PLN"

## Wskazówki aktywizujące i dobre praktyki
* Pamiętaj o wyzerowaniu marginesów listy `nav ul` (`list-style: none`, `margin: 0`, `padding: 0`).
* Aby elementy ułożyły się poziomo, zastosuj `display: inline-block` na elementach `li`.
* W tabelach zawsze dodawaj `border-collapse: collapse`, aby ramki nie dublowały się.

## Wymagania techniczne
1. Użyj gotowego szkieletu portalu IT-Partner z poprzedniego kamienia milowego (moduł 06).
2. W sekcji `header nav` zaktualizuj pozycje menu i dodaj klasę `.aktywny` dla linku "Cennik Pakietów".
3. W sekcji `#uslugi` lub w nowo dodanej sekcji `#cennik` wstaw kompletną tabelę o identyfikatorze `#tabela-danych` prezentującą 3 pakiety chmurowe.
4. W arkuszu `style.css` sformatuj tabelę:
   - Zastosuj `border-collapse: collapse` oraz szerokość 100%.
   - Nagłówek w kolorze #1e293b, biały tekst, padding 12px 16px.
   - Pasy zebry w `tbody` (#f8fafc dla wierszy parzystych).
   - Podświetlenie wiersza na stan `:hover` kolorem #e0f2fe.
   - Kolumnę cen wyrównaj do prawej strony z pogrubioną czcionką.
5. Zachowaj bez zmian istniejące selektory kontraktu DOM: `#btn-oblicz`, `#btn-wyslij`, `#wynik`.
