/*Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, 
banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do 
nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área 
do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar 
calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor 
total acumulado da área residencial. */

let comodo, opcao;
let largura, comprimento, total, soma = 0;

do {
    comodo = prompt("Digite o nome do cômodo:");
    largura = parseInt(prompt("Digite o valor da largura:"));
    comprimento = parseInt(prompt("Digite o valor do comprimento:"));

    total = largura * comprimento;
    soma += total;

    alert("Deseja continuar? S - Sim / N - Não");
    opcao = prompt();

} while (opcao.toUpperCase() === "S");

console.log("A área da residência é de " + soma);
