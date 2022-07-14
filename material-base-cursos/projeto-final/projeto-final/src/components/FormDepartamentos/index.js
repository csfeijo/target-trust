import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { insertDepartamentos } from '../../services/departamentos';

const salvarDepto = async (nome, sigla, callback) => {
  if (nome && sigla) {
    const resp = await insertDepartamentos({
      nome,
      sigla
    })
    callback()
  }
}

const FormDepartamentos = () => {
  const [nome, setNome] = useState('')
  const [sigla, setSigla] = useState('')
  const [erro, setErro] = useState()
  const [showError, setShowError] = useState('d-none')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const navigate = useNavigate();  

  useEffect(() => {
    if (saved) {
      navigate('/departamentos')
    }
  })

  return (
    <>
      <h3 className='mt-4 mb-4'>Cadastro de Departamento</h3>
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
                salvarDepto(nome, sigla, () => {
                  setSaved(true)
                })
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