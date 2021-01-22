# projektowanie-serwisow-www-jw-185

## Jeremi Wielewski

## laboratorium ósme

### laboratorium ósme

w tym laboratorium dodałem implemenetację prostego koszyka w reactcie. Wykorzystałem object assign oraz spread operator. Przykład na ktorym się wzorowałem https://github.com/arnab-datta/counter-app.

![koszyk](./screenshots/cart.png)

Korzystam z rozszerzenia git do visual studio code które pozwala mi osiągnąć podobne efekety co git difftool

![difftool](./screenshots/difftool.png)

Powyższy przykład pokazuje różnicę pomiędzy ostatnim commitem wprowadzone w pojedynczym pliku.

![difftool2](./screenshots/difftool2.png)

tutaj możemy zobaczyć jak zmieniła się struktura całego katalogu.

## laboratorium siódme

Projekt strony napisanej w reactcie, wykorzystującej biblioteki material ui, oraz react router

Dostępne ścieżki:

-   / - strona domowa
-   /products - katalog produktów
-   /products/:id - strona szczegółów produktu

### Strona glówna

![strona główna](./screenshots/home.png)

### Nawigacja

Nawigacja na stronie odbywa się za pomocą drawera. Na liście dostępnych ścieżek, podświetla się ta, która została wybrana.
![nawigacja](./screenshots/navbar.png)

### katalog produktów

Prosty katalog produktów z wykorzystaniem komponentów Grid oraz Paper. Zdjęcia stanowią odnośniki do strony szczegółów produktu.
![katalog produktów](./screenshots/products.png)

### szczegóły produktu

Nie dodałem obsługi stanu globalnego, dlatego wyświetlane jest jedynie id produktu przekazanego w parametrach url.
![szczegóły produktu](./screenshots/product_details.png)
