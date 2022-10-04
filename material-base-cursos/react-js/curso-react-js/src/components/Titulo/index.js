import React from 'react'
import PropTypes from 'prop-types'
import { Texto, TextoMenor } from './styles'


const Titulo = ({ nome }) => (
  <>
    <Texto type="success">
      Bem Vindo ao curso de <span>{nome}</span>!
    </Texto>
    <TextoMenor type="success" primary>
      Bem Vindo ao curso de <span>{nome}</span>!
    </TextoMenor>
  </>
)

Titulo.propTypes = {
  nome: PropTypes.string.isRequired
}

export default Titulo