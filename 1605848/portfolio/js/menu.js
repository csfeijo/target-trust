function controlaMenu() {
  var menu = document.getElementById('menu');

  if (menu.classList.contains('mostraMenu')) {
    menu.classList.remove('mostraMenu');
  } else {
    menu.classList.add('mostraMenu');
  }



}


var burger = document.getElementById('burger');
burger.onclick = controlaMenu;


