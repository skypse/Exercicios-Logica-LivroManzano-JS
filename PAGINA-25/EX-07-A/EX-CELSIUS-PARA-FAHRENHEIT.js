/*Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de 
conversão é F <- (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.*/

let celsius, calculo;

celsius=parseInt(prompt("Digite a temperatura em (ºC)"));
calculo = (9 * celsius + 160) / 5;
console.log("A sua temperatura em Fahrenheit (ºF), fica: ",calculo);