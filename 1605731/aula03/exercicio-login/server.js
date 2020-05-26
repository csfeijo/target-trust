const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use( express.static('public') );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));

app.get('/login', (req, res) => {

  fs.readFile('./public/html/login.html', 'utf8', (err, data) =>{
    res.send(data);
  });
 
});

app.post('/autentica', (req, res) => {

  console.log(req.body);

  const usuario = req.body.usuario;
  const senha = req.body.senha;

  if (usuario === 'admin' && senha === 'abc') {
    res.send('autorizado');
  } else {
    res.send('negado!');
  }
  
});



app.listen(3033, () => {
  console.log('Servidor funcionando...');
});