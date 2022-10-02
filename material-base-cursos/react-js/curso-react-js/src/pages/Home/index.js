import React from 'react'
import Container from './styles'
import Button from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter, selectCounter, updateCounter } from '../../store/counter/counterSlice'

const Home = () => {

  const counter = useSelector(selectCounter)
  const dispatch = useDispatch()
  
  return (
    <Container>
      <h1>Home Page</h1>
      <Button
        titulo='Redux'
        onClick={() => {
          dispatch(incrementCounter())
        }}
      />
      <Button
        titulo='Set 10'
        onClick={() => {
          dispatch(updateCounter(10))
        }}
      />
      Counter: {counter}
    </Container>
  )
}

export default Home