const express = require('express');
const bodyParser = require('body-parser');
const pug = require('pug');
const db = require('./db');

const app = express();
app.use( express.static('public') );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));

app.get('/', (req, res) => {
  
  const template = pug.compileFile('./public/html/index.pug');
  const parsedTemplate = template({
    nome: 'Feijó'
  });

  res.send(parsedTemplate);
});


app.get('/filmes', (req, res) => {

  db.listarFilmes().then( (filmes) =>{
    console.log(filmes);
  });

  const filmes =  [
    {
      "nome": "Coringa",
      "ano": "2019"
    },
    {
      "nome": "Arremesso Final",
      "ano": "2019"
    },
    {
      "nome": "1917",
      "ano": "2019"
    },
    {
      "nome": "Superman: O Filme",
      "ano": "1978"
    },
    {
      "nome": "Um Sonho de Liberdade",
      "ano": "1994"
    },
    {
      "nome": "Pulp Fiction",
      "ano": "1994"
    },
    {
      "nome": "Dirty Dancing",
      "ano": "1987"
    },
    {
      "nome": "Alien 3",
      "ano": "1992"
    },
    {
      "nome": "Inception",
      "ano": "2010"
    }
  ];

  const template = pug.compileFile('./public/html/filmes.pug');
  const parsedTemplate = template({
    filmes
  });

  res.send(parsedTemplate);
});

app.get('/filmes-novo', (req, res) => {
  const template = pug.compileFile('./public/html/filmes-novo.pug');
  const parsedTemplate = template();
  res.send(parsedTemplate);
});



app.listen(3033, () => {
  console.log('Servidor funcionando...');
});
