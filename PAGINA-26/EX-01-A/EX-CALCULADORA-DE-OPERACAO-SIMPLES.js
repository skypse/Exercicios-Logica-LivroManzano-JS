/* Elaborar um programa de computador que efetue a leitura de quatro valores inteiros (variáveis A, B, C e 
D). Ao final o programa deve apresentar o resultado do produto (variável P) do primeiro com o terceiro
valor, e o resultado do produto (variável P) do primeiro com o terceiro valor, e o resultado da soma 
(variável S) do segundo com o quarto valor*/

let valor_1, valor_2, valor_3, valor_4, produto, soma;

valor_1 = parseInt(prompt("Digite o primeiro número:"));
valor_2 = parseInt(prompt("Digite o segundo número:"));
valor_3 = parseInt(prompt("Digite o terceiro número:"));
valor_4 = parseInt(prompt("Digite o quarto número:"));
produto = valor_1 * valor_3;
soma = valor_2 + valor_4;

console.log("O valor do produto entre o Primeiro e o Terceiro é: ",produto);
console.log("O valor da soma entre o Segundo e o Quarto é: ",soma);
