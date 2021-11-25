/*
  Sobre vetor a seguir implemente uma estrutura de repetição que percorra o vetor
  e exiba no console APENAS os numeros maiores que 5 */

// faça uma estrutura GENERICA o suficiente para que EU possa trocar os dados do vetor 
// e a implementação continuar valendo

// BABY STEPS : façam por partes, PRIMEIRO EXIBA todo o vetor no console, depois numa segunda etapa
// altere o algoritmo para exibir só os maiores que 5

var numeros = [3, 4, 5, 7, 10, 12, 16, 19, 25, 1, 0, -5, -3];
//var numeros = [10, -3, -5, 1, 2];

for (var i = 0; i < numeros.length; i++) {

  if (numeros[i] > 5) {
    console.log(numeros[i]);
  }


}
