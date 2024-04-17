/* Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em 
real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível 
com o usuário, para que seja apresentado o valor em moeda americana.*/

let dolares, reais, cotacao;

cotacao = parseFloat(prompt("Digite a cotação do Dólar:"));
dolares = parseFloat(prompt("Digite a quantidade de dólares disponíveis para conversão:"));
reais = dolares * cotacao;

console.log("Resultado da conversão: R$", reais);
