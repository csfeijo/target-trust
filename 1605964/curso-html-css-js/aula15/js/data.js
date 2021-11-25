function queHoras() {
  // Instancia um objeto de data
  var data = new Date();

  var hora = data.getHours();
  var min = data.getMinutes();
  var seg = data.getSeconds();

  // adiciona o ZERO no incio quando o valor é menor que 10
  // if (seg < 10) {
  //   seg = '0' + seg;
  // }
  // condicional ternária
  // var = expressao ? verdadeiro : falso
  hora = hora < 10 ? '0' + hora : hora;
  min = min < 10 ? '0' + min : min;
  seg = seg < 10 ? '0' + seg : seg;


  var dia = data.getDate();
  // getMonth trata os meses como um vetor, logo Janeiro é o mês 0
  var mes = data.getMonth();
  var ano = data.getFullYear();

  dia = dia < 10 ? '0' + dia : dia;
  mes = mes + 1 < 10 ? '0' + mes : mes;

  var mesesExtenso = [
    'Jan', 'Fev', 'Mar',
    'Abr', 'Mai', 'Jun',
    'Jul', 'Ago', 'Set',
    'Out', 'Nov'
  ];

  var campoHora = document.querySelectorAll('#hora')[0];
  var campoData = document.querySelectorAll('#data')[0];

  campoHora.innerHTML = `${hora}:${min}:${seg}`;
  campoData.innerHTML = `${dia}/${mes + 1}/${ano}`;
  // campoData.innerHTML = `${dia} de ${mesesExtenso[mes]} de ${ano}`;
}

setInterval(queHoras, 500);














