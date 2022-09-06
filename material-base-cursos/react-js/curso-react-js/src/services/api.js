import axios from 'axios';

// URL da nossa API
const baseURL = 'http://localhost/api-php';
//const baseURL = 'https://professorfeijo.com.br/tt/api-php';

const api = axios.create({
  baseURL: baseURL
});

export default api;