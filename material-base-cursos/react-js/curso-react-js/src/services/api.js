import axios from 'axios';

// URL da nossa API
// const baseURL = 'http://localhost/api-php';
const baseURL = 'https://professorfeijo.com.br/tt/api-php';

// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
  baseURL: baseURL
});

export default api;