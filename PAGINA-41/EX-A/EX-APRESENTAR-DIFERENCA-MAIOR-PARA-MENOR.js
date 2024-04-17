/*Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor.*/

let numero1, numero2, diferenca;

numero1=parseInt(prompt("Digite um número inteiro entre (1 à 1000)"));
numero2=parseInt(prompt("Digite mais outro número inteiro entre (1 à 1000)"));

if ((numero1 == 0 ) && (numero2 == 0)) {
  console.log("Números não válidos, digite números entre (1 à 1000)");
} else if (numero1 > numero2) {
  diferenca = numero1 - numero2;
  console.log("O maior número digitado é",numero1,"o menor número digitado é",numero2);
  console.log("A diferenca entre eles da:",diferenca);
} else{
  diferenca = numero2 - numero1;
  console.log("O maior número digitado é",numero2,"o menor número digitado é",numero1);
  console.log("A diferenca entre eles da:",diferenca);
}