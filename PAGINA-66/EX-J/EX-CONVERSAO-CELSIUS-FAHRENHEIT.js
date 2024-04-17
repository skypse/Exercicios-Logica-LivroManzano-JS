/*Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 
10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O 
programa deve apresentar os valores das duas temperaturas. A fórmula de conversão 
é F = 9C + 160
    -----------
        5
sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.*/

let celsius = 0;
let fahrenheit = 0;

for (let contadora = 1; contadora <= 10; contadora++) {
    celsius += 10;
    fahrenheit = (9 * celsius + 160) / 5;
    console.log("Graus Celsius: " + celsius + "ºC | Graus Fahrenheit: " + fahrenheit + "ºF");
}
