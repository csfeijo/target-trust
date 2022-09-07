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
  console.log(resp)
  return resp.data;
}