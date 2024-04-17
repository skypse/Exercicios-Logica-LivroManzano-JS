/*Efetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3.*/

let numero1, numero2, numero3, numero4;

numero1 = parseInt(prompt("Digite o primeiro número: "));
numero2 = parseInt(prompt("Digite o segundo número: "));
numero3 = parseInt(prompt("Digite o terceiro número: "));
numero4 = parseInt(prompt("Digite o quarto número: "));

console.log("Números divisíveis por 2 e 3:");


if (numero1 % 2 === 0 && numero1 % 3 === 0) {
    console.log(numero1 + " é divisível por 2 e por 3");
} else {
    console.log(numero1 + " não é divisível por 2 e por 3");
}
if (numero2 % 2 === 0 && numero2 % 3 === 0) {
    console.log(numero2 + " é divisível por 2 e por 3");
} else {
    console.log(numero2 + " não é divisível por 2 e por 3");
}

if (numero3 % 2 === 0 && numero3 % 3 === 0) {
    console.log(numero3 + " é divisível por 2 e por 3");
} else {
    console.log(numero3 + " não é divisível por 2 e por 3");
}

if (numero4 % 2 === 0 && numero4 % 3 === 0) {
    console.log(numero4 + " é divisível por 2 e por 3");
} else {
    console.log(numero4 + " não é divisível por 2 e por 3");
}
