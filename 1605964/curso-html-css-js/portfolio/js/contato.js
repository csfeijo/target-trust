// Acesse cada campo do formulario de contato e caso o campo esteja vazio informe
// no elemento de erro que o usuario deve preencher o campo corretamente!
function validaForm() {
  var nome = document.querySelectorAll('#nome')[0];
  var email = document.querySelectorAll('#email')[0];
  var msg = document.querySelectorAll('#mensagem')[0];
  var erro = document.querySelectorAll('#erro')[0];

  // removemos as classes de erro antes de começar a validar,
  // assim garantimos que o formulario vai estar limpo a cada chamada da função
  nome.classList.remove('errado');
  email.classList.remove('errado');
  msg.classList.remove('errado');


  if (nome.value == '') {
    // alert('preencha o nome');
    erro.innerHTML = 'Preencha o nome!';
    // FOCUS: coloca o elemento em foco, posicionando o cursor do usuário dentro do componente
    nome.focus();

    // vamos adicionar um class do CSS no elemento com erro
    nome.classList.add('errado');

    // o "statement/instrucao" return interrompe a execução da funcao devolvendo para quem a chamou algum valor
    return false;
  }

  if (email.value == '') {
    erro.innerHTML = 'Preencha o e-mail!';
    email.focus();
    email.classList.add('errado');
    return false;
  }

  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // if (!regex.test(email.value) == false) {
  if (!regex.test(email.value)) {
    erro.innerHTML = 'E-mail inválido!';
    email.focus();
    email.classList.add('errado');
    return false;
  }


  if (msg.value == '') {
    erro.innerHTML = 'Preencha a mensagem!';
    msg.focus();
    msg.classList.add('errado');
    return false;
  }

  erro.innerHTML = '';

  // agora só falta submeter o formulario - para isso chamamos o evento "submit()" do nosso form
  document.querySelectorAll('#formulario')[0].submit();


}
