const Criatura = require('./Criatura');

class Slime extends Criatura {
    constructor(nome) {
        super(nome, "Jato de Gosma Ácida");
    }
    agir() {
        console.log(`${this.nome} se espalha e lança ${this.ataqueMagico}!`);
        this.alterarEnergia(-8);
    }
    descansar() {
        if (this.energia >= 100) {
            console.log(`${this.nome} não precisa descansar.`);
        } else {
            this.alterarEnergia(15);
            console.log(`${this.nome} absorve nutrientes e se regenera!`);
        }
    }
}
module.exports = Slime;
