/*Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer. 
Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético 
DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve 
apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo. */

let somaDosFatoriais = 0;
let n1 = 0;

do {
    let numeroDoFatorial = parseInt(prompt("Escreva um número: "));
    let totalDoFatorial = 1;

    for (let i = numeroDoFatorial; i > 1; i--) {
        totalDoFatorial *= i;
    }

    console.log("Total do Fatorial:", totalDoFatorial);

    somaDosFatoriais += totalDoFatorial;
    n1++;
} while (n1 <= 15);

console.log("Total de todos Fatoriais é:", somaDosFatoriais);
