function leDados() {
  var nome = document.querySelectorAll('#nome')[0];
  var idade = document.querySelectorAll('#idade')[0];
  // acessa o elemento HTML chamado #dados
  var dados = document.querySelectorAll('#dados')[0];
  var resultado = document.querySelectorAll('#resultado')[0];

  console.log(nome.value, idade.value);

  // insere dentro do elemento #dados os valores dos campos do form
  dados.innerHTML = nome.value + ' ' + idade.value;

  // SE O USUARIO puder tirar a habilitação pinte o campo de resultado 
  // com um fundo azul caso contrario com um fundo vermelho

  if (idade.value != '') {
    // se a idade tiver sido preenchida 
    // entao podemos verificar se o usuario pode ou nao pode dirigir
    if (idade.value >= 18) {
      resultado.innerHTML = 'Você pode tirar a habilitação';
      resultado.style.background = 'blue';
    } else {
      resultado.innerHTML = 'Você ainda NÃO PODE tirar a habilitação';
      resultado.style.background = 'red';
    }
  }

}
