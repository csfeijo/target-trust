import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { 
  getDepartamentos, 
  removeDepartamento
} from '../../services/departamentos';
import Modal from '../Modal'

const Departamentos = () => {
  const [deptos, setDeptos] = useState()
  const [deleted, setDeleted] = useState(false)
  const [nome, setNome] = useState()
  const [sigla, setSigla] = useState()
  const [idDepartamento, setIdDepartamento] = useState()

  async function getDeptos() {
    setDeptos(await getDepartamentos())
  }

  useEffect(() => {
    getDeptos()
  }, [])

  useEffect(() => {
    if (deleted) {
      document.querySelectorAll('.btn-close')[0].click()
      setDeleted(false)
      getDeptos()
    }
  }, [deleted])

  return (
    <>
      <div className='d-flex justify-content-between mt-4 mb-4'>
        <h3>Departamentos</h3>
        <Link to='/departamentos/new' className='btn btn-secondary'>
          <i className='bi bi-plus'/>Novo
        </Link>
      </div>
      {deptos && 
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Sigla</th>
              <th className='text-center'>Ações</th>
            </tr>
          </thead>
          <tbody>
            {deptos.map(d => {
              return (
                <tr key={d.id_departamento}>
                  <td>{d.nome}</td>
                  <td>{d.sigla}</td>
                  <td className='text-center'>
                    <div className='d-flex justify-content-evenly'>
                      <Link to={`/departamentos/edit/${d.id_departamento}`} className='btn btn-sm btn-outline-warning'>
                        <i className='bi bi-pencil-fill'></i> Editar
                      </Link>

                      <button 
                        className='btn btn-sm btn-outline-danger'
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => {
                          setIdDepartamento(d.id_departamento)
                          setNome(d.nome)
                          setSigla(d.sigla)
                        }}
                      >
                        <i className='bi bi-trash'></i> Excluir
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      }
      <Modal 
        nome={nome} 
        sigla={sigla}
        onConfirm={() => {
          removeDepartamento(idDepartamento)
          setDeleted(true)
        }}
      />
    </>
  )
}

export default Departamentos