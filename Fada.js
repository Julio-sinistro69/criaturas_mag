const Criatura = require('./Criatura');

class Fada extends Criatura {
  constructor(nome) {
    super(nome, "Bola de Luz Arco-Íris");
  }

  agir() {
    console.log(`${this.nome} ataca com ${this.ataqueMagico}!`);
    this.alterarEnergia(-15);
  }
}

module.exports = Fada;
