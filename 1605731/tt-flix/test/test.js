const assert = require('assert');

context('Contexto Principal', () => {
  describe('Array', () => {
    // xit : deixa o teste PENDENTE!
    xit('deve retornar -1 quando o valor nao for encontrado', () => {
      const vetor = [1, 2, 3, 4];
      const valor = 5;
      const index = vetor.indexOf(valor);

      assert.equal(index, -1);
    });
    // only: força a execução de apenas este TESTE
    // it.only('valor deve ser par', () => {
    it('valor deve ser par', () => {
      const valor = 24;
      const par = valor % 2 === 0;

      assert.equal(par, true);
    });
  });
});
