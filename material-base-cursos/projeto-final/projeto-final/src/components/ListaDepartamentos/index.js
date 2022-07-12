import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
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