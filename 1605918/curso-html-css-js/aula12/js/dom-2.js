// usando JS pinte o background do body de verde


// sub algoritmo - funcao (precisa ser chamado para ser executado)
function trocaFundo() {
  document.body.style.background = 'green';
}

function trocaFundoBranco() {
  document.body.style.background = 'white';
}

// envolvam as instrucoes abaixo em uma funcao chamada mostra
// e executem ela somente ao clicar no botao que criamos no HTML

function mostra() {
  var titulo = document.getElementById('titulo');
  titulo.style.border = '3px solid red';
  titulo.style.height = '40px';
  titulo.innerHTML = 'Texto em JS';
}
