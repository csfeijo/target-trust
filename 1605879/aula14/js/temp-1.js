function mostraData() {
  var data = new Date();
  var dia = data.getDate(); // dia numerico
  var hora = data.getHours();
  var minutos = data.getMinutes();
  var segundos = data.getSeconds();

  var relogio = document.getElementById('relogio');
  relogio.innerHTML = hora + ':' + minutos + ':' + segundos;
}

// window.setTimeout(mostraData, 2000);
window.setInterval(mostraData, 1000);
