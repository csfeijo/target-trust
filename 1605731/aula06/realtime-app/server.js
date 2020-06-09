const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// IMPLEMENTAÇÃO DO SERVER DO CHAT
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
  console.log('>>> Alguem conectou no chat!');

  // adicionamos os eventos de escuta / listeners
  socket.on('mensagem_para_servidor', data => {
    console.log('>>> Chegou mensagem para o servidor', data);


    const { nome, mensagem } = data;
    const template = pug.compileFile('./public/html/conversa.pug');
    const parsedTemplate = template({
      nome,
      mensagem
    });

    // envia a mensagem novamente para quem a mandou (pois é um chat)
    socket.emit('responde_mensagem_usuario', parsedTemplate);
    
    // envia a mensagem para TODOS do Chat - exceto pra quem mandou
    socket.broadcast.emit('responde_mensagem_usuario', parsedTemplate);

  });
});


// ROTAS PADROES DO PROJETO

app.get('/', (req, res) => {
  res.send('BEM VINDO');
});

app.get('/chat', (req, res) => {
  console.log('Cliente chamou /chat!');

  const template = pug.compileFile('./public/html/chat.pug');
  const parsedTemplate = template();

  res.send(parsedTemplate);  
});

server.listen(3033);

