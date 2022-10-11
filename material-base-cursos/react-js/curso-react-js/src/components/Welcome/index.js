import React from 'react'
import PropTypes from 'prop-types'
import { Texto } from './styles'


const Welcome = ({ nome }) => (
  <Texto type='feature'>
    Bem Vindo ao Curso de ReactJS - <span>{nome}</span>!
  </Texto>
)

Welcome.propTypes = {
  nome: PropTypes.string.isRequired
}

export default Welcome