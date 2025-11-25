var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.info = function (messaggio) {
        console.log("[INFO]: " + messaggio);
    };
    Logger.errore = function (messaggio) {
        console.log("[ERRORE]: " + messaggio);
    };
    return Logger;
}());
var Mezzo = /** @class */ (function () {
    function Mezzo(tipo, ID, stato) {
        this.tipo = tipo;
        this.ID = ID;
        this.stato = stato;
    }
    Mezzo.prototype.assegnaUtente = function (utente) {
        if (this.stato === "in uso") {
            Logger.errore(this.tipo + " " + this.ID + " è già in uso!");
            return;
        }
        this.stato = "in uso";
        Logger.info(utente.nome + " ha preso in uso " + this.tipo + " " + this.ID + ".");
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
        try {
            mezzo.assegnaUtente(this);
        }
        catch (e) {
            Logger.errore(e.message);
        }
    };
    return Utente;
}());
var Citta = /** @class */ (function () {
    function Citta(nome, mezziDisponibili) {
        if (mezziDisponibili === void 0) { mezziDisponibili = []; }
        this.nome = nome;
        this.mezziDisponibili = mezziDisponibili;
    }
    Citta.prototype.aggiungiMezzo = function (mezzo) {
        for (var i = 0; i < this.mezziDisponibili.length; i++) {
            if (this.mezziDisponibili[i].ID === mezzo.ID) {
                Logger.errore(mezzo.tipo + " " + mezzo.ID + " è già presente a " + this.nome + ".");
                return;
            }
        }
        this.mezziDisponibili.push(mezzo);
        Logger.info(mezzo.tipo + " " + mezzo.ID + " aggiunto a " + this.nome + ".");
    };
    return Citta;
}());
var bici1 = new Mezzo("Bici", 1, "disponibile");
var scooter1 = new Mezzo("Scooter", 10, "disponibile");
var utente1 = new Utente("Giuseppe", "Verdi", "g.verdi@gmail.com", "Mastercard");
var utente2 = new Utente("Luca", "Rossi", "l.rossi@gmail.com", "Visa");
var milano = new Citta("Milano");
milano.aggiungiMezzo(bici1);
milano.aggiungiMezzo(scooter1);
milano.aggiungiMezzo(bici1);
utente1.prenotaMezzo(bici1);
utente2.prenotaMezzo(bici1);
utente2.prenotaMezzo(scooter1);
