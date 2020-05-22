const http = require('http');


http.createServer( (req, res) => {

  res.end('FUNCIONOU !!! TESTE');


} ).listen(3033);