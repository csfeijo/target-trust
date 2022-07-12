import api from '../services/api'

const getDepartamentos = async () => {
  const resp = await api.get('/departamentos')
  return resp.data
}

export default getDepartamentos