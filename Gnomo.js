const Criatura = require('./Criatura');

class Gnomo extends Criatura {
    constructor(nome) {
        super(nome, "Chuva de Cogumelos Tóxicos");
    }
    agir() {
        console.log(`${this.nome} invoca ${this.ataqueMagico}!`);
        this.alterarEnergia(-5);
    }
    descansar() {
        if (this.energia >= 100) {
            console.log(`${this.nome} não precisa descansar.`);
        } else {
            this.alterarEnergia(15);
            console.log(`${this.nome} descansou e está pronto para novas travessuras!`);
        }
    }
}
module.exports = Gnomo;
