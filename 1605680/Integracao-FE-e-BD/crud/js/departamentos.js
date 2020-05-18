function validaDepto() {
  // pode ser qualquer um dos dois metodos para pegar o elemento!
  var nome = document.getElementById('nome');
  // a diferença é que este SEMPRE entrega como VETOR
  var sigla = document.querySelectorAll('#sigla')[0];
  var erro = document.querySelectorAll('.alert')[0];

  if (nome.value == '') {
    erro.innerHTML = 'Preencha o nome!';
    // remove a class hidden do elemento de erro
    erro.classList.remove('hidden');

    nome.focus();
    return false;
  }

  if (sigla.value == '') {
    erro.innerHTML = 'Preencha a sigla!';
    // remove a class hidden do elemento de erro
    erro.classList.remove('hidden');

    sigla.focus();
    return false;
  }

  // agora confirma que PODE enviar os dados!
  return true;
}