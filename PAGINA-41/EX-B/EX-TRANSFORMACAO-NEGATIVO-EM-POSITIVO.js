/*Efetuar a leitura de um valor inteiro positivo ou negativo e apresentar o número lido como sendo um
valor positivo, ou seja, o programa deverá apresentar o módulo de um número fornecido. Lembre-se 
de verificar se o número fornecido é menor que zero; sendo, multiplique-o por -1.*/

let numero1,calculo;

numero1=parseInt(prompt("Digite um valor inteiro (positivo ou negativo)"));

if (numero1 < 0 ){
  calculo = numero1 * -1;
  console.log("Aqui está seu valor negativo, transformado em positivo:",calculo);
} else{
  console.log("Seu valor é positivo:",numero1);
}