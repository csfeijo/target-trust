const http = require('http');

http.createServer((req, res) => {

  // todas as requisicoes sao descritas dentro do url
  console.log(req.url);

  if (req.url === '/favicon.ico') {
    console.log('Solicitou o icone!');
  }

  console.log('Chegou uma requisição!');

  // retorna um cabeçalho para a requisição
  res.writeHead(200, { 'Content-type':'text/html' });

  res.end('<h1>Final</h1>');

}).listen(3033);