/* Ler o valor correspondente ao salário mensal (variável SM) de um trabalhador e também o valor do 
percentual de reajuste (variável PR) a ser atribuído. Apresentar o valor do novo salário (variável NS).*/

let salario_mensal, percentual_reajuste, novo_salario;

salario_mensal = parseFloat(prompt("Digite seu salário mensal:"));
percentual_reajuste = parseFloat(prompt("Digite o percentual de reajuste:"));
novo_salario = salario_mensal + (percentual_reajuste * salario_mensal / 100);

console.log("O novo salário mensal atribuído com o reajuste foi de: R$",novo_salario.toFixed(2));
