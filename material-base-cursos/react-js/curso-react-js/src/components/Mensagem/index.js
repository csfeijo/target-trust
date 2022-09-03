import React from 'react';
import Container from './styles';

const Mensagem = ({ children, type }) => {
  return (
    <Container type={type}>
      {children}
    </Container>    
  )
}

export default Mensagem;