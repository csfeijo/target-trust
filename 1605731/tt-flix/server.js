const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const pug = require('pug');
const db = require('./db');
const swaggerJSDoc = require('swagger-jsdoc');

const app = express();

const options = {
  definition: {
    info: {
      title: 'Target Trust Flix',
      version: '1.0.0'
    }
  },
  apis: ['server.js']
};
const swaggerSpec = swaggerJSDoc(options);

app.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

const swaggerUI = require('swagger-ui-express');
app.use('/swagger-ui', swaggerUI.serve, swaggerUI.setup(swaggerSpec));



app.use(session({ secret: 'segredo', saveUninitialized: true, resave: true }));

app.use( express.static('public') );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));

// Criando o MEU middleware
app.use( (req, res, next) => {
  //console.log('>>>>>>>>>>>>> Esta sendo chamado no inicio da rota! <<<<<<<<<<<<<');

  next();
});



// VALIDACAO DE SESSAO DO LOGIN
app.get('/login', (req, res) => {
  const template = pug.compileFile('./public/html/login.pug');
  const parsedTemplate = template();

  res.send(parsedTemplate);
});

/**
 * @swagger
 *
 * /autentica:
 *   post:
 *     description: Login da aplicação
 *     produces:
 *       - text/html
 *     parameters:
 *       - name: usuario
 *         description: usuário para login
 *         in: formData
 *         required: true
 *         type: string
 *       - name: senha
 *         description: Senha do usuário.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: redireciona para filmes
 */
app.post('/autentica', (req, res) => {
  if (req.body.usuario === 'admin' && req.body.senha === 'abc') {
    console.log('Usuario se logou!');
    // gerar a chave de sessao
    sess = req.session;
    sess.usuario = req.body.usuario;

    res.redirect('/');
  } else {
    console.error('Usuario ou senha invalidos');
    res.redirect('/login');
  }
});

const validaSessao = (req, res) => {
  sess = req.session;

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
/**
 * @swagger
 *
 * /filmes:
 *   get:
 *     description: Listagem de filmes
 *     produces:
 *       - text/html
 *     responses:
 *       200:
 *         description: filmes
 */
app.route('/filmes')
  // caso seja um GET
  .get( (req, res, next) => {
    if(validaSessao(req, res)) {
      next();
    }
  }
  ,(req, res) => {
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
  .post((req, res, next) => {
    if(validaSessao(req, res)) {
      next();
    }
  }
  , (req, res) => {
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
app.get('/filmes-novo', (req, res, next) => {
  if(validaSessao(req, res)) {
    next();
  }
}
,(req, res) => {
  const template = pug.compileFile('./public/html/filmes-novo.pug');
  const parsedTemplate = template();
  res.send(parsedTemplate);
});

// Exclusão do filme
app.post('/filmes-excluir', (req, res, next) => {
  if(validaSessao(req, res)) {
    next();
  }
}
,(req, res) => {
  const _id = req.body._id;

  db.excluirFilme( { _id } ).then( () => {
    res.redirect('/filmes');
  }); 
});

// Edição de filmes
app.get('/filmes-editar', (req, res, next) => {
  if(validaSessao(req, res)) {
    next();
  }
}
,(req, res) => {
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
app.post('/filmes-atualizar', (req, res, next) => {
  if(validaSessao(req, res)) {
    next();
  }
}
,(req, res) => {
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
  const { nome } = req.query;

  res.status(200);
  res.send(`Bem vindo a rota de teste ${nome}`);

});

app.listen(3033, () => {
  console.log('Servidor funcionando...');
});

// preciso disponibilizar a app para o chai
module.exports = app;
