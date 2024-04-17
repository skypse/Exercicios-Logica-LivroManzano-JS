/*Apresentar os quadrados dos números inteiros de 15 a 200. */

let resultado;

console.log("Calculando as potências de 15 até 200:");

for (let contadora = 15; contadora <= 200; contadora++) {
    resultado = contadora * contadora;
    console.log(contadora + " ^ 2 = " + resultado);
}