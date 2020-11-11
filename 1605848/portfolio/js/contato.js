function validaForm() {
  var nome = document.getElementById('nome');
  var email = document.getElementById('email');
  var mensagem = document.getElementById('mensagem');
  var erro = document.getElementById('erro');

  // Definitions over this doc: https://emailregex.com/
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Substitua a mensagem do alert para ser colocada dentro do SPAN (erro )que voce criou no HTML!
  // Logo apos remova o alert do seu código
  // E prossiga com a validação BÁSICA para os outros elementos (email e mensagem)

  // validar o nome
  if (nome.value == '') {
    erro.innerHTML = 'Preencha o nome';
    nome.focus();
    return false;
  }

  // validar o email
  if (email.value == '') {
    erro.innerHTML = 'Preencha o e-mail';
    email.focus();
    return false;
  }
  if (!regex.test(email.value)) {
    erro.innerHTML = 'E-mail inválido';
    email.focus();
    return false;
  }


  // validar a mensagem
  if (mensagem.value == '') {
    erro.innerHTML = 'Preencha a mensagem';
    mensagem.focus();
    return false;
  }

  // se tudo correr bem na validação
  // return true;
  return true; // esta como false de propósito (depois vira true!)

}
