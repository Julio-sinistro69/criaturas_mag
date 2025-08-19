class Criatura{

    nome;
    atk_magico;
    #energia;

    constructor(nome, atk_magico){
        this.nome = nome;
        this.atk_magico = atk_magico;
        this.#energia = 100;
    }
    
    getenergia(){
        return this.#energia
    }
    setenergia(energia){
        this.energia = 100;
    }
    ataque_Magico(){
        console.log(`${this.nome} usou ${this.atk_magico}`);
    }

    agir(){
        this.alterar_Energia(-10)
        console.log(`${this.nome} usa Peido infernal, ${this.#energia} reduzida em 10`);
        console.log(`${this.nome} tem ${this.#energia}.`);
    }

    alterar_Energia(valor){
        
        this.#energia += valor;
        console.log(`${this.nome} agora tem ${this.#energia} de energia`);

    }

    descansar(){
        if (this.#energia >= 100) {
            console.log(`${this.nome} não precisa descansar`);
        }else{
            console.log(`${this.nome} descansou e recuperou 15 de energia.`);
            this.alterar_Energia(+15)
        }
    }
}
module.exports = Criatura;