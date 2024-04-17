/*Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula 
VOLUME <- COMPRIMENTO * LARGURA * ALTURA.*/

let altura, largura, comprimento, volume;

comprimento = parseInt(prompt("Escreva o comprimento da caixa retangular:"));
largura = parseInt(prompt("Escreva a largura da caixa retangular:"));
altura = parseInt(prompt("Escreva a altura da caixa retangular:"));
volume = comprimento * largura * altura;

console.log("O volume é: ",volume,"unidades cúbicas");
