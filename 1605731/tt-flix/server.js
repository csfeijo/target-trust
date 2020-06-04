const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const pug = require('pug');
const db = require('./db');

const app = express();

app.use(session({ secret: 'segredo', saveUninitialized: true, resave: true }));

app.use( express.static('public') );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));

// VALIDACAO DE SESSAO DO LOGIN
app.get('/login', (req, res) => {
  const template = pug.compileFile('./public/html/login.pug');
  const parsedTemplate = template();

  res.send(parsedTemplate);
});

app.post('/autentica', (req, res) => {
  if (req.body.usuario === 'admin' && req.body.senha === 'abc') {
    // gerar a chave de sessao
    sess = req.session;
    sess.usuario = req.body.usuario;

    res.redirect('/');
  } else {
    res.redirect('/login');
  }
});

const validaSessao = (req, res) => {
  sess = req.session;
  console.log('>> LOGADO COMO', sess.usuario);

  // se logado entao prossegue
  if (sess.usuario) {
    return true;
  } else {
    res.redirect('/login');
    return false;
  }
};
// ==============================================
app.get('/', (req, res, next) =>{
  // se tiver logado prossegue para a rota
  if(validaSessao(req, res)) {
    next();
  }
},
(req, res) => {
  
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
    // verifica se veio algo na busca
    const busca = req.query;

    db.listarFilmes( busca ).then( (filmes) =>{
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

// Receber a atualização do filme
app.post('/filmes-atualizar', (req, res) => {
  const filme = {
    _id: req.body._id,
    nome: req.body.nome,
    ano: req.body.ano,
  };

  // vamos chamar o metodo de atualização da base de dados
  db.atualizarFilme( filme ).then( () => {
    res.redirect('/filmes');
  });
});

// rota de teste
app.get('/teste', (req, res) => {
  db.consultaAvancada().then((filmes) => {
    res.send(filmes);
  })
});

app.listen(3033, () => {
  console.log('Servidor funcionando...');
});
