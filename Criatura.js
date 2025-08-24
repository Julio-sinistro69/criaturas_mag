class Criatura {
    nome;
    ataqueMagico;
    #energia;

    constructor(nome, ataqueMagico) {
        this.nome = nome;
        this.ataqueMagico = ataqueMagico;
        this.#energia = 100;
    }
    alterarEnergia(valor) {
        this.#energia += valor;
        console.log(`${this.nome} agora tem ${this.#energia} de energia.`);
    }
    agir() {
        this.alterarEnergia(-10);
        console.log(`${this.nome} usa ${this.ataqueMagico}!`);
    }
    descansar() {
        if (this.#energia >= 100) {
            console.log(`${this.nome} não precisa descansar.`);
        } else {
            this.alterarEnergia(15);
            console.log(`${this.nome} descansou. Energia restaurada!`);
        }
    }
}

module.exports = Criatura;
