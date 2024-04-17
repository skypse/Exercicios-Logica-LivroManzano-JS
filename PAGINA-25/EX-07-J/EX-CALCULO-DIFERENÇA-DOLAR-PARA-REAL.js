/*Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em 
dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares 
disponível com o usuário, para que seja apresentado o valor em moeda brasileira.*/

let dolares, reais, cotacao;

cotacao = parseFloat(prompt("Digite a cotação do Dólar:"));
dolares = parseFloat(prompt("Digite a quantidade de dólares disponíveis para conversão:"));
reais = cotacao * dolares;

console.log("Resultado da conversão: R$", reais);
