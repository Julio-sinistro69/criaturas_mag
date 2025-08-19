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
    if (this.getenergia() >= 100) {
      console.log(`${this.nome} não precisa descansar`);
    } else {
      console.log(`${this.nome} descansou e recuperou 15 de energia.`);
      this.alterarEnergia(+15);
    }
  }
}

module.exports = Gnomo;
