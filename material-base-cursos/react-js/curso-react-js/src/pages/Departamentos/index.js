import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, List, Panel } from './styles'
import Card from '../../components/Card'
import Button from '../../components/Button'
import { BiEditAlt, BiTrash } from 'react-icons/bi'
import Loader from '../../components/Loader'
import { 
  deleteDepartamento, 
  getDepartamentos 
} from '../../services/departamentos'

const Departamentos = () => {
  const [departamentos, setDepartamentos] = useState([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const navigate = useNavigate()
  const loadDepartamentos = async () => {
    try {
      const resp = await getDepartamentos()
      setDepartamentos(resp.data)
    } catch(e){
      console.error(e)
    }
  }

  useEffect(() => {
    if(departamentos.length === 0) {
      loadDepartamentos()
    }
  }, [departamentos])

  // const listaDepartamentos = [
  //   { id: 1, nome: 'Recursos Humanos', sigla: 'RH' },
  //   { id: 2, nome: 'Financeiro', sigla: 'FINANC' },
  //   { id: 3, nome: 'Contabilidade', sigla: 'CONTAB' }
  // ]

  return (
    <Container>
      <h1>Departamentos</h1>
      <h4>{message}</h4>

      {loading && 
        <Loader fullScreen={true} />
      }

      <List>
        {departamentos.length === 0 &&
          <Loader fullScreen={true} />
        }
        {/* TEM QUE TER O TESTE PARA EVITAR O STATE VAZIO */}
        {departamentos && departamentos.map((depto, index) => {
          return (
            <Card key={index}>
              <Link to={`/departamentos/${depto.id_departamento}`}>
                <h3>{depto.sigla}</h3>
              </Link>

              <Panel>
                <Button 
                  uiType='warning'
                  onClick={() => {
                    navigate(`/departamentos/edit/${depto.id_departamento}`)
                  }}
                >
                  <BiEditAlt/>
                  &nbsp;
                  Editar
                </Button>
                <Button 
                  uiType='danger'
                  onClick={() => {
                    setLoading(true);

                    (async () => {
                      const resp = await deleteDepartamento({
                        idDepartamento: depto.id_departamento
                      })

                      if (resp && resp.status && resp.status === 500) {
                        setLoading(false)
                        setMessage('Falha na exclusão do registro.')
                      } else {
                        setLoading(false)
                        // workaround pois a API retorna 200 mesmo dando erro de contraint
                        if (resp.error) {
                          setMessage('Registro não pode ser excluído.')
                        } else {
                          navigate(0)
                        }
                        
                      }
                    })()
                    
                  }}
                >
                  <BiTrash/>
                  &nbsp;
                  Excluir
                </Button>
              </Panel>
            </Card>
          )
        })}
      </List>
    </Container>
  )
}

export default Departamentos