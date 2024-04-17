/*Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores 
pares situados na faixa numérica de 50 a 70. */

let numero, media, soma = 0;
let contador = 50;

while (contador < 71) {
    if (contador % 2 === 0) {
        soma += contador;
        console.log(contador);
    }
    contador++;
}
console.log("----------------------------------");
media = soma / 11;
console.log("A soma é: " + soma);
console.log("A média é: " + media);