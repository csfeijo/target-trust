const http = require('http');
// sempre colocar o path relativo ao arquivo do servidor './'
const dt = require('./dataHora');
const dados = require('./meusDados');

http.createServer((req, res) => {

  const conteudo = `${dt.dataAtual()} \n ${dados.meuNome()}`;

  res.end(conteudo);

}).listen(3033);