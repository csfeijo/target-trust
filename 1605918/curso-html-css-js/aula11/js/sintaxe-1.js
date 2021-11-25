// Criação de variáveis em JS
var nome = 'Guilherme';// caractere - string
var idade = 13;        // inteiro - integer
var salario = 5236.29; // real - real / decimal
var casado = true;     // true ou false - boolean

// Operações aritméticas
// + - * / %
// % => mod (modulo) e retorna o RESTO de uma divisao, sendo muito usado em algoritimos
// de numeros pares / impares
var x = 10;
var y = 20;
var resultado = x + y;
var media = (x + y) / 2;
var modulo = x % 2;

// Condicionais
// >, >=, <, <=, ==, !=
if (idade >= 18) {
  alert('Pode dirigir!');
} else {
  alert('Não pode dirigir');
}

// Estruturas de repetição
// Laços / Loops
var cont = 1;

// enquanto (while)
while (cont < 4) {
  alert('Michel');

  // cont = cont + 1;
  cont++; // incrementa uma unidade na variavel cont
}
// repita (do / while)
var cont2 = 1;
do {
  alert('Carla');

  cont2++;
} while (cont2 < 4);

// para (FOR)
// inicio do cont; condicao de parada; o que faz em cada volta (incrementar)
for (var cont3 = 1; cont3 < 4; cont3++) {
  alert('Victória');
}


// alert(nome);





