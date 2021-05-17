var numeros = [123, 3, 35, 99, 15];
var total = 0;


for (var i = 0; i < numeros.length; i++) {

  if (numeros[i] % 2 == 1) {
    console.log(numeros[i]);

    // total = total + 1; // formato "primitivo/classico" - funciona em qualquer linguagem
    //total += 1; // formato "elegante 2" - mas permite incrementar mais de uma unidade
    total++; // formato "elegante"
  }

}

console.log('o total de numeros impares é', total);
