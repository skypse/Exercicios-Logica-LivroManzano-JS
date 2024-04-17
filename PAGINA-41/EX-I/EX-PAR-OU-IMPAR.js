/*Elaborar um programa que efetue a leitura de um número inteiro e apresentar uma mensagem 
informando se o número é par ou ímpar.*/

let numero;
numero = parseInt(prompt("Digite um número inteiro: "));

if (numero % 2 === 0) {
    console.log("O número digitado é Par");
} else {
    console.log("O número digitado é Ímpar");
}
