import React from 'react';
import { useParams } from 'react-router-dom';
import Container from './styles';

const DepartamentosDetalhes = () => {
  const { idDepartamento } = useParams();
  

  return (
    <Container>
      <h1>Detalhes do Departamento</h1>
      <p>Id do Departamento: {idDepartamento}</p>
    </Container>
  )
}

export default DepartamentosDetalhes;