const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const assert = chai.assert;

const server = require('../server');

chai.use(chaiHttp);
// Para uso em BDD 
chai.should();

context('Contexto A', () => {
  before(()=>{
    console.log('>>>>>>> executou antes da suite de testes...');
  });
  after(() => {
    console.log('>>>>>>> executou após o fim da suite de testes...');
  });
  describe('Requests HTTP', () => {
    it('GET /teste', () => {
      return chai.request(server)
                .get('/teste')
                .query({ nome: 'Feijó'})
                //.send({ nome: 'Feijó'}) // enviar por POST 
                .then((res) => {
                  expect(res).to.have.status(200);
                  expect(res.text).to.have.string('Feijó');
                });
    });
  });
});

