function validaNotificacao() {
  if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {

    });
  }
}

function mostraNotificacao(dados) {
  const notification = new Notification(dados.titulo, {
    body: dados.body,
    icon: 'img/ico-tasks.png'
  });
}

function adicionaTarefa(evt) {

  if (evt.keyCode === 13) {

    var storageDeTarefas = window.localStorage.getItem('lista-de-tarefas');
    var tarefa = document.getElementById('input-tarefa');
    var listaDeTarefas = [];

    if (!storageDeTarefas) {
      listaDeTarefas.push(tarefa.value);
    } else {
      listaDeTarefas = JSON.parse(storageDeTarefas);
      listaDeTarefas.push(tarefa.value);
    }

    mostraNotificacao({
      titulo: 'Tarefa adicionada',
      body: tarefa.value
    });

    window.localStorage.setItem('lista-de-tarefas', JSON.stringify(listaDeTarefas));
    tarefa.value = '';
  }

  listaTodasTarefas();
}


function listaTodasTarefas() {
  var storageDeTarefas = window.localStorage.getItem('lista-de-tarefas');
  var listagemTarefas = document.getElementById('listagem-tarefas');

  if (storageDeTarefas && storageDeTarefas != '[]') {
    var htmlDeTarefas = '';

    listaDeTarefas = JSON.parse(storageDeTarefas);

    for (var i = 0; i < listaDeTarefas.length; i++) {
      htmlDeTarefas += '<div class="item-tarefa">';
      htmlDeTarefas += '<div>' + listaDeTarefas[i] + '</div><div class="close" data-index="' + i + '">X</div>';
      htmlDeTarefas += '</div>';
    }

    listagemTarefas.innerHTML = htmlDeTarefas;
  } else {
    listagemTarefas.innerHTML = '<div class="lista-vazia">Sua lista esta vazia!</div>';
  }

  var close = document.querySelectorAll('.close');
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = excluirTarefa;
  }
}

function excluirTarefa() {
  var index = this.getAttribute('data-index');
  var storageDeTarefas = window.localStorage.getItem('lista-de-tarefas');
  listaDeTarefas = JSON.parse(storageDeTarefas);

  listaDeTarefas.splice(index, 1);
  window.localStorage.setItem('lista-de-tarefas', JSON.stringify(listaDeTarefas));

  mostraNotificacao({
    titulo: 'Tarefa Excluída',
    body: listaDeTarefas[index]
  });

  listaTodasTarefas();
}

validaNotificacao();
listaTodasTarefas();


var inputTarefa = document.getElementById('input-tarefa');
inputTarefa.onkeypress = adicionaTarefa;
