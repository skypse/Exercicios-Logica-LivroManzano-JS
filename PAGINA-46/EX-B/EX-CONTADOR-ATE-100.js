/*apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100). */

let contador = 1;
let soma = 0;

while (contador <= 100) {
    soma += contador;
    contador++;
}
console.log(soma);
