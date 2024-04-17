/*Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à 
soma dos quadrados dos três valores lidos.*/

let A, B, C, soma;


A = parseFloat(prompt("Digite o primeiro número:"));
B = parseFloat(prompt("Digite o segundo número:"));
C = parseFloat(prompt("Digite o terceiro número:"));
soma = (A ** 2) + (B ** 2) + (C ** 2)

console.log("A soma dos quadrados é: ", soma);
