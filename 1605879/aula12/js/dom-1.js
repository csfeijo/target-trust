// DOM: document object model

var estiloCorpo = document.body.style;
var fonte = 'Trebuchet MS';

estiloCorpo.background = '#0096D6';
estiloCorpo.color = 'white';
estiloCorpo.fontFamily = fonte;

// se quisesse acessar a nossa tag H1 pelo seu ID
var titulo = document.getElementById('titulo');
titulo.style.color = 'red';
titulo.innerHTML = '<div>Boa <br> noite</div>';

// document.getElementsByTagName
// document.getElementsByClassName

// document.querySelectorAll
var paragrafos = document.querySelectorAll('p');

// paragrafos[0].style.border = '3px solid yellow';
// paragrafos[1].style.border = '3px solid yellow';
// paragrafos[2].style.border = '3px solid yellow';

for (var i = 0; i < paragrafos.length; i++) {
  paragrafos[i].style.border = '3px dashed yellow';
}







