// se o campo idade for maior ou igual a 18 anos entao avise que
// o usuario pode dirigir
function testaIdade() {
  var idade = document.getElementById('idade');
  var msg = document.getElementById('mensagem');

  if (idade.value >= 18) {
    // alert('Pode dirigir!');
    msg.innerHTML = 'Pode dirigir!';
  } else {
    // alert('NAO PODE dirigir!');
    msg.innerHTML = 'NÃO PODE DIRIGIR!';
  }
}

// Altere o HTML criando uma tag P 
// e ao inves de jogar a mensagem da condicional em um alert
// escreva a mensagem dentro da tag P usando JavaScript
