var Mezzo = /** @class */ (function () {
    function Mezzo(tipo, ID, stato) {
        this.tipo = tipo;
        this.ID = ID;
        this.stato = stato;
    }
    Mezzo.prototype.assegnaUtente = function (utente) {
        if (this.stato == "disponibile") {
            this.stato = "in uso";
            console.log(this.tipo + " " + this.ID + " in uso");
        }
    };
    return Mezzo;
}());
var Utente = /** @class */ (function () {
    function Utente(nome, cognome, email, metodoPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }
    Utente.prototype.prenotaMezzo = function (mezzo) {
        mezzo.assegnaUtente(this);
    };
    return Utente;
}());
var Citta = /** @class */ (function () {
    function Citta(nome, mezziDisponibili) {
        this.nome = nome;
        this.mezziDisponibili = mezziDisponibili;
    }
    Citta.prototype.aggiungiMezzo = function (mezzo) {
        this.mezziDisponibili.push(mezzo);
        if (mezzo.stato == "disponibile") {
            console.log(mezzo.tipo + " " + mezzo.ID + " aggiunto a " + this.nome + ".");
        }
    };
    return Citta;
}());
var bici1 = new Mezzo("Bici", 1, "disponibile");
var bici2 = new Mezzo("Bici", 2, "disponibile");
var scooter1 = new Mezzo("Scooter", 10, "disponibile");
var scooter2 = new Mezzo("Scooter", 11, "disponibile");
var mono1 = new Mezzo("Monopattino", 20, "disponibile");
var mono2 = new Mezzo("Monopattino", 21, "disponibile");
var utente1 = new Utente("Giuseppe", "Verdi", "g.verdi@gmail.com", "Mastercard");
var utente2 = new Utente("Luca", "Rossi", "l.rossi@gmail.com", "Visa");
var utente3 = new Utente("Maria", "Bianchi", "m.bianchi@gmail.com", "PayPal");
var milano = new Citta("Milano", []);
var roma = new Citta("Roma", []);
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
var nuovoMono = new Mezzo("Monopattino", 30, "disponibile");
milano.aggiungiMezzo(nuovoMono);
console.log("Nuovo mezzo aggiunto a Milano:", milano.mezziDisponibili);
