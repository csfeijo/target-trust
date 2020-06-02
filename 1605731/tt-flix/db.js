// ObjectID é necessário para o MongoClient passar as prop. completas do documento para o BD
const { MongoClient, ObjectID } = require('mongodb');
const { config } = require('./config');

const url = `${config.db.url}${config.db.name}`;

MongoClient.connect(url, (err, client) => {
  console.log('Conectando com o MongoDB');

  global.db = client.db();
});

const listarFilmes = async () => {
  const collection = global.db.collection('filmes');
  const filmes = await collection.find({}).toArray();

  return filmes;
};

const inserirFilme = async ({ nome, ano }) => {
  const collection = global.db.collection('filmes');
  const { result }  = await collection.insertOne({
    nome: nome,
    ano: ano
  });

  console.log('Inserção', result);
};

const excluirFilme = async ({ _id }) => {
  const collection = global.db.collection('filmes');
  const query = {
    _id: ObjectID(_id)
  };
  const { result } = await collection.deleteOne( query );
  console.log('Exclusão', result);
};

const filmePeloId = async ( { _id } ) => {
  const collection = global.db.collection('filmes');
  const query = {
    _id: ObjectID(_id)
  };
  const filme = await collection.find( query ).toArray();
  return filme;
};

module.exports = {
  listarFilmes,
  inserirFilme,
  excluirFilme,
  filmePeloId,
}