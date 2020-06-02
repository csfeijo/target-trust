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


// inicio do mapeamento de rotas dos filmes
app.route('/filmes')
  // caso seja um GET
  .get( (req, res) => {
    db.listarFilmes().then( (filmes) =>{
      console.log(filmes);

      const template = pug.compileFile('./public/html/filmes.pug');
      const parsedTemplate = template({
        filmes
      });
    
      res.send(parsedTemplate);
    });
  })
  // caso seja um POST
  .post( (req, res) => {
    const filme = {
      nome : req.body.nome,
      ano: req.body.ano
    };

    // vamos chamar o metodo do bd
    db.inserirFilme( filme ).then( () => {
      res.redirect('/filmes');
    });
  });

// Renderiza a tela de inserção  
app.get('/filmes-novo', (req, res) => {
  const template = pug.compileFile('./public/html/filmes-novo.pug');
  const parsedTemplate = template();
  res.send(parsedTemplate);
});

// Exclusão do filme
app.post('/filmes-excluir', (req, res) => {
  const _id = req.body._id;

  db.excluirFilme( { _id } ).then( () => {
    res.redirect('/filmes');
  }); 
});

// Edição de filmes
app.get('/filmes-editar', (req, res) => {
  // pega o _id da querySTRING (URL do browser)
  const { _id } = req.query;

  db.filmePeloId( { _id } ).then( (filme) =>{
    const template = pug.compileFile('./public/html/filmes-editar.pug');
    const parsedTemplate = template({
      filme: filme[0]
    });
    res.send(parsedTemplate);
  });
});





app.listen(3033, () => {
  console.log('Servidor funcionando...');
});
