/*Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de 
forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da
variável A. Apresentar os valores trocados*/

let valor1, valor2, troca;

valor1=parseInt(prompt("Digite um valor para a variável 'A'"));
valor2=parseInt(prompt("Digite um valor para a variável 'B'"));
troca = valor1
valor1 = valor2
valor2 = troca

console.log("Valor da variável 'A', é: ",valor1);
console.log("Valor da variável 'B', é: ",valor2);