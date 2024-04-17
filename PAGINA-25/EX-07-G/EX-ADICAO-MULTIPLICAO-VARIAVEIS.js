/* Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na 
utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D,
devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim 
C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de 
multiplicação e apresentar doze resultados de saída.*/

let A, B, C, D;
let resultado_soma, resultado_multiplicacao;

A = parseInt(prompt("Digite o valor de A:"));
B = parseInt(prompt("Digite o valor de B:"));
C = parseInt(prompt("Digite o valor de C:"));
D = parseInt(prompt("Digite o valor de D:"));

console.log("-------------------------------------------------------");
resultado_soma = A + B;
resultado_multiplicacao = A * B;
console.log("A soma de A + B = ", resultado_soma);
console.log("A multiplicação de A * B = ", resultado_multiplicacao);
console.log("-------------------------------------------------------");

resultado_soma = A + C;
resultado_multiplicacao = A * C;
console.log("A soma de A + C = ", resultado_soma);
console.log("A multiplicação de A * C = ", resultado_multiplicacao);
console.log("-------------------------------------------------------");

resultado_soma = A + D;
resultado_multiplicacao = A * D;
console.log("A soma de A + D = ", resultado_soma);
console.log("A multiplicação de A * D = ", resultado_multiplicacao);
console.log("-------------------------------------------------------");

resultado_soma = B + C;
resultado_multiplicacao = B * C;
console.log("A soma de B + C = ", resultado_soma);
console.log("A multiplicação de B * C = ", resultado_multiplicacao);
console.log("-------------------------------------------------------");

resultado_soma = B + D;
resultado_multiplicacao = B * D;
console.log("A soma de B + D = ", resultado_soma);
console.log("A multiplicação de B * D = ", resultado_multiplicacao);
console.log("-------------------------------------------------------");

resultado_soma = C + D;
resultado_multiplicacao = C * D;
console.log("A soma de C + D = ", resultado_soma);
console.log("A multiplicação de C * D = ", resultado_multiplicacao);
console.log("-------------------------------------------------------");