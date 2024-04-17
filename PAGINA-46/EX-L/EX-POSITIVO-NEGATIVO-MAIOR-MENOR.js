/*Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo 
seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo 
usuário. */
// o codigo só para quando informar um numero negativo
let valorAnterior = 1;
let valorMaior = null;
let valorMenor = null;
let verificacao = 0;

while (verificacao === 0) {
    let valor = parseInt(prompt("Escreva um valor: "));

    if (valor < 0) {
        verificacao = 1;
    } else {
        if (valorMaior === null || valor > valorMaior) {
            valorMaior = valor;
        }

        if (valorMenor === null || valor < valorMenor) {
            valorMenor = valor;
        }

        valorAnterior = valor;
    }
}

console.log("O maior valor digitado foi:", valorMaior);
console.log("O menor valor digitado foi:", valorMenor);
