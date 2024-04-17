/*Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. */

let valor, resultado;

valor = parseInt(prompt("Digite um valor: "));

console.log("Multiplicando " + valor + " pelos números de 0 a 10:");

for (let contadora = 0; contadora <= 10; contadora++) {
    resultado = valor * contadora;
    console.log(valor + " * " + contadora + " = " + resultado);
}
