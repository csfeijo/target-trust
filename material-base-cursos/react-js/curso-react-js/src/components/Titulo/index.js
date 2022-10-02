import React from 'react'
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

export default Titulo