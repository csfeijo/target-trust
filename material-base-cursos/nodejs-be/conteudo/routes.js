import http from 'http';

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  switch(req.url) {
    case '/':
      res.write('Bem vindo a home!');
    break;
    case '/contato':
      res.write('Contato');
    break;
    default:
      res.write('Bem vindo a home!');
    break;
  }

  res.end();
}).listen(3033);

