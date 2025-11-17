#  Moove

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript\&logoColor=white)

Moove è un sistema scritto in **TypeScript** che simula un servizio di micromobilità condivisa. Gestisce utenti, mezzi e città in modo modulare, con un’architettura semplice ma estendibile.

---

##  Caratteristiche principali

###  Gestione dei mezzi

* Supporto a **Bici**, **Scooter** e **Monopattini**
* Ogni mezzo include:

  * ID univoco
  * tipo
  * stato operativo
  * metodo per l’assegnazione a un utente

###  Gestione degli utenti

* Registrazione con dati anagrafici e metodo di pagamento
* Possibilità di prenotare un mezzo se disponibile

###  Gestione delle città

* Ogni città contiene la propria flotta
* Funzioni per:

  * aggiungere mezzi
  * visualizzare quelli disponibili

---

## Architettura

### Interfacce

* `IMezzo` → tipo, ID, stato, `assegnaUtente`
* `IUtente` → informazioni utente, `prenotaMezzo`
* `ICitta` → nome, mezzi, `aggiungiMezzo`

### Classi

* `Mezzo` → implementa la logica dei veicoli
* `Utente` → modella un utente della piattaforma
* `Citta` → rappresenta le città servite dal sistema

---

## Esempio pratico

Nel file principale vengono creati:

* 6 mezzi (2 bici, 2 scooter, 2 monopattini)
* 3 utenti
* 2 città: **Milano** e **Roma**

Operazioni simulate:

1. Aggiunta dei mezzi alle città
2. Prenotazione da parte degli utenti
3. Stampa dello stato aggiornato del sistema

---

## Struttura del progetto

```
Moove/
    │
    │──moove.ts
    │──moove.js
    └── README.md
```

---

## Licenza

Progetto distribuito sotto licenza **MIT**. Puoi modificarlo, riutilizzarlo e condividerlo liberamente.

---

## Autore

**Nicolò**

- 📧 Email: **[nicomelzi05@gmail.com](nicomelzi05@gmail.com)**
- 🌐 GitHub: **[https://github.com/nico25m](https://github.com/nico25m)**
- 💼 LinkedIn: **[https://linkedin.com/in/nicolò-melzi](https://linkedin.com/in/nicolò-melzi)**
- CodePen **[https://codepen.io/nico25m/pen/qEZrKyw](https://codepen.io/nico25m/pen/qEZrKyw)**
