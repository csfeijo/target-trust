function carregaInformacao() {
  var httpRequest = new XMLHttpRequest();

  httpRequest.onload = recebeDados;
  httpRequest.onprogress = carregando;
  httpRequest.onerror = carregando;
  httpRequest.onabort = carregando;

  httpRequest.open('GET', 'mock/produtos.json', true);
  httpRequest.send(null);
}

function converteObjeto() {
  var dados = {
    nome: "Cícero Feijó",
    profissao: "Professor"
  };

  var dadosString = JSON.stringify(dados);

  console.log(dadosString);
}

// function recebeDados() {
//   var conteudo = document.getElementById('conteudo');
//   console.log('>>>', this.getResponseHeader('content-type'));

//   var resposta = this.responseText;
//   resposta = JSON.parse(resposta);

//   // percorre o array
//   var respostaHTML = '';
//   for (var i = 0; i < resposta.length; i++) {
//     respostaHTML += '<p>' + resposta[i].nome + '</p>';
//   }

//   conteudo.innerHTML = respostaHTML;
// }

function carregando() {
  var conteudo = document.getElementById('conteudo');
  conteudo.innerHTML = 'Carregando...';
}

var btn = document.getElementById('btn');
btn.onclick = carregaInformacao;

