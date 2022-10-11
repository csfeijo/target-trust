import MockAdapter from 'axios-mock-adapter'
import departamentosMock from '../mocks/departamentosMock.json'

const configureMock = (axios) => {
  const mock = new MockAdapter(axios,  { delayResponse: 500 })

  mock.onGet('/departamentos/').reply(200, departamentosMock)

  mock.onPost('/departamentos/').reply(200, {'success':'Value added'})
  // mock.onPost('/departamentos/').reply(500);

  mock.onGet('/departamentos/8').reply(200, departamentosMock)

  mock.onPatch('/departamentos/8').reply(500)

  mock.onDelete('/departamentos/8').reply(200)

 
}

export default configureMock