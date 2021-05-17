function mostraDiv(secao) {

  var divs = document.querySelectorAll('div');

  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = 'none';
  }

  document.getElementById(secao).style.display = 'block';
}
