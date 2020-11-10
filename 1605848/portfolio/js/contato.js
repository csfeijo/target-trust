function validaForm() {
  var nome = document.getElementById('nome');

  // Substitua a mensagem do alert para ser colocada dentro do SPAN (erro )que voce criou no HTML!
  // Logo apos remova o alert do seu código
  // E prossiga com a validação BÁSICA para os outros elementos (email e mensagem)


  // validar o nome
  if (nome.value == '') {
    alert('Preencha o nome!');
    nome.focus();
    return false;
  }

  // validar o email


  // validar a mensagem



  // se tudo correr bem na validação
  // return true;
  return false; // esta como false de propósito (depois vira true!)

}
