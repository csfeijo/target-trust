import React from 'react'
import mySvg from '../../assets/img/loader.svg'
import { Container, LoaderImage } from './style'


const Loader = ({ fullScreen = false }) => {

  return (
    <Container fullScreen={fullScreen}>
      <LoaderImage src={mySvg} />
    </Container>
  )
}

export default Loader