import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, List } from './styles';
import Card from '../../components/Card';
import { getDepartamentos } from '../../services/departamentos';

const Departamentos = () => {

  const [departamentos, setDepartamentos] = useState(null);

  const loadDepartamentos = async () => {
    setDepartamentos(await getDepartamentos());
  }

  useEffect(() => {
    if(!departamentos) {
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
        {/* TEM QUE TER O TESTE PARA EVITAR O STATE VAZIO */}
        {departamentos && departamentos.map((depto, index) => {
          return (
            <Card key={index}>
             {/*} <Link to={`/departamentos/${depto.id_departamento}`}> */}
             <Link to={{
              pathname: `/departamentos/${depto.id_departamento}`,
              search: '?nome=cicero',
              hash: "#the-hash",
              state: { fromDashboard: true }
             }}
             >
                <h3>{depto.sigla}</h3>
              </Link>
              
            </Card>
          )
        })}
      </List>
    </Container>
  )
}

export default Departamentos;