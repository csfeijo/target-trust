const chai = require('chai');
const chaiHttp = require('chai-http');
const nock = require('nock');
const expect = chai.expect;
const assert = chai.assert;

const server = require('../server');

chai.use(chaiHttp);
// Para uso em BDD 
chai.should();

context.only('Tela de Filmes', () => {
  beforeEach(() => {
    nock.cleanAll();
  });

  afterEach(() => {
    nock.cleanAll();
  });

  describe('Filmes', () => {
    const agent = chai.request.agent('http://localhost:3033');

    it('Listar Filmes', ()=> {
      // simulacao da resposta (interceptor)
      nock('http://localhost:3033')
        .get('/teste')
        .reply(200, {
          nome: 'Feijó'
        });
      
      agent
        .get('/teste')
        .then((res) => {
          console.log(res.text);
        });
    });
  });
});