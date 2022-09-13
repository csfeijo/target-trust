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
  const { idDepartamento } = data;

  const resp = await api.patch(`/departamentos/${idDepartamento}`, data, { headers: {
    'Authorization': 'Bearer PROCEMPA'
  }});

  return resp.data;
}

export const deleteDepartamento = async (data) => {
  const { idDepartamento } = data;

  const resp = await api.delete(`/departamentos/${idDepartamento}`, { headers: {
    'Authorization': 'Bearer PROCEMPA'
  }}, data);

  return resp.data;
}
