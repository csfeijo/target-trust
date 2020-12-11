function validaDepartamento() {
  var nome = document.getElementById('nome');
  var sigla = document.getElementById('sigla');
  var erro = document.getElementById('erro');

  if (nome.value == '') {
    erro.innerHTML = 'Preencha o nome!';
    erro.classList.remove('hidden');
    nome.focus();
    return false;
  }

  if (sigla.value == '') {
    erro.innerHTML = 'Preencha a sigla!';
    erro.classList.remove('hidden');
    sigla.focus();
    return false;
  }

  // se chegou até aqui, então pode mandar seguir!
  return true;
}
