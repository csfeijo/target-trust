import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, List, Panel } from './styles';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { BiEditAlt, BiTrash } from 'react-icons/bi';
import Loader from '../../components/Loader';
import { getDepartamentos, deleteDepartamento } from '../../services/departamentos';

const Departamentos = () => {

  const [departamentos, setDepartamentos] = useState([]);
  const navigate = useNavigate();
  const loadDepartamentos = async () => {
    try {
      const resp = await getDepartamentos();
      setDepartamentos(resp.data);
    } catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    if(departamentos.length === 0) {
      loadDepartamentos();
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

      <List>
        {departamentos.length === 0 &&
          <Loader/>
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
                    navigate(`/departamentos/edit/${depto.id_departamento}`);
                  }}
                >
                  <BiEditAlt/>
                  &nbsp;
                  Editar
                </Button>
                <Button 
                  uiType='danger'
                  onClick={() => {
                    deleteDepartamento({
                      idDepartamento: depto.id_departamento
                    })
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

export default Departamentos;