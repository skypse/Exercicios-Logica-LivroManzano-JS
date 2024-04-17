/*Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de 
conversão é C <- (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.*/

let fahrenheit, calculo;

celsius=parseInt(prompt("Digite a temperatura em Fahrenheit(ºF)"));
calculo = (fahrenheit - 32) * (5/9);
console.log("A sua temperatura em Celsius (ºC), fica: ",calculo);