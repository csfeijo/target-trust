import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from './styles';
import { getDepartamento } from '../../services/departamentos';

const DepartamentosDetalhes = () => {
  const { idDepartamento } = useParams();
 
  const [departamento, setDepartamento] = useState();

  const loadDepartamento = async () => {
    setDepartamento(await getDepartamento( { idDepartamento }));
  }

  useEffect(() => {
    if (!departamento) {
      loadDepartamento();
    }
  }, [departamento]);

  return (
    <Container>
      {departamento && 
        <>
          <h1>{departamento[0].nome}</h1>
          <p>Id do Departamento: {departamento[0].id_departamento}</p>
          <p>Sigla: {departamento[0].sigla}</p>
        </>
      }
    </Container>
  )
}

export default DepartamentosDetalhes;