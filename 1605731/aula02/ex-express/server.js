const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  
  console.log(req.body);

  fs.readFile('./public/html/index.html', 'utf8', (err, data) => {
    res.send(data);
  });

});

app.get('/contato', (req, res) => {
  res.send('Contato');
});

// Exemplo de middleware na rota
app.all('/secreta', (req, res, next) => {
  console.log('Executou a primeira fn');
  next();
}, (req, res, next) => {
  console.log('Executou a segunda fn');
  res.send('Chegou na rota secreta!');
});

// parametros de rotas
// /?usuarioId=25&livrosId=33
app.get('/usuarios/:usuarioId/livros/:livroId', (req, res) => {

  const params = req.params;
  const usuarioId = params.usuarioId;

  res.send(`usuario: ${usuarioId}`);
});

app.route('/livros')
  .get((req, res) => res.send('Lista os livros'))
  .post((req, res) => res.send('Insere um livro'))
  .put((req, res) => res.send('Atualiza um livro'))
  .delete((req, res) => res.send('Remove um livro'));



app.listen(3033, () => {
  console.log('Servidor rodando na porta 3033');
});