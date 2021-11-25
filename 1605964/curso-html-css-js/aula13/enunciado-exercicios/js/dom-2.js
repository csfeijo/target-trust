
document.body.style.background = '#002244';
document.body.style.color = 'white';
document.body.style.fontFamily = 'Arial';

var h1 = document.querySelectorAll('h1')[0];
h1.innerHTML = 'Curso de HTML';
h1.style.border = '2px solid orange';
h1.style.width = '400px';
h1.style.padding = '10px';
h1.style.borderRadius = '10px';

var h2 = document.querySelectorAll('h2')[0];
h2.innerHTML = 'Duração: 40 horas';

var ap = document.querySelectorAll('#apresentacao')[0];
ap.innerHTML = 'Sobre o curso:';

var txt = document.querySelectorAll('.texto')[0];
txt.innerHTML = 'Neste curso você aprenderá sobre as principais TAGS usadas na linguagem HTML.';
