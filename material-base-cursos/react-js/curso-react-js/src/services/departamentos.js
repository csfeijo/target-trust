import api from './api';

const headers = {
  'Authorization': 'Bearer PROCEMPA' 
}

export const getDepartamentos = async () => {
  // COLOCAR A BARRA SEMPRE!
  let error = {};
  const resp = await api
                      .get('/departamentos/', { headers })
                      .catch((e) => {
                        error = e.response;
                      });
  return (resp && resp.data) || error;
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

  let error = {};
  const resp = await api
                      .post('/departamentos/', body, { headers })
                      .catch((e) => {
                        error = e.response;
                        console.log(error);
                      });
//console.log(resp);
  return (resp && resp.data) || error;
}

export const updateDepartamento = async (data) => {
  const { idDepartamento } = data;

  const resp = await api.patch(`/departamentos/${idDepartamento}`, data, { headers });

  return resp.data;
}

export const deleteDepartamento = async (data) => {
  const { idDepartamento } = data;

  const resp = await api.delete(`/departamentos/${idDepartamento}`, { headers }, data);

  return resp.data;
}
