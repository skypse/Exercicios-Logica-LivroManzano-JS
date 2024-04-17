/* Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. */

let numero, contadora;
numero = parseInt(prompt("Digite um número para a tabuada de multiplicação: "));
contadora = 1;
while (contadora < 11) {
    console.log(numero + " X " + contadora + " = " + (numero * contadora));
    contadora++;
}
