/*Apresentar todos os números divisíveis por 4 que sejam menores que 200. Para verificar se o 
número é divisível por 4, efetuar dentro da malha a verificação lógica desta condição com a 
instrução se, perguntando se o número é divisível; sendo, mostre-o; não sendo, passe para o 
próximo passo. A variável que controlará o contador deve ser iniciada com o valor 1. */

let numero = 1;
let soma = 0;

while (numero <= 500) {
    if (numero % 2 === 0) {
        soma += numero;
    }
    numero++;
}

console.log("A soma dos números pares é: " + soma);
