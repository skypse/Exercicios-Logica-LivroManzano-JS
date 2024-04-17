/*Efetuar a leitura de três valores (variáveis A, B e C) e efetuar o cálculo da equação completa de 
segundo grau, apresentando as duas raízes, se para os valores informados for possível efetuar o 
referido cálculo. Lembre-se de que a variável A deve ser diferente de zero*/

let numero_A, numero_B, numero_C, delta, resultado_A, resultado_B;

numero_A = parseInt(prompt("Digite um valor para 'A': "));
numero_B = parseInt(prompt("Digite um valor para 'B': "));
numero_C = parseInt(prompt("Digite um valor para 'C': "));

if (numero_A === 0) {
    console.log("Impossível fazer a equação de segundo grau");
} else {
    delta = numero_B ** 2 - 4 * numero_A * numero_C;
    if (delta < 0) {
        console.log("Não existem raízes reais");
    } else {
        resultado_A = (-numero_B + Math.sqrt(delta)) / (2 * numero_A);
        resultado_B = (-numero_B - Math.sqrt(delta)) / (2 * numero_A);
    }

    if (delta === 0) {
        console.log("Existe uma única raiz real: " + resultado_A);
    } else {
        console.log("A primeira raiz é: " + resultado_A + ", a segunda raiz é: " + resultado_B);
    }
}
