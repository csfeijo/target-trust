import api from '../services/api'

export const getDepartamentos = async () => {
  const resp = await api.get('/departamentos')
  return resp.data
}

export const insertDepartamentos = async (data) => {
  const { nome, sigla } = data
  const resp = await api.post('/departamentos', {
    nome,
    sigla
  })
  return resp.data
}

export const removeDepartamento = async (data) => {
  alert('removido')
}