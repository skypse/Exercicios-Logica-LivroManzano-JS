/*Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem 
dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da 
média for menor que 7, solicitar a nota de exame, somar com o valor da média e obter nova média. 
Se a nova média for maior ou igual a 5, apresentar uma mensagem dizendo que o aluno foi 
aprovado em exame. Se o aluno não foi aprovado, indicar uma mensagem informando esta 
condição. Apresentar com as mensagens o valor da média do aluno, para qualquer condição*/

let nota1, nota2, nota3, nota4, media, nota_exame, nova_media;

nota1 = parseFloat(prompt("A primeira nota do aluno:"));
nota2 = parseFloat(prompt("A segunda nota do aluno:"));
nota3 = parseFloat(prompt("A terceira nota do aluno:"));
nota4 = parseFloat(prompt("A quarta nota do aluno:"));
media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 7) {
    console.log("O aluno foi aprovado com média ",media.toFixed(2));
} else {
    nota_exame = parseFloat(prompt("Digite a nota do exame:"));

    nova_media = (media + nota_exame) / 2;

    if (nova_media >= 5) {
        console.log("O aluno foi aprovado no exame com média ",nova_media.toFixed(2));
    } else {
        console.log("O aluno não foi aprovado com média ",nova_media.toFixed(2));
    }
}