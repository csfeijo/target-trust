// https://60b81fdeb54b0a0017c031db.mockapi.io/api/v1/produtos

function carregaInformacao() {
  var httpRequest = new XMLHttpRequest();

  httpRequest.onload = recebeDados;
  httpRequest.onprogress = carregando;
  httpRequest.onerror = carregando;
  httpRequest.onabort = carregando;

  httpRequest.open('GET', 'https://60b81fdeb54b0a0017c031db.mockapi.io/api/v1/produtos', true);
  httpRequest.send(null);
}

function recebeDados() {
  var conteudo = document.getElementById('conteudo');

  var resposta = this.responseText;
  resposta = JSON.parse(resposta);

  // percorre o array
  var respostaHTML = '';
  for (var i = 0; i < resposta.length; i++) {
    respostaHTML += '<p>' + resposta[i].nome + ' - R$: ' + resposta[i].preco + '</p>';
  }

  conteudo.innerHTML = respostaHTML;
}

function carregando() {
  var conteudo = document.getElementById('conteudo');
  conteudo.innerHTML = 'Carregando...';
}

var btn = document.getElementById('btn');
btn.onclick = carregaInformacao;

// ADICAO do Produto
var btnAdd = document.getElementById('btn-add-produto');
btnAdd.onclick = addProduto;

function addProduto() {
  var produto = document.getElementById('produto').value;
  var preco = document.getElementById('preco').value;

  var httpRequest = new XMLHttpRequest();
  var dados = 'nome=' + produto + '&preco=' + preco;

  if (produto !== '' && preco !== '') {
    httpRequest.open('POST', 'https://60b81fdeb54b0a0017c031db.mockapi.io/api/v1/produtos', true);
    httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpRequest.send(dados);
  }





}











