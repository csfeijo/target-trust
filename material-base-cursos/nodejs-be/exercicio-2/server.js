import { createServer } from 'http';
import { readFile } from 'fs';

createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  let file = '';
  switch(req.url) {
    case '/':
      file = 'index.html';
    break;
    case '/contato':
      file = 'contato.html';
    break;
    default:
      file = 'index.html';
    break;
  }

  readFile(file, 'utf8', (err, data) => {
    res.write(data);  
    res.end();
  });

  
}).listen(3033);

