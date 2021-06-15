var salvar = document.getElementById('salvar');
salvar.onclick = salvarDados;

function salvarDados() {
  var titulo = document.getElementById('titulo').value;

  if (titulo !== '') {
    var tarefa = {
      titulo: titulo
    };

    var lista = window.localStorage.getItem('lista-tarefas');

    if (lista) {
      var tarefas = JSON.parse(lista);
      tarefas.push(tarefa);
    } else {
      var tarefas = [tarefa];
    }
    window.localStorage.setItem('lista-tarefas', JSON.stringify(tarefas));


    document.getElementById('titulo').value = '';

    // mostra notificacao depois de salvar
    mostraNotificacao({
      titulo: titulo,
      body: 'SALVO COM SUCESSO!'
    });
  }
}

function validaNotificacao() {
  if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {

    });
  }
}
validaNotificacao();

function mostraNotificacao(dados) {
  const notification = new Notification(dados.titulo, {
    body: dados.body,
    icon: 'img/ico-tasks.png'
  });
}



function carregaDados() {
  // var tarefas = window.localStorage.getItem('lista-tarefas');
  // if (tarefas) {
  //   titulo = JSON.parse(dados);
  //   document.getElementById('titulo').value = dados.titulo;
  // }
}

carregaDados();
