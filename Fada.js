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
    if (this.getenergia() >= 100) {
      console.log(`${this.nome} não precisa descansar`);
    } else {
      console.log(`${this.nome} descansou e recuperou 15 de energia.`);
      this.alterarEnergia(+15);
    }
  }
}

module.exports = Fada;
