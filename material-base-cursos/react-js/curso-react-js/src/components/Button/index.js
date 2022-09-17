import React from 'react';
import Container from './styles';

const Button = ({ onClick, titulo, icon: Icon, uiType }) => {
  return (
    <Container
      uiType={uiType}
      type='button'
      onClick={onClick}
    >
      {/* {Icon && <Icon/> }
      &nbsp; */}
      {titulo}
    </Container>
  )
}

export default Button;