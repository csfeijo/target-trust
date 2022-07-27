import http from 'http';
import currentDate from './currentDate.js';

http.createServer((req, res) => {
  res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})

  const content = `<h1>Bem vindo!</h1> ${currentDate()}`

  res.end(content)
}).listen(3033)