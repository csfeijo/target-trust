var estiloCorpo = document.body.style;

estiloCorpo.background = 'red';
estiloCorpo.color = 'white';
estiloCorpo.fontFamily = 'Arial';

// acessando outros elementos do HTML
var titulo = document.querySelectorAll('h1')[0];
titulo.style.color = 'purple';
titulo.innerHTML = 'Aula 13 em JS';

// acessando o elemento pelo ID
var descricao = document.querySelectorAll('#descricao')[0];
descricao.style.border = '2px dotted white';

// acessando o elemento pelo CLASS
var idade = 39;

if (idade > 18) {
  var blocos = document.querySelectorAll('.bloco');

  for (var i = 0; i < blocos.length; i++) {
    blocos[i].innerHTML = i;
    blocos[i].style.border = '1px solid white';
    blocos[i].style.height = '20px';
    blocos[i].style.width = '20px';
    blocos[i].style.borderRadius = '60px';
    blocos[i].style.textAlign = 'center';
  }
}

// criação de tags
var elem = document.createElement('div');
elem.innerHTML = 'Criado pelo JS';
elem.style.color = 'blue';

document.body.appendChild(elem);








