import api from './api';

const headers = {
  'Authorization': 'Bearer PROCEMPA' 
}

export const getDepartamentos = async () => {
  // COLOCAR A BARRA SEMPRE!
  const resp = await api.get('/departamentos/', { headers });
  return resp.data;
}

export const getDepartamento = async ({ idDepartamento }) => {
  const resp = await api.get(`/departamentos/${idDepartamento}`, { headers });
  return resp.data;
}

export const insertDepartamento = async (data) => {
  const { nome, sigla } = data;
  const body = new FormData();
  body.append('nome', nome);
  body.append('sigla', sigla);

  const resp = await api.post('/departamentos/', body, { headers: {
    'Authorization': 'Bearer PROCEMPA'
  }});

  return resp.data;
}

export const updateDepartamento = async (data) => {
  const { nome, sigla, idDepartamento } = data;
  const body = new FormData();
  body.append('nome', nome);
  body.append('sigla', sigla);

console.log('>>> PATCH', nome, sigla, idDepartamento);

  const resp = await api.patch(`/departamentos/${idDepartamento}`, data, { headers: {
    'Authorization': 'Bearer PROCEMPA',
    'Content-Type': 'application/json;charset=utf-8'
  }});

  return resp.data;
}