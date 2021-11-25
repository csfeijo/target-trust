var imagens = [
  'https://picsum.photos/id/0/200',
  'https://picsum.photos/id/1/200',
  'https://picsum.photos/id/2/200',
  'https://picsum.photos/id/3/200',
  'https://picsum.photos/id/4/200',
  'https://picsum.photos/id/5/200'
];

function trocaImagem() {
  var gal = document.querySelectorAll('#galeria')[0];
  gal.src = imagens[i];
  if (i == imagens.length - 1) {
    i = 0;
  } else {
    i++;
  }
}

var i = 0;
window.setInterval(trocaImagem, 1000);
