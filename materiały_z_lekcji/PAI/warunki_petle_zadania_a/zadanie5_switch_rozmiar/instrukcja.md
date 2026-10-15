# Sprawdzian Grupa A – Zadanie 5: Rozmiar ubrania

## Cel

Użytkownik wpisuje rozmiar: `S`, `M`, `L` albo `XL` (wielkie litery). Wypisz opis: S to mały, M to średni, L to duży, XL to bardzo duży. Inny tekst daj komunikat „Nieznany rozmiar”. Użyj `switch`.

## Przydatne

`case` porównuje tak jak `===`. Czy mała litera `s` to ten sam rozmiar co `S`? Bez `break` i `default` łatwo pomylić nieznaną wartość z sąsiednim przypadkiem.

## Wymagania

1. Pobierz rozmiar i zostaw go jako string.
2. Zrób `case` dla S, M, L, XL oraz `default`.
3. Pokaż rozmiar i opis.
4. Użyj `switch` z `break` i `default`. Porównuj wielkie litery.
5. W stopce HTML wpisz swoje imię, nazwisko i klasę.

## Przykład

Otwórz `index.html`. W okienku wpisz `M` i zatwierdź. W ramce wyniku pojawia się „M, średni”. Odśwież i wpisz `XL` — widać „XL, bardzo duży”. Przy `s` pojawia się „Nieznany rozmiar”.
