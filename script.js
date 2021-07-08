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