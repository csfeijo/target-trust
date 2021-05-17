function controlaMenu() {
  var menu = document.getElementById('menu');

  // manipulando classes no JS fica mais elegante e organizado
  // e a vantagem é que qualquer mudança fazemos diretamente na classe e não no JS!
  if (menu.classList.contains('mostraMenu')) {
    menu.classList.remove('mostraMenu');
  } else {
    menu.classList.add('mostraMenu');
  }

  // Implementação usando JS para manipular propriedades CSS
  // if (menu.style.display == 'block') {
  //   // indica que esta sendo exibido
  //   // logo, vamos esconde-lo!
  //   menu.style.display = 'none';
  // } else {
  //   menu.style.display = 'block';
  // }

}

// linkando a minha variavel burger com o elemento de id=burger do HTML!
var burger = document.getElementById('burger');

// SE NÃO TIVESSEMOS UM ID NO ELEMENTO PODEMOS BUSCA-LO POR QUERYSELECTOR!
// var burger = document.querySelectorAll('header div a')[0];

// Da mesma maneira que podemos ler e alterar QUALQUER atributo de um elemento com JS
// podemos fazer isso com os eventos deste elemento
burger.onclick = controlaMenu;
