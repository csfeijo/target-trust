/* SOLUÇÃO DO RESPONSIVO */
function mostraMenu() {
  var menu = document.getElementById('menu');

  if (menu.style.display == 'block') {
    menu.style.display = 'none';
    menu.classList.remove('responsivo');
  } else {
    menu.style.display = 'block';
    menu.classList.add('responsivo');
  }

}
