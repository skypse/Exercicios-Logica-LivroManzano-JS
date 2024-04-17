/*Elaborar um programa que apresente como resultado o valor de uma potência de uma base 
qualquer elevada a um expoente qualquer, ou seja, de BE
, em que B é o valor da base e E o valor 
do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do 
portuguol (^). */

let valor, expoente, resultado;

valor = parseInt(prompt("Digite o valor da base: "));
expoente = parseInt(prompt("Digite o valor do expoente: "));
resultado = 1;
for (let contadora = 1; contadora <= expoente; contadora++) {
    resultado *= valor;
}
console.log(valor + " ^ " + expoente + " = " + resultado);
