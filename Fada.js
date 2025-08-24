const Criatura = require('./Criatura');

class Fada extends Criatura {
    constructor(nome) {
        super(nome, "Bola de Luz Arco-Íris");
    }
    agir() {
        console.log(`${this.nome} ataca com ${this.ataqueMagico}!`);
        this.alterarEnergia(-15);
    }
    descansar() {
        if (this.energia >= 100) {
            console.log(`${this.nome} não precisa descansar.`);
        } else {
            this.alterarEnergia(15);
            console.log(`${this.nome} descansou e se sente radiante!`);
        }
    }
}
module.exports = Fada;
