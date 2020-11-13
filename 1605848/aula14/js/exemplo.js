// crie uma funcao chamada mudaElemento
function mudaElemento() {
  var quadrado = document.getElementById('quadrado');

  // so vamos add se NAO tiver a class ainda!
  if (quadrado.classList.contains('bolinha')) {
    quadrado.classList.remove('bolinha');
  } else {
    // se o elemento não contiver a classe bolinha, vamos adiciona-la na sua lista de Classes
    quadrado.classList.add('bolinha');
  }
}

// acesse o elemento "botao" e atribua esta funcao no seu onclick
var botao = document.getElementById('botao');
botao.onclick = mudaElemento;

// modifica a sua funcao para que ela ADICIONE a classe "bolinha" no elemento "quadrado"
