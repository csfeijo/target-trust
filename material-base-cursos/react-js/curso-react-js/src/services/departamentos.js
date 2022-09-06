import api from './api';

export const getDepartamentos = async () => {
  // axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
  // axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
  
  // COLOCAR A BARRA SEMPRE!
  const resp = await api.get('/departamentos/');
  return resp.data;
}