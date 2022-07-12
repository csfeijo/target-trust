import React, { useState, useEffect } from 'react'
import getDepartamentos from '../../services/departamentos';

const Departamentos = () => {

  const [deptos, setDeptos] = useState()

  useEffect(() => {
    async function getDeptos() {
      setDeptos(await getDepartamentos())
    }
    getDeptos()
  }, [])



  return (
    <>
      <hr/>
      <div className='d-flex justify-content-between'>
        <h3>Departamentos</h3>
        <button className='btn btn-secondary'>
          <i className='bi bi-plus'/>Novo
        </button>
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
                <tr>
                  <td>{d.nome}</td>
                  <td>{d.sigla}</td>
                  <td className='text-center'>
                    <div className='d-flex justify-content-evenly'>
                      <a href='#' className='btn btn-sm btn-outline-warning'>
                        <i className='bi bi-pencil-fill'></i> Editar
                      </a>

                      <a href='#' className='btn btn-sm btn-outline-danger'>
                        <i className='bi bi-trash'></i> Excluir
                      </a>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      }
    </>
  )
}

export default Departamentos