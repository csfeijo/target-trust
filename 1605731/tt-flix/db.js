// ObjectID é necessário para o MongoClient passar as prop. completas do documento para o BD
const { MongoClient, ObjectID } = require('mongodb');
const { config } = require('./config');

const url = `${config.db.url}${config.db.name}`;

MongoClient.connect(url, (err, client) => {
  console.log('Conectando com o MongoDB');

  global.db = client.db();
});

const listarFilmes = async (busca) => {

  let query = {};
  if (busca.nome) {
    //query = { nome : { $regex: `.*${busca.nome}.*` } };
    query = { nome : { $regex: new RegExp(".*" + busca.nome, 'i') } };
  }

  const collection = global.db.collection('filmes');
  const filmes = await collection.find( query ).toArray();

  return filmes;
};

const inserirFilme = async ({ nome, ano }) => {
  const collection = global.db.collection('filmes');
  const { result }  = await collection.insertOne({
    nome: nome,
    ano: parseInt(ano)
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

const atualizarFilme = async ( { _id, nome, ano } ) => {
  const collection = global.db.collection('filmes');
  const busca = { _id: ObjectID(_id) };
  // é o mesmo SET usado em SQL / UPDATE
  const query = { $set: { nome: nome, ano: parseInt(ano) } };
  // update é o alias antigo no mongoDB - que está depreciado - use o updateOne ou many
  const filmes = await collection.updateOne( busca, query ); 
};

// consulta avancada
const consultaAvancada = async () => {
  const collection = global.db.collection('filmes');
  const filmes = await collection.find({
    ano: {
      $not: {
        $eq: 1994
      }
    }
  }).toArray();
  return filmes;
};


module.exports = {
  listarFilmes,
  inserirFilme,
  excluirFilme,
  filmePeloId,
  atualizarFilme,
  consultaAvancada,
}