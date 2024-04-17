/*Elaborar um programa que efetue o cálculo e no final apresente o somatório do número de grãos de 
trigo que se pode obter num tabuleiro de xadrez, obedecendo à seguinte regra: colocar um grão de 
trigo no primeiro quadro e nos quadros seguintes o dobro do quadro anterior. Ou seja, no primeiro 
quadro coloca-se 1 grão, no segundo quadro colocam-se 2 grãos (neste momento têm-se 3 grãos), 
no terceiro quadro colocam-se 4 grãos (tendo neste momento 7 grãos), no quarto colocam-se 8 
grãos (tendo-se então 15 grãos) até atingir o sexagésimo quarto (64o
) quadro. Utilize variáveis do 
tipo real como acumuladores.*/

let numeroDeVerificacao = 1;
let dobro = 1;
let quadro = 1;
let soma = 0;

do {
    soma += dobro; // Acumula o valor de dobro na variável soma
    dobro *= 2;
    quadro++;
} while (quadro <= 64);

console.log("");
console.log("A soma foi: " + soma);
