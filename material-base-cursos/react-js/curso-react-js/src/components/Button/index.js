import React from 'react';
import Container from './styles';

const Button = ({ onClick, children, uiType, disabled }) => {
  return (
    <Container
      disabled={disabled}
      uiType={uiType}
      type='button'
      onClick={onClick}
    >
      {children}
    </Container>
  )
}

export default Button;