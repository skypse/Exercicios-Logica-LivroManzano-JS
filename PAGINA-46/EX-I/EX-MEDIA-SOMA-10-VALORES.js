/*Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do 
somatório e a média aritmética dos valores lidos. */

let numero, media, soma = 0;
let contador = 0;

while (contador < 10) {
    numero = parseFloat(prompt("Digite um número (total de 10): "));
    soma += numero;
    contador++;
}

media = soma / 10;

console.log("Soma: " + soma);
console.log("Média: " + media);
