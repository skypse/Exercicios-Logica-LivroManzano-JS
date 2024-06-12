/*Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o 
total do somatório da fatorial de cada valor lido.*/

let somaDosFatoriais = 0;
let i = 1;

do {
    let valor = parseInt(prompt("Digite um valor inteiro: "));
    let fatorial = 1;

    for (let j = 2; j <= valor; j++) {
        fatorial *= j;
    }

    somaDosFatoriais += fatorial;
    i++;
} while (i <= 15);

console.log("O total do somatório dos fatoriais é:", somaDosFatoriais);
