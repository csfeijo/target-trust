const http = require('http');
const fs = require('fs');

http.createServer( (req, res) => {
  let arquivo;

  switch(req.url) {
    case '/contato':
      arquivo = 'contato.html';
      break;
    case '/clientes':
      arquivo = 'clientes.html';
      break;
    default:
      arquivo = 'index.html';
      break;
  }

  // lemos o arquivo conforme a rota
  fs.readFile(arquivo, 'utf8', (err, data) => {
    res.writeHead(200, { 'Content-type' : 'text/html' });
    res.end(data);
  });
  

}).listen(3033);