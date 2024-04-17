/*Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares 
situados na faixa numérica de 1 a 10. */

let resultado;

for (let contadora = 1; contadora <= 10; contadora++) {
    if (contadora % 2 === 1) {
        resultado = 1;
        for (let contadora2 = 1; contadora2 <= contadora; contadora2++) {
            resultado *= contadora2;
        }
        console.log(contadora + "! = " + resultado);
    }
}
