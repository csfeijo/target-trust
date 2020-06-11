const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const assert = chai.assert;

const server = require('../server');

chai.use(chaiHttp);
// Para uso em BDD 
chai.should();

context('Tela de Login', () => {
  describe('Acessar a Rota de Login', () => {
    it('GET /login', () => {
      return chai.request(server)
        .get('/login')
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.have.string('LOGIN');
        });
    });
  });

  describe('Com o usuario logado', () => {
    // armazena a "navegação" dentro do agent
    const agent = chai.request.agent(server);
    before((done)=>{
      agent
        .post('/autentica')
        .send({ usuario: 'admin', senha: 'abc' })
        .then((res) => {
          // verificar se o cookie foi setado com sucesso
          expect(res.request.cookies).to.have.string('connect.sid');
          done();
        });
    })

    it('GET /filmes', () => {
      agent
        .get('/filmes')
        .then((res) => {
          expect(res.text).to.not.have.string('Login');
        });
    })

    it('GET /filmes-novo', () => {
      agent
        .get('/filmes-novo')
        .then((res) => {
          expect(res.text).to.have.string('Adicionar filme');
        });
    })
  });
});