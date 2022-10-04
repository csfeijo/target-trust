import React from 'react'
import Container from './styles'
import PropTypes from 'prop-types'

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

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  uiType: PropTypes.string,
  disabled: PropTypes.bool
}

export default Button