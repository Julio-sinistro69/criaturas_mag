const Criatura = require('./Criatura');

class Dragao extends Criatura {
    constructor(nome) {
        super(nome, "Sopro de Fogo Infernal");
    }
    agir() {
        console.log(`${this.nome} lança ${this.ataqueMagico}!`);
        this.alterarEnergia(-30);
    }
    descansar() {
        if (this.energia >= 100) {
            console.log(`${this.nome} não precisa descansar.`);
        } else {
            this.alterarEnergia(15);
            console.log(`${this.nome} descansou e recuperou forças flamejantes!`);
        }
    }
}
module.exports = Dragao;
