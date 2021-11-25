var corpo = document.body;
corpo.style.background = '#002244';
corpo.style.color = 'white';
corpo.style.fontFamily = 'Arial';

var h1 = document.querySelectorAll('h1')[0];
h1.innerHTML = 'Curso de HTML';
h1.style.border = '2px solid orange';
h1.style.padding = '10px';
h1.style.borderRadius = '10px';
h1.style.width = '300px';

var h2 = document.querySelectorAll('h2')[0];
h2.innerHTML = 'Duração: 40 horas';

var apresentacao = document.querySelectorAll('#apresentacao')[0];
apresentacao.innerHTML = 'Sobre o curso:';

var texto = document.querySelectorAll('.texto')[0];
texto.innerHTML = 'Neste curso você aprenderá sobre as principais tags usadas na linguagem HTML.';

// As linhas acima poderiam ser resumidas conforme abaixo:
// document.querySelectorAll('h2')[0].innerHTML = 'Duração: 40 horas';
// document.querySelectorAll('#apresentacao')[0].apresentacao.innerHTML = 'Sobre o curso:';
// document.querySelectorAll('.texto')[0].innerHTML = 'Neste curso você aprenderá sobre as principais tags usadas na linguagem HTML.';
