/* Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um 
automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto 
(TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a 
distância percorrida com a fórmula DISTANCIA <- TEMPO * VELOCIDADE. Possuindo o valor da 
distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula 
LITROS_USADOS <- DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade 
média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a 
quantidade de litros (LITROS_USADOS) utilizada na viagem.*/

let tempo_gasto, velocidade_media, distancia_percorrida, litros_usados;

tempo_gasto=parseInt(prompt("Digite o tempo gasto em horas: "));
velocidade_media=parseInt(prompt("Digite velocidade média durante a viagem KM: "));
distancia_percorrida = tempo_gasto * velocidade_media;
litros_usados = distancia_percorrida / 12;
console.log("A sua velocidade média foi: ",velocidade_media);
console.log("Tempo gasto foi: ",distancia_percorrida,"KM");
console.log("A quantidade de litros utilizadas foi: ",litros_usados.toFixed(2),"L");