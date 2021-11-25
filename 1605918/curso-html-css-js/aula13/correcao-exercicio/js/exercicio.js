function calculaMedia() {
  var nota1 = document.getElementById('nota1').value;
  var nota2 = document.getElementById('nota2').value;
  var nota3 = document.getElementById('nota3').value;

  // OU - OR - ||
  // E - AND - &&
  // return : toda vez que uma funcao encontra um RETURN 
  // ela encerra naquele ponto.
  if (parseInt(nota1) < 0 || parseInt(nota1) > 10) {
    alert('Nota 1 com valor invalido!');
    return false;
  }
  if (parseInt(nota2) < 0 || parseInt(nota2) > 10) {
    alert('Nota 2 com valor invalido!');
    return false;
  }
  if (parseInt(nota3) < 0 || parseInt(nota3) > 10) {
    alert('Nota 3 com valor invalido!');
    return false;
  }

  // Calculo da media das notas
  // var media = (nota1 + nota2 + nota3) / 3;
  // Mesmo lendo dados de um formulario o JS não é capaz de entender
  // automaticamente o tipo do dado lido, entao por padrão
  // ele interpreta esse dado como 'string', portanto precisamos
  // aplicar uma CONVERSAO para tornar esse dado um numero
  // parseInt -> converte para integer
  // parseFloat -> converte para float/decimal/real
  var media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;

  // Agora acessamos nossa tag P para colocar a mensagem final dentro dela
  var aval = document.getElementById('avaliacao');

  if (media >= 7) {
    aval.innerHTML = 'Você foi APROVADO!';
    aval.style.color = 'green';
  } else {
    aval.innerHTML = 'Você foi REPROVADO!';
    aval.style.color = 'red';
  }
}
