function validaForm() {
  var nome = document.getElementById('nome');
  var email = document.getElementById('email');
  var mensagem = document.getElementById('mensagem');

  var erro = document.getElementById('erro');

  if (nome.value == '') {
    erro.innerHTML = 'Preencha o campo nome!';

    // é possível tb trocar o CSS quando o campo nao for preenchido!
    // nome.style.border = '2px solid red';
    // focus coloca o cursor do usuario DENTRO do campo desejado
    nome.focus();
    return false;
  }

  if (email.value == '') {
    erro.innerHTML = 'Preencha o campo e-mail!';
    email.focus();
    return false;
  }

  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // if (regex.test(email.value) == false) {
  // o ! significa o NOT (negado) e ele compara o resultado do teste com um "false"
  if (!regex.test(email.value)) {
    erro.innerHTML = 'Informe um e-mail válido!';
    email.focus();
    return false;
  }

  if (mensagem.value == '') {
    erro.innerHTML = 'Preencha o campo mensagem!';
    mensagem.focus();
    return false;
  }

  // o return false IMPEDE que o formulario siga o processo de envio
  // nao esqueçam que é preciso ter "aquele return" la no evento de onsubmit
  // FUTURAMENTE IREMOS TROCAR O false PARA true
  return true;

}
