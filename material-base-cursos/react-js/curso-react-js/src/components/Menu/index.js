import React from 'react'
import { LinkNav, Nav } from './styles'
import { useSelector } from 'react-redux'
import { selectCounter } from '../../store/counter/counterSlice'

const Menu = () => {

  const counter = useSelector(selectCounter)

  return (
    <Nav>
      <h1>Curso de ReactJS</h1>

      <LinkNav to="/">Home</LinkNav>
      <LinkNav to="/departamentos">Departamentos</LinkNav>
      <LinkNav to="/departamentos/new">Add Departamento</LinkNav>
      <LinkNav to="/setup">Setup</LinkNav>
      {/* <span>{counter}</span> */}
    </Nav>
  )
}

export default Menu