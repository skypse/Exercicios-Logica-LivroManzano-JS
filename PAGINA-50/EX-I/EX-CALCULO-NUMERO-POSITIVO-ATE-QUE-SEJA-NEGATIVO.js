/*Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo 
seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo 
usuário.*/

let total = 0;
let quantidadeValores = 0;
let valor;
let maior;
let menor;

do {
    valor = parseFloat(prompt("Insira um valor: "));

    if (quantidadeValores === 0) {
        maior = valor;
        menor = valor;
    } else {
        if (valor > maior) {
            maior = valor;
        }
        if (valor < menor) {
            menor = valor;
        }
    }

    if (valor >= 0) {
        total += valor;
        quantidadeValores++;
    }

} while (valor >= 0);

console.log("O maior valor informado foi: " + maior);
console.log("O menor valor informado foi: " + menor);
