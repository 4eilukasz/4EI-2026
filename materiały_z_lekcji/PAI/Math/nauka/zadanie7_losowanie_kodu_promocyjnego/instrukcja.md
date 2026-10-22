# Nauka – Losowanie kodu promocyjnego

## Cel

Wylosuj sześciocyfrowy kod promocyjny (od 000000 do 999999) i pokaż go w elemencie o id „wynik” jako tekst o długości dokładnie sześciu znaków, z zerami z przodu gdy liczba jest krótsza. Tak wyglądają kody SMS albo OTP.

## Przydatne

Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

- `Math.random()` i `Math.floor` służą do wylosowania liczby całkowitej.
- Losuj z zakresu od 0 do 999999.
- Żeby wymusić sześć znaków, zamień liczbę na tekst i użyj `padStart(6, "0")`.

## Wymagania

1. Wylosowana liczba jest z zakresu od 0 do 999999.
2. W pudełku widać komunikat „Kod promocyjny: ” i zawsze sześć cyfr.

## Przykład

Po otwarciu strony w pudełku pojawia się na przykład „Kod promocyjny: 004271” albo „Kod promocyjny: 920105”. Po odświeżeniu kod jest inny, ale zawsze ma sześć cyfr.
