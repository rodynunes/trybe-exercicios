// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:

//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Flavio e Noel e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

//EXERCICIO 01
let soma = 0;
for (let index = 1; index <= 50; index++) {
    soma += index;
}
console.log(`a soma total de 1 a 50 é: ${soma}`);

//==================

//EXERCICIO 02

let divisiveis = [];

for (let index=2; index<=150; index+=1){
    if (index % 3 === 0){
        divisiveis.push(index);
    }
}
if (divisiveis.length === 50){
    console.log("Mensagem Secreta");
}
console.log(divisiveis.length);


//EXERCICIO 03
let opcoes = ["pedra","papel", "tesoura"];

let player1 = opcoes[Math.floor((Math.random() * 2))];
let player2 = opcoes[Math.floor((Math.random() * 2))];

console.log(`Player 1 jogou ${player1} Player 2 jogou ${player2}`);

if (player1 == "pedra"){
    if (player2 == "tesoura"){
        console.log('Player 1 won');        
    } else if (player2 == "papel") {
        console.log('Player 2 won');        
    } else {
        console.log('A Ties');        
    }
}

if (player1 == "papel"){
    if (player2 == "pedra"){
        console.log('Player 1 won');        
    } else if (player2 == "tesoura") {
        console.log('Player 2 won');        
    } else {
        console.log('A Ties');        
    }
}

if (player1 == "tesoura"){
    if (player2 == "papel"){
        console.log('Player 1 won');        
    } else if (player2 == "pedra") {
        console.log('Player 2 won');        
    } else {
        console.log('A Ties');        
    }
}

//EXERCICIO 04
let idade = 18;
if (idade >= 18) {
    console.log("A pessoa é maior de idade");
} else {
    console.log("A pessoa é menor de idade");
}

//EXERCICIO 05
let idade2 = 2;
console.log(idade2 >= 18 ? "A pessoa é maior de idade" : "A pessoa é menor de idade");
//Crie um algoritmo que recebe a idade de Carolzita , Flavio e Noel e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.
const idadeCarolzita = 19;
const idadeFlavio = 25;
const idadeNoel = 40;
let maisNova = "";
if (idadeFlavio < idadeCarolzita && idadeFlavio < idadeNoel) {
    maisNova = "Flavio";
} else if (idadeNoel < idadeCarolzita && idadeNoel < idadeFlavio) {
    maisNova = "Noel";
} else {
    maisNova = "Carolzinha"
}
console.log(`${maisNova} é a mais nova.`);