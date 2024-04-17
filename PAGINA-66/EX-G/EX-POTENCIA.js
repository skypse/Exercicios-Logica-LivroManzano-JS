/*Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser 
considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que 
neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). */

let valor = 3;
let resultado = 1;

console.log(valor + " ^ 0 = " + resultado);

for (let contadora = 1; contadora <= 15; contadora++) {
    resultado *= valor;
    console.log(valor + " ^ " + contadora + " = " + resultado);
}
