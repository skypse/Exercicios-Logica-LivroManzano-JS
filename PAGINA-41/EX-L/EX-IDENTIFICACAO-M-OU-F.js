/*Elaborar um programa que efetue a leitura do nome e do sexo de uma pessoa, apresentando com 
saída uma das seguintes mensagens: "Ilmo Sr.", se o sexo informado como masculino, ou a 
mensagem "Ilma Sra.", para o sexo informado como feminino. Apresente também junto da 
mensagem de saudação o nome previamente informado*/
let nome, sexo;
nome = prompt("Digite o seu nome: ");
sexo = prompt("Digite o seu sexo (M para masculino ou F para feminino): ");

if (sexo.toUpperCase() === 'M') {
    console.log("Ilmo Sr. " + nome);
} else if (sexo.toUpperCase() === 'F') {
    console.log("Ilma Sra. " + nome);
} else {
    console.log("Sexo inválido. Por favor, insira M para masculino ou F para feminino.");
}
