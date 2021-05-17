function mostrar() {
  // precisamos pegar TODAS as div´s da página
  var divs = document.querySelectorAll('div');

  for (var i = 0; i < divs.length; i++) {
    divs[i].style.border = '1px solid red';
    divs[i].style.width = '100px';
    divs[i].style.height = '60px';
    // innerHTML suporta tags HTML dentro do texto
    // existem tambem o innerText / textContent que "removem/sanitizam" o texto removendo tags HTML
    divs[i].innerHTML = 'FUNCIONOU';


    // se quiser centralizar o texto
    divs[i].style.textAlign = 'center';
    divs[i].style.paddingTop = '40px';
  }
}
