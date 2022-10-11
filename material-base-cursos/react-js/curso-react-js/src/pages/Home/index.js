import React from 'react'
import { Container, Panel } from './styles'
import Button from '../../components/Button'
import Welcome from '../../components/Welcome'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter, selectCounter, updateCounter } from '../../store/counter/counterSlice'

const Home = () => {

  const counter = useSelector(selectCounter)
  const dispatch = useDispatch()
  
  return (
    <Container>
      <Welcome nome='Cícero Feijó'>Home Page</Welcome>

      <Panel>
        {/* Botoes para uso como exemplo do Redux */}
        <Button
          onClick={() => {
            dispatch(incrementCounter())
          }}
        >
          Increment +1
        </Button>
        <Button
          onClick={() => {
            dispatch(updateCounter(0))
          }}
        >
          Reset to 0
        </Button>
        Counter: {counter}
      </Panel>
    </Container>
  )
}

export default Home