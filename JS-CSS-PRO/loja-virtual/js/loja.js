// Conteudo: AJAX
//  Carregar produtos
function carregaProdutos() {
  var httpRequest = new XMLHttpRequest();

  httpRequest.onload = renderizaProdutos;
  // httpRequest.onprogress = carregando;

  httpRequest.open('GET', 'mock/produtos.json', true);
  httpRequest.send(null);
}


function renderizaProdutos() {
  var produtos = JSON.parse(this.responseText);

  var container = document.getElementById('container');

  for (var i = 0; i < produtos.length; i++) {
    container.innerHTML += '<a href="#" class="produto" data-produto-id="' + produtos[i].id + '">' +
      '<img src="' + produtos[i].imagem + '"><br>' +
      produtos[i].nome +
      '</a>';
  }

  adicionaEventoAosProdutos();
}

window.addEventListener('load', carregaProdutos);


function adicionaEventoAosProdutos() {
  var produtos = document.querySelectorAll('.produto');

  for (var i = 0; i < produtos.length; i++) {
    produtos[i].onclick = function () {
      addCart(this.getAttribute('data-produto-id'));
    };
  }
}

function addCart(id) {
  console.log('Adiciona no carrinho...', id);

  var carrinho = window.localStorage.getItem('carrinho');

  if (!carrinho) {
    var pedidos = [];
    pedidos.push(id);
    window.localStorage.setItem('carrinho', JSON.stringify(pedidos));
    console.log(window.localStorage.getItem('carrinho'));
  } else {
    var pedidos = JSON.parse(window.localStorage.getItem('carrinho'));
    pedidos.push(id);
    window.localStorage.setItem('carrinho', JSON.stringify(pedidos));
    console.log(window.localStorage.getItem('carrinho'));
  }

  atualizaContadorCarrinho();
}

function atualizaContadorCarrinho() {
  var carrinho = window.localStorage.getItem('carrinho');
  var total = document.getElementById('total');

  console.log(carrinho);

  if (!carrinho) {
    total.innerHTML = 0;
  } else {
    total.innerHTML = JSON.parse(carrinho).length;
  }
}
atualizaContadorCarrinho();

// Clique no carrinho
function mostraCarrinho(evt) {
  evt.preventDefault();

  var carrinho = window.localStorage.getItem('carrinho');
  var mensagem = document.getElementById('mensagem');

  if (!carrinho) {
    mensagem.innerHTML = 'Carrinho vazio!';
  } else {
    var produtos = JSON.parse(carrinho);
    var listaProdutos = '';

    for (var i = 0; i < produtos.length; i++) {
      listaProdutos += '<p>' + produtos[i] + '</p>';
    }

    mensagem.innerHTML = listaProdutos;
  }

}

var cart = document.getElementById('cart');
cart.onclick = mostraCarrinho;













