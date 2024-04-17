/*Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, 
banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do 
nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área do cômodo lido e também uma mensagem solicitando 
do usuário a confirmação de continuar calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor 
total acumulado da área residencial. */

let larguraComodo, alturaComodo, areaComodo;
let verificacao = "S";

while (verificacao.toUpperCase() === "S") {
    let nomeComodo = prompt("Escreva o nome do cômodo da casa: ");
    let larguraInput = prompt("Escreva a largura do cômodo (em metros): ");
    larguraComodo = parseFloat(larguraInput);
    let alturaInput = prompt("Escreva a altura do cômodo (em metros): ");
    alturaComodo = parseFloat(alturaInput);

    if (isNaN(larguraComodo) || isNaN(alturaComodo)) {
        alert("Por favor, insira dimensões válidas para o cômodo.");
        continue;
    }

    areaComodo = alturaComodo * larguraComodo;
    console.log("A área do(a) " + nomeComodo + " é: " + areaComodo + " metros quadrados.");

    alert("Continuar? (S/N)");
    verificacao = prompt().toUpperCase();
}