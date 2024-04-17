/*Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo 
segundo.*/

let A, B;
let potenciacao;

A = parseInt(prompt("Digite o primeiro valor:"));
B = parseInt(prompt("Digite o segundo valor:"));
potenciacao = (A - B) * (A - B);

console.log("O resultado entre as potenciações: " + potenciacao);
