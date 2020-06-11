const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

// Para uso em BDD 
chai.should();

describe('Bloco A', () => {
  it('deve ser uma string', () => {
    const escola = 'TargetTrust';

    escola.should.be.a('string');

    expect(escola).to.be.a('string');

    assert.typeOf(escola, 'string');
  });
});
