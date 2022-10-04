import React from 'react'
import PropTypes from 'prop-types'
import mySvg from '../../assets/img/loader.svg'
import { Container, LoaderImage  } from './style'


const Loader = ({ fullScreen = false }) => {

  return (
    <Container fullScreen={fullScreen}>
      <LoaderImage src={mySvg} />
    </Container>
  )
}

Loader.propTypes = {
  fullScreen: PropTypes.bool
}

export default Loader