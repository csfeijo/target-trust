// comentario de uma linha
/* comentario de
   multiplas
   linhas */
// variaveis só recebem o tipo no momento de atribuição do valor

var nome = 'Cicero';
var idade = 39;
var salario = 5366.87;
var possuiHabilitacao = true;
var genero = 'M';
var enderecoCompleto = 'Rua dos Andradas, 59';
var sobrenome;

// envia mensagens no console do browser (que são uteis APENAS para o desenvolvedor)
// é a nível de debug (somente para inspecionar algum valor / lógica)
console.log('Valor do salario é:', salario);

// operações aritmeticas (+,-,*,/, % "MOD" )
// MUITO IMPORTANTE: que o JS não é uma linguagem ideal para calculos matematicos Precisos!
var bonus = salario * 0.5;

// comparadores (basicos)
// >, <, >=, <=, ==, !=
var idadeImpar = idade % 2 == 1;

// condicionais
if (idade >= 18) {
   console.log('PODE DIRIGIR!!!');
} else {
   console.log('NÃO PODE DIRIGIR!');
}

// repeticoes
for (var cont = 1; cont <= 100; cont++) {
   console.log(cont);
}







