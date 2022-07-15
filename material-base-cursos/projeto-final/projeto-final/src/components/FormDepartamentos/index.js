import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editDepartamentos, insertDepartamentos, getDepartamentoPeloId } from '../../services/departamentos';

const salvarDepto = async (nome, sigla, callback) => {
  if (nome && sigla) {
    await insertDepartamentos({
      nome,
      sigla
    })
    callback()
  }
}

const editarDepto = async (idDepartamento, nome, sigla, callback) => {
  if (idDepartamento && nome && sigla) {
    await editDepartamentos({
      idDepartamento,
      nome,
      sigla
    })
    callback()
  }
}

const getDepartamento = async (idDepartamento) => {
  const resp = await getDepartamentoPeloId(idDepartamento)
  return resp
}

const FormDepartamentos = () => {
  const { idDepartamento } = useParams()
  const [nome, setNome] = useState('')
  const [sigla, setSigla] = useState('')
  const [erro, setErro] = useState()
  const [showError, setShowError] = useState('d-none')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [titulo, setTitulo] = useState('Cadastro')

  const navigate = useNavigate();  

  const [depto, setDepto] = useState()

  async function getDepto(id) {
    setDepto(await getDepartamento(id))
  }

  useEffect(() => {
    getDepto(idDepartamento)
  },[idDepartamento])

  useEffect(() => {
    if (depto) {
      setNome(depto[0].nome)
      setSigla(depto[0].sigla)
      setTitulo('Atualização')
    }
  }, [depto])
  

  useEffect(() => {
    if (saved) {
      navigate('/departamentos')
    }
  })

  return (
    <>
      <h3 className='mt-4 mb-4'>{titulo} de Departamento</h3>
      <div className='row'>
        <div className='col'>
          <div className='form-floating mb-3'>
            <input 
              type='text' 
              className='form-control'
              id='nome'
              placeholder='Nome'
              value={nome}
              onChange={e => setNome(e.target.value)}
            />
            <label htmlFor='nome'>Nome</label>
          </div>
        </div>
        <div className='col'>
          <div className='form-floating mb-3'>
            <input 
              type='text'
              className='form-control'
              id='sigla'
              placeholder='Sigla'
              value={sigla}
              onChange={e => setSigla(e.target.value)}
            />
            <label htmlFor='sigla'>Sigla</label>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <button 
            className='btn btn-primary'
            onClick={
              () => {
                if (!nome) { 
                  setErro('Informe o nome')
                  setShowError('d-block')
                  return
                }
                if (!sigla) { 
                  setErro('Informe a sigla!')
                  setShowError('d-block')
                  return
                }
                setSaving(true)

                if (depto) {
                  editarDepto(idDepartamento, nome, sigla, () => {
                    setSaved(true)
                  })
                } else {
                  salvarDepto(nome, sigla, () => {
                    setSaved(true)
                  })
                }
              }
          }
          >
            {!saving &&
              <i className='bi bi-save'/> 
            }
            {saving &&
              <span className="spinner-border spinner-border-sm"/> 
            }
            &nbsp;Salvar
          </button>
        </div>
      </div>
      <div className={`alert alert-danger mt-4 " ${showError}`}>
        {erro}
      </div>
    </>
  )
}

export default FormDepartamentos