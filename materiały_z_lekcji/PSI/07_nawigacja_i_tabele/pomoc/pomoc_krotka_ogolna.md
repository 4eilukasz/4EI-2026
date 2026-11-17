# Pomoc Podręczna: Poziome menu nawigacyjne i tabele CSS

## 1. Pasek menu w czystym CSS (bez Flexboxa)
```css
/* Reset listy menu */
nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #1e293b;
}

/* Pozycje w jednej linii */
nav li {
  display: inline-block;
}

/* Wygodny klikalny link */
nav a {
  display: block;
  padding: 12px 20px;
  color: #f8fafc;
  text-decoration: none;
  font-weight: bold;
}

/* Stan najechania i aktywny */
nav a:hover,
nav a.aktywny {
  background-color: #0284c7;
  color: #ffffff;
}
```

## 2. Profesjonalna tabela danych CKE
```css
table {
  width: 100%;
  border-collapse: collapse; /* Kluczowa właściwość: pojedyncze ramki */
  margin: 20px 0;
}

th, td {
  border: 1px solid #cbd5e1;
  padding: 10px 14px;
}

/* Nagłówek tabeli */
thead th {
  background-color: #0f172a;
  color: #ffffff;
  text-align: left;
}

/* Pasy zebry */
tbody tr:nth-child(even) {
  background-color: #f1f5f9;
}

/* Podświetlenie aktywnego wiersza */
tbody tr:hover {
  background-color: #e2e8f0;
}

/* Wyrównanie kolumny z cenami */
td.cena {
  text-align: right;
  font-weight: bold;
}
```
