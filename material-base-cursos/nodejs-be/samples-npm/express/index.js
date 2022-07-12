import express from 'express';
import { readFile } from 'fs';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  readFile('index.html', 'utf8', (err, data) => {
    res.send(data)
  });
});

app.get('/contato', (req, res) => {
  readFile('contato.html', 'utf8', (err, data) => {
    res.send(data)
  });
});

app.get('/usuarios/:id', (req, res) => {
  res.send(req.params);
});



app.listen(3033, () => {
  console.log('Servidor rodando na porta 3033 ...');
});
