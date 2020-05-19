const http = require('http');

http.createServer((req, res) => {

  console.log('Chegou uma requisição!');

  // retorna um cabeçalho para a requisição
  res.writeHead(200, { 'Content-type':'text/html' });

  res.end('<h1>Final</h1>');

}).listen(3033);