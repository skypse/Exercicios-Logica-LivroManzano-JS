/*Em uma eleição sindical concorreram ao cargo de presidente três candidatos (A, B e C). Durante a 
apuração dos votos foram computados votos nulos e votos em branco, além dos votos válidos para 
cada candidato. Deve ser criado um programa de computador que efetue a leitura da quantidade de 
votos válidos para cada candidato, além de efetuar também a leitura da quantidade de votos nulos e 
votos em branco. Ao final o programa deve apresentar o número total de eleitores, considerando votos 
válidos, nulos e em branco; o percentual correspondente de votos válidos em relação à quantidade de 
eleitores; o percentual correspondente de votos válidos do candidato A em relação à quantidade de 
eleitores; o percentual correspondente de votos válidos do candidato B em relação à quantidade de 
eleitores; o percentual correspondente de votos válidos do candidato C em relação à quantidade de 
eleitores; o percentual correspondente de votos nulos em relação à quantidade de eleitores; e por último 
o percentual correspondente de votos em branco em relação à quantidade de eleitores.*/

let votos_A, votos_B, votos_C, votos_nulos, votos_brancos, total_votos;
let percentual_votos_validos, percentual_votos_A, percentual_votos_B, percentual_votos_C, percentual_votos_nulos, percentual_votos_branco;

votos_A = parseInt(prompt("Digite a quantidade de votos do candidato A:"));
votos_B = parseInt(prompt("Digite a quantidade de votos do candidato B:"));
votos_C = parseInt(prompt("Digite a quantidade de votos do candidato C:"));
votos_nulos = parseInt(prompt("Digite a quantidade de votos nulos:"));
votos_brancos = parseInt(prompt("Digite a quantidade de votos em branco:"));

total_votos = votos_A + votos_B + votos_C + votos_nulos + votos_brancos;

percentual_votos_validos = ((votos_A + votos_B + votos_C) / total_votos) * 100;
percentual_votos_A = (votos_A / total_votos) * 100;
percentual_votos_B = (votos_B / total_votos) * 100;
percentual_votos_C = (votos_C / total_votos) * 100;
percentual_votos_nulos = (votos_nulos / total_votos) * 100;
percentual_votos_branco = (votos_brancos / total_votos) * 100;

console.log("Número total de eleitores: ",total_votos);
console.log("Percentual de votos válidos: ",percentual_votos_validos.toFixed(2),"%");
console.log("Percentual de votos válidos para o candidato A: ",percentual_votos_A.toFixed(2), "%");
console.log("Percentual de votos válidos para o candidato B: ",percentual_votos_B.toFixed(2),"%");
console.log("Percentual de votos válidos para o candidato C: ",percentual_votos_C.toFixed(2),"%");
console.log("Percentual de votos nulos: ",percentual_votos_nulos.toFixed(2),"%");
console.log("Percentual de votos em branco: ",percentual_votos_branco.toFixed(2),"%");
