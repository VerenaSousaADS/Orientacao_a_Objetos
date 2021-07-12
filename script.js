//  Aula 01 - Introdução a Orientação a Objetos
/* Orientação a objetos é uma comparação à realidade 
Ex.: 
Carro = objeto
Propriedades = atributos = cor, marca, modelo
Ações = métodos = dar a partida, ligar o ar-condicionado, ligar o limpador de para-brisas
*/
/*
const pessoa = {nome: 'Verena', idade: 26}; //Atributos e seus respectivos valores.

console.log(pessoa.nome); //Como acessar as informações

const quadrado = {
    base: 10,
    altura: 20,
    calculaArea: function(){return this.base*this.altura} //Método. É como criar um atributo, porém se passa uma função.
};

console.log(quadrado.calculaArea()) // Como chamar a função //Passa o Objeto quadrado e logo após o método seguido de parênteses 

// Para executar o método se coloca o ponto "." e logo após a função, com o map, reduce e filter era a mesma coisa, ou seja um vetor também é um objeto

const agenda // objeto  = {
    contatos  //vetor : [
        {nome : 'contato1', telefone: 'telefone1', email: 'email1@teste.com'},
        {nome : 'contato2', telefone: 'telefone2', email: 'email2@teste.com'},
        {nome : 'contato3', telefone: 'telefone3', email: 'email3@teste.com'},
        {nome : 'contato4', telefone: 'telefone4', email: 'email4@teste.com'}
    ],
    adicionar // método : function(contato){this.contatos.push(contato)} //This é uma referencia ao proprio objeto, para acessar os atributos de dentro do objeto, isso também vale para os métodos 
}

console.log(agenda.contatos);
*/

/* Aula 02 - Classe e Construtor

// Classe é uma ideia do objeto, ela é uma construtora de um objeto, nela são passados os parâmetros que são o astributos do objeto, assim o código se torna reutilizável



class Pessoa{
    constructor(nome, idade){
        this.nome = nome; //A esquerda é o atributo e a direita é um parâmetro de entrada pra esse atributo
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa('Verena', 20);
pessoa1.idade = 21; //atribuir novos valores a classe
console.log(pessoa1);

const pessoa2 = new Pessoa('Laura', 36);
console.log(pessoa2);

*/

/* Aula 03 - Atributos 

//

class Quadrado{
    constructor(base, altura){
      //is Not a Number = Não é um Número  
        if(isNaN(base) || isNaN(altura)) throw "Informação não numérica" //Lança um erro 
        this.base = base;
        this.altura = altura;
        this.cor = undefined; //atributo opicional 
    }
}

const quadrado = new Quadrado(2, 4);
quadrado.cor = 'Azul';
console.log(quadrado);
*/

/* Aula 04 - Métodos  

// Método é uma função do objeto, representa suas funcionalidades

class Quadrado{
    constructor(base, altura){
      //is Not a Number = Não é um Número  
        if(isNaN(base) || isNaN(altura)) throw "Base e altura precisam ser números" //Lança um erro 
        this.base = base;
        this.altura = altura;
        this.cor = undefined; //atributo opicional 
    }
    calculaArea(){
        return this.base*this.altura;
    }

    duplicaBase(){
        this.base = 2*this.base;
    }
}

const quadrado = new Quadrado(11, 12);
quadrado.duplicaBase(); //Chamar o método
// quadrado.cor = 'Azul';
console.log(quadrado.calculaArea());*/

/* Aula 05 - Encapsulamento*/
/*
function Quadrado(base, altura){
    this.base = base;
    this.altura = altura;
    let cor = 'azul'; //variável local, não pode ser acessada fora do escopo
}

const quadrado = new Quadrado(3, 4);
console.log(quadrado.cor);
*/

/*
function criaQuadrado(base, altura){
    let cor = 'azul';

    return{
        base,
        altura,
        getCor: function(){return cor;}
    };
}

const quadrado = criaQuadrado(3, 4);
console.log(quadrado.getCor());

class Quadrado{
    constructor(lado, altura){
        let cor = 'azul';
        this.lado = lado;
        this.altura = altura;
        this.getCor = () => {return cor;}
    }
}

const quadrado = new Quadrado(3, 4);
console.log(quadrado.getCor());

*/