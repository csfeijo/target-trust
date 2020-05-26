const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/aula';

MongoClient.connect(url, (err, client) => {
  console.log('Conectando com o MongoDB');

  global.db = client.db();
});

const listarFilmes = async () => {
  const collection = global.db.collection('filmes');
  const filmes = await collection.find({}).toArray();

  return filmes;
};

module.exports = {
  listarFilmes,
}