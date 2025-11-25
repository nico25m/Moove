class Logger {
  static info(messaggio: string) {
    console.log("[INFO]: " + messaggio);
  }
  static errore(messaggio: string) {
    console.log("[ERRORE]: " + messaggio);
  }
}

interface IMezzo {
  tipo: "Bici" | "Scooter" | "Monopattino";
  ID: number;
  stato: "disponibile" | "in uso";
  assegnaUtente(utente: IUtente): void;
}

interface IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: string;
  prenotaMezzo(mezzo: IMezzo): void;
}

interface ICitta {
  nome: string;
  mezziDisponibili: IMezzo[];
  aggiungiMezzo(mezzo: IMezzo): void;
}

class Mezzo implements IMezzo {
  tipo: "Bici" | "Scooter" | "Monopattino";
  ID: number;
  stato: "disponibile" | "in uso";

  constructor(
    tipo: "Bici" | "Scooter" | "Monopattino",
    ID: number,
    stato: "disponibile" | "in uso"
  ) {
    this.tipo = tipo;
    this.ID = ID;
    this.stato = stato;
  }

  assegnaUtente(utente: IUtente): void {
    if (this.stato === "in uso") {
      Logger.errore(this.tipo + " " + this.ID + " è già in uso!");
      return;
    }

    this.stato = "in uso";
    Logger.info(
      utente.nome + " ha preso in uso " + this.tipo + " " + this.ID + "."
    );
  }
}

class Utente implements IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: string;

  constructor(
    nome: string,
    cognome: string,
    email: string,
    metodoPagamento: string
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.metodoPagamento = metodoPagamento;
  }

  prenotaMezzo(mezzo: IMezzo): void {
    try {
      mezzo.assegnaUtente(this);
    } catch (e: any) {
      Logger.errore(e.message);
    }
  }
}

class Citta implements ICitta {
  nome: string;
  mezziDisponibili: IMezzo[];

  constructor(nome: string, mezziDisponibili: IMezzo[] = []) {
    this.nome = nome;
    this.mezziDisponibili = mezziDisponibili;
  }

  aggiungiMezzo(mezzo: IMezzo): void {
    for (let i = 0; i < this.mezziDisponibili.length; i++) {
      if (this.mezziDisponibili[i].ID === mezzo.ID) {
        Logger.errore(
          mezzo.tipo + " " + mezzo.ID + " è già presente a " + this.nome + "."
        );
        return;
      }
    }
    this.mezziDisponibili.push(mezzo);
    Logger.info(mezzo.tipo + " " + mezzo.ID + " aggiunto a " + this.nome + ".");
  }
}

const bici1 = new Mezzo("Bici", 1, "disponibile");
const scooter1 = new Mezzo("Scooter", 10, "disponibile");

const utente1 = new Utente(
  "Giuseppe",
  "Verdi",
  "g.verdi@gmail.com",
  "Mastercard"
);
const utente2 = new Utente("Luca", "Rossi", "l.rossi@gmail.com", "Visa");

const milano = new Citta("Milano");

milano.aggiungiMezzo(bici1);
milano.aggiungiMezzo(scooter1);
milano.aggiungiMezzo(bici1);

utente1.prenotaMezzo(bici1);

utente2.prenotaMezzo(bici1);

utente2.prenotaMezzo(scooter1);
