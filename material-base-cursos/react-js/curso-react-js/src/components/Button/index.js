import React from 'react';
import Container from './styles';

const Button = ({ onClick, titulo }) => {
  return (
    <Container
      type='button'
      onClick={onClick}
    >
      {titulo}
    </Container>
  )
}

export default Button;