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

export const editDepartamentos = async (data) => {
  const { idDepartamento, nome, sigla } = data
  const resp = await api.put(`/departamentos/${idDepartamento}`, {
    nome,
    sigla
  })
  return resp.data
}

export const removeDepartamento = async (idDepartamento) => {
  const resp = await api.delete(`/departamentos/${idDepartamento}`)
  return resp.data
}

export const getDepartamentoPeloId = async (idDepartamento) => {
  const resp = await api.get(`/departamentos/${idDepartamento}`)
  return resp.data
}