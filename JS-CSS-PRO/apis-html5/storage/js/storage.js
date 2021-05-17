function salvar() {
  var produtos = [
    {
      "nome": "TV",
      "preco": 5299.66
    },
    {
      "nome": "Celular",
      "preco": 1000.00
    },
    {
      "nome": "Video Game",
      "preco": 5556.66
    }
  ];

  window.sessionStorage.setItem('produtos', JSON.stringify(produtos));
}


function recuperar() {
  var conteudo = document.getElementById('conteudo');
  conteudo.innerHTML = window.sessionStorage.getItem('produtos');
}

function remover() {
  window.sessionStorage.removeItem('produtos');
}


var armazena = document.getElementById('armazena');
var recupera = document.getElementById('recupera');
var remove = document.getElementById('remove');

armazena.onclick = salvar;
recupera.onclick = recuperar;
remove.onclick = remover;
