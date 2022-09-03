import React from 'react';
import { Link } from 'react-router-dom';
import { Container, List } from './styles';
import Card from '../../components/Card';

const Departamentos = () => {

  const listaDepartamentos = [
    { id: 1, nome: 'Recursos Humanos', sigla: 'RH' },
    { id: 2, nome: 'Financeiro', sigla: 'FINANC' },
    { id: 3, nome: 'Contabilidade', sigla: 'CONTAB' }
  ]


  return (
    <Container>
      <h1>Departamentos</h1>

      <List>
        {listaDepartamentos.map((depto, index) => {
          return (
            <Card key={index}>
              <Link to={`/departamentos/${depto.id}`}>
                <h3>{depto.sigla}</h3>
                <p>{depto.nome}</p>
              </Link>
              
            </Card>
          )
        })}
      </List>
    </Container>
  )
}

export default Departamentos;