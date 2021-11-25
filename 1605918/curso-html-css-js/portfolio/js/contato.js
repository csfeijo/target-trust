function validaForm() {
  var nome = document.getElementById('nome');
  var email = document.getElementById('email');
  var mensagem = document.getElementById('mensagem');
  var erro = document.getElementById('erro');

  // sempre ao começar a validacao nós limpamos o campo de erro
  erro.innerHTML = '';
  nome.classList.remove('campoErro');
  email.classList.remove('campoErro');
  mensagem.classList.remove('campoErro');


  if (nome.value == '') {
    erro.innerHTML = 'Preencha o nome!';
    nome.classList.add('campoErro');
    nome.focus();

    return false;
  }

  if (email.value == '') {
    erro.innerHTML = 'Preencha o e-mail!';
    email.classList.add('campoErro');
    email.focus();

    return false;
  }

  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //if (regex.test(email.value) == false) {
  // podemos ao inves de comparar com o FALSE - NEGAR o teste (forma elegante)
  if (!regex.test(email.value)) {
    erro.innerHTML = 'E-mail inválido!';
    email.classList.add('campoErro');
    email.focus();

    return false;
  }


  if (mensagem.value == '') {
    erro.innerHTML = 'Preencha a mensagem!';
    mensagem.classList.add('campoErro');
    mensagem.focus();

    return false;
  }




  // o retorno como FALSE impede que o formulario seja enviado!
  return false;

  // futuramente, no final da implementação, SE TUDO ocorrer bem na validação
  // a resposta final desta funcao deverá ser um "return true"
}
