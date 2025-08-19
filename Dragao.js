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
    if (this.getenergia() >= 100) {
      console.log(`${this.nome} não precisa descansar`);
    } else {
      console.log(`${this.nome} descansou e recuperou 15 de energia.`);
      this.alterarEnergia(+15);
    }
  }
}

module.exports = Dragao;
