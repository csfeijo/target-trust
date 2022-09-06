import axios from 'axios';

// URL da nossa API
const baseURL = 'http://localhost/api-php';
//const baseURL = 'https://60b81fdeb54b0a0017c031db.mockapi.io/api/v1/produtos';
//const baseURL = 'https://professorfeijo.com.br/tt/api-php';

// axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
//axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

//axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;

const api = axios.create({
  baseURL: baseURL
});

export default api;