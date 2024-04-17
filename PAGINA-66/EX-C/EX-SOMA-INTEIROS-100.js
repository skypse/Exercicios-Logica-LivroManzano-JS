/*Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100). */

let soma = 0;

for (let contadora = 1; contadora <= 100; contadora++) {
    soma += contadora;
}
console.log("-----------------------------------------------------------");
console.log("A soma dos 100 primeiros números inteiros é: " + soma);
console.log("-----------------------------------------------------------");
