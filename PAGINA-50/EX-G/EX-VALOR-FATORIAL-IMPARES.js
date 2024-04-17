/* Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares 
situados na faixa numérica de 1 a 10. */

let contadora, fatorial, impar, anterior;

fatorial = 1
contadora = 1;
anterior = 1;

do {
  let impar = contadora % 2;

  if (impar !== 0) {
      anterior = fatorial;
      fatorial *= contadora;
      console.log(anterior + " * " + contadora + " = " + fatorial);
  }

  contadora++;
} while (contadora <= 10);