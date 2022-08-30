import React from 'react';
import { Link } from 'react-router-dom';
import Container from './styles';

const Departamentos = () => {

  return (
    <Container>
      <h1>Departamentos</h1>
      
      <ul>
        <li><Link to="/departamentos/1">Departamento A</Link></li>
        <li><Link to="/departamentos/2">Departamento B</Link></li>
      </ul>
    </Container>
  )
}

export default Departamentos;