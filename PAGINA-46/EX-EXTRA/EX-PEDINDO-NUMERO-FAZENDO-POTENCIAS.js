/*Exercicio proposto em sala de aula*/

let contador = 0;
let numero;
let resultado = 1;

alert("Fazendo as potências de 3, de 0 até 15");
numero = parseInt(prompt("Digite um número diferente de 0: "));

console.log(resultado);

while (contador < 15) {
    resultado *= numero;
    contador++;
    console.log(resultado);
}
