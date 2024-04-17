/*Efetuar a leitura de cinco números inteiros e identificar o maior e o menor valores. */

let numero1, numero2, numero3, numero4, numero5;
let menor, maior;

numero1 = parseInt(prompt("Digite o primeiro numero: "));
numero2 = parseInt(prompt("Digite o segundo numero: "));
numero3 = parseInt(prompt("Digite o terceiro numero: "));
numero4 = parseInt(prompt("Digite o quarto numero: "));
numero5 = parseInt(prompt("Digite o quinto numero: "));

//encontrar o menor número entre os 5
menor = numero1;
if (numero2 < menor) {
    menor = numero2;
}
if (numero3 < menor) {
    menor = numero3;
}
if (numero4 < menor) {
    menor = numero4;
}
if (numero5 < menor) {
    menor = numero5;
}

//encontrar o maior número entre os 5
maior = numero1;
if (numero2 > maior) {
    maior = numero2;
}
if (numero3 > maior) {
    maior = numero3;
}
if (numero4 > maior) {
    maior = numero4;
}
if (numero5 > maior) {
    maior = numero5;
}

console.log("O maior número é: " + maior);
console.log("O menor número é: " + menor);
