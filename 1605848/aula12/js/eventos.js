function teste() {
  console.log('Executou a teste()');
}


function mudaDiv() {
  console.log('Mudou...');

  // Normalmente atribuimos o elemento em uma variavel para poder aproveita-lo dentro da mesma função
  var retangulo = document.getElementById('retangulo');
  retangulo.innerHTML = 'Mudei o conteúdo!';
}

// Altere a funcao abaixo para que os elementos que estiverem na posicao IMPAR do vetor
// recebam também um background verde!

function alteraSecao() {
  console.log('Altera...');

  // SEMPRE vai entregar um VETOR!
  var secoes = document.getElementsByTagName('section');
  var cont = 0;

  while (cont < secoes.length) {
    // Coloca uma borda arredondada EM TODOS os elementos que encontrar!
    secoes[cont].style.borderRadius = '50%';

    // Podemos verificar se o elemento está numa posicao impar e dai sim pinta-lo de verde
    if (cont % 2 == 1) {
      secoes[cont].style.background = 'green';
    } else {
      secoes[cont].style.background = 'cyan';
    }

    // NÃO ESQUEÇA DE INCREMENTAR O CONT!
    cont++;
  }
}

function mostraCaixa() {
  var caixas = document.getElementsByClassName('caixa');

  for (var cont = 0; cont < caixas.length; cont++) {
    caixas[cont].style.display = 'inline-block';
  }
}

function alteraTudo() {
  // sempre sintaxe de seletores CSS dentro do parenteses
  var retangulo = document.querySelectorAll('#retangulo')[0];
  retangulo.innerHTML = '<h3 class="destaque">Mudei novamente...</h3>';

  var secoes = document.querySelectorAll('section');
  for (var cont = 0; cont < secoes.length; cont++) {
    secoes[cont].innerHTML = 'S ' + cont;
  }

  // e na variavel caixas MOSTRE os elementos e pinte o background deles de amarelo
  var caixas = document.querySelectorAll('.caixa');
  for (var i = 0; i < caixas.length; i++) {
    var estilo = caixas[i].style;

    estilo.display = 'inline-block';
    estilo.background = '#009999';
  }
}
