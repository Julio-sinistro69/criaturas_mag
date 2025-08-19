const Criatura = require('./Criatura');

class Gnomo extends Criatura {
  constructor(nome) {
    super(nome, "Chuva de Cogumelos Tóxicos");
  }

  agir() {
    console.log(`${this.nome} invoca ${this.ataqueMagico}!`);
    this.alterarEnergia(-5);
  }
}

module.exports = Gnomo;
