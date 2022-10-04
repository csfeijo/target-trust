import React from 'react'
import PropTypes from 'prop-types'
import Container from './styles'

const Mensagem = ({ children, type }) => {
  return (
    <Container type={type}>
      {children}
    </Container>    
  )
}

Mensagem.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Mensagem