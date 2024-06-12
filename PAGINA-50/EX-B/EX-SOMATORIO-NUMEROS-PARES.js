/* Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 
1 até 500*/

let contadora = 1;
let acumuladora = 0;

do {
  if (contadora % 2 === 0) {
    acumuladora += contadora;
  }
  contadora++;
} while (contadora < 501);

console.log("A soma dos números pares é: " + acumuladora);
