/*Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o 
total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras 
dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve 
parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar 
como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da 
média.*/

let contadora = 0;
let numero;
let soma = 0;
let media;
let converter;

do {
    numero = parseFloat(prompt("Digite um numero: "));
    soma += numero;
    
    if (numero < 0) {
        converter = numero * (-1);
        soma += converter;
    }
    
    contadora++;
} while (numero >= 0);

contadora--;

media = soma / contadora;

console.log("A soma de todos os numeros é:", soma);
console.log("A media aritmética é:", media);
console.log("A quantidade de numeros digitados foi:", contadora);
