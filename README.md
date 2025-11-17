# Moove

Questo progetto mira a sviluppare un sistema in TypeScript che modella la struttura organizzativa di Moove, un servizio innovativo di micromobilità condivisa, focalizzandosi sulle interazioni tra utenti, mezzi di trasporto e le città servite. 

## Funzionalità principali

Gestione mezzi: creazione di diversi tipi di veicoli (Bici, Scooter, Monopattino), ognuno con un ID e uno stato operativo.

Gestione utenti: registrazione degli utenti con dati anagrafici e metodo di pagamento.

Prenotazione dei mezzi: un utente può prenotare un mezzo se questo è disponibile.

Gestione delle città: aggiunta di mezzi alle singole città e visualizzazione dei mezzi disponibili.


## Struttura del codice

Il progetto si basa su tre interfacce principali:

IMezzo – definisce tipo, ID, stato e metodo assegnaUtente.

IUtente – definisce i dati utente e il metodo prenotaMezzo.

ICitta – definisce nome, lista mezzi e metodo aggiungiMezzo.

E su tre classi principali:

Mezzo: implementazione concreta dei veicoli.

Utente: rappresenta un utente registrato.

Citta: rappresenta una città con una propria flotta di mezzi.

## Esempio di utilizzo

Nel file principale vengono creati:

6 mezzi (2 bici, 2 scooter, 2 monopattini)

3 utenti

2 città (Milano e Roma)

Vengono effettuate:

L’aggiunta dei mezzi alle città

La prenotazione dei mezzi da parte degli utenti

La visualizzazione degli stati aggiornati


## Licenza

Questo progetto può essere distribuito o modificato liberamente secondo necessità.
Aggiungi pure una licenza se prevedi di pubblicarlo su GitHub.

## Autore

Nicolò

📧 Email: nicomelzi05@gmail.com

🌐 GitHub: https://github.com/nico25m

💼 LinkedIn: https://linkedin.com/in/nicolò-melzi
