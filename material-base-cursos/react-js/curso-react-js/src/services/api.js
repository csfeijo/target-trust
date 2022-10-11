import axios from 'axios'
import configureMock from './configureMock'


// URL da nossa API
//const baseURL = 'http://localhost/api-php';
const mockRequests = true
const baseURL = 'https://professorfeijo.com.br/tt/api-php'
//


const api = axios.create({
  baseURL
})

if (mockRequests){
  configureMock(api)
}

// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';



export default api