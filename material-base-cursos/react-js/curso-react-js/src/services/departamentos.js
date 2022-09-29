import api from './api';

const headers = {
  'Authorization': 'Bearer PROCEMPA' 
}

// Formato usando o catch do Axios
// export const getDepartamentos = async () => {

//   let error = {};
//   const resp = await api
//                       .get('/departamentos/', { headers })
//                       .catch((e) => {
//                         error = e.response;
//                       });
//   return (resp && resp.data) || error;
// }

// Estrutura para usar o try/catch na APP
export const getDepartamentos = async () => {
  const resp = await api
                      .get('/departamentos/', { headers });

  return resp;
}

export const getDepartamento = async ({ idDepartamento }) => {
  
  let error = {};
  const resp = await api
                      .get(`/departamentos/${idDepartamento}`, { headers })
                      .catch(e => {
                        error = e.response;
                      });
  return (resp && resp.data) || error;
}

export const insertDepartamento = async (data) => {
  const { nome, sigla } = data;
  const body = new FormData();
  body.append('nome', nome);
  body.append('sigla', sigla);

  let error = {};
  const resp = await api
                      .post('/departamentos/', body, { headers })
                      .catch(e => {
                        error = e.response;
                      });

  return (resp && resp.data) || error;
}

export const updateDepartamento = async (data) => {
  const { idDepartamento } = data;

  let error = {};
  const resp = await api
                .patch(`/departamentos/${idDepartamento}`, data, { headers })
                .catch(e => {
                  error = e.response;
                });

  return (resp && resp.data) || error;
}

export const deleteDepartamento = async (data) => {
  const { idDepartamento } = data;

  const resp = await api.delete(`/departamentos/${idDepartamento}`, { headers }, data);

  return resp.data;
}
