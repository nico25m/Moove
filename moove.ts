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

  constructor(tipo: "Bici" | "Scooter" | "Monopattino", ID: number, stato: "disponibile" | "in uso") {
    this.tipo = tipo;
    this.ID = ID;
    this.stato = stato;
  }

  assegnaUtente(utente: IUtente): void {
    if (this.stato == "disponibile") {
      this.stato = "in uso";
      console.log(this.tipo + " " + this.ID + " in uso");
    }
  }
}

class Utente implements IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: string;

  constructor(nome: string, cognome: string, email: string, metodoPagamento: string ) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.metodoPagamento = metodoPagamento;
  }

  prenotaMezzo(mezzo: IMezzo): void {
    mezzo.assegnaUtente(this);
  }
}

class Citta implements ICitta {
  nome: string;
  mezziDisponibili: IMezzo[];

  constructor(nome: string, mezziDisponibili: IMezzo[]) {
    this.nome = nome;
    this.mezziDisponibili = mezziDisponibili;
  }

  aggiungiMezzo(mezzo: IMezzo): void {
    this.mezziDisponibili.push(mezzo);
    if (mezzo.stato == "disponibile") {
      console.log(mezzo.tipo + " " + mezzo.ID + " aggiunto a "+ this.nome + ".");
    }
  }
}

const bici1 = new Mezzo("Bici", 1, "disponibile");
const bici2 = new Mezzo("Bici", 2, "disponibile");

const scooter1 = new Mezzo("Scooter", 10, "disponibile");
const scooter2 = new Mezzo("Scooter", 11, "disponibile");

const mono1 = new Mezzo("Monopattino", 20, "disponibile");
const mono2 = new Mezzo("Monopattino", 21, "disponibile");

const utente1 = new Utente("Giuseppe","Verdi","g.verdi@gmail.com","Mastercard");
const utente2 = new Utente("Luca", "Rossi", "l.rossi@gmail.com", "Visa");
const utente3 = new Utente("Maria", "Bianchi", "m.bianchi@gmail.com", "PayPal");

const milano = new Citta("Milano", []);
const roma = new Citta("Roma", []);

milano.aggiungiMezzo(bici1);
milano.aggiungiMezzo(scooter1);
milano.aggiungiMezzo(mono1);

roma.aggiungiMezzo(bici2);
roma.aggiungiMezzo(scooter2);
roma.aggiungiMezzo(mono2);

console.log("Milano:", milano);
console.log("Roma:", roma);

utente1.prenotaMezzo(bici1);
utente2.prenotaMezzo(bici1);
utente3.prenotaMezzo(scooter1); 

console.log("Stato bici1:", bici1);
console.log("Stato scooter1:", scooter1);

const nuovoMono = new Mezzo("Monopattino", 30, "disponibile");
milano.aggiungiMezzo(nuovoMono);
console.log("Nuovo mezzo aggiunto a Milano:", milano.mezziDisponibili);
