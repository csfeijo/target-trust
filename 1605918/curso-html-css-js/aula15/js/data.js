function reloginho() {

  var data = new Date();
  var hora = data.getHours();
  var min = data.getMinutes();
  var seg = data.getSeconds();

  // BUG das duas casas
  // precisamos verificar se os segundos são menores que 10
  // e caso positivo adicionarmos um "0" na frente
  if (hora < 10) {
    hora = '0' + hora;
  }

  if (min < 10) {
    min = '0' + min;
  }

  if (seg < 10) {
    seg = '0' + seg;
  }


  // concatenação - junção das variaveis mais os ":"
  var horaCompleta = hora + ':' + min + ':' + seg;


  // adicionem uma DIV no HTML para receber essas informacoes via JS
  // 19:25:25
  var relogio = document.getElementById('relogio');
  relogio.innerHTML = horaCompleta;

}
// Temporizadores
// setTimeout : executa uma funcao depois de determinado tempo
// executa apenas UMA vez
// devemos passar APENAS o nome da funcao (sem os parenteses)
// devemos passar o tempo em ms (milisegundos => 3s = 3000)
// setTimeout(reloginho, 3000);

// setInterval : executa uma funcao repetidamente por determinado tempo
// da mesma forma que o setTimeout passamos o NOME da FN e o tempo em MS
setInterval(reloginho, 1000);







