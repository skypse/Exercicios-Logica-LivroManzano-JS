/*Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente.*/

let valor_A, valor_B,valor_C, troca;

//captura os valores de 'A', 'B' e 'C'
valor_A = parseFloat(prompt("Digite o valor de A: "));
valor_B = parseFloat(prompt("Digite o valor de B: "));
valor_C = parseFloat(prompt("Digite o valor de C: "));

//verificar se 'A' é maior que 'B'
if (valor_A > valor_B){
  troca = valor_A // se sim, armazena o valor de 'A' em troca
  valor_A = valor_B // 'A' recebe o valor de 'B'
  valor_B = troca // 'B' recebe o valor armazenado em troca
}
//verificar se 'B' é maior que 'C'
if (valor_B > valor_C){
  troca = valor_B // se sim, armazena o valor de 'B' em troca
  valor_B = valor_C // 'B' recebe o valor de 'C'
  valor_C = troca // 'C' recebe o valor armazenado em troca
}
//verifica novamente se 'A' é maior que 'B'
if (valor_A > valor_B){
  troca = valor_A // se sim, armazena o valor de 'A' em troca
  valor_A = valor_B // 'A' recebe o valor de 'B'
  valor_B = troca // 'B' recebe o valor armazenado em troca
}
//agora, como 'A' é o maior valor e 'C' é o menor, 'B' só pode estar no meio
console.log("Os valores em ordem crescente são: " + valor_A + ", " + valor_B + " e " + valor_C);
