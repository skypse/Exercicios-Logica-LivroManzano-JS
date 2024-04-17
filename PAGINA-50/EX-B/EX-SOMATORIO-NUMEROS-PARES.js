/* Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 
1 até 500*/

let numero = 1;
let soma = 0;

while (numero <= 500) {
    if (numero % 2 === 0) {
        soma += numero;
    }
    numero++;
}
console.log("A soma dos números pares é: " + soma);
