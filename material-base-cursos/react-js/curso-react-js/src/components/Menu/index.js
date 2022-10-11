import React from 'react'
import { LinkNav, Nav } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { selectCounter } from '../../store/counter/counterSlice'
import { activeItem, updateActive} from '../../store/menu/menuSlice'

const Menu = () => {

  const counter = useSelector(selectCounter)
  const active = useSelector(activeItem)
  const dispatch = useDispatch()

  return (
    <Nav>
      <h1>Curso de ReactJS</h1>

      <LinkNav 
        className={active === 'home' ? 'active' : ''} 
        to="/"
        onClick={() => dispatch(updateActive('home'))}
      >
        Home
      </LinkNav>
      <LinkNav 
        className={active === 'departamentos' ? 'active' : ''} 
        to="/departamentos"
        onClick={() => dispatch(updateActive('departamentos'))}
      >
        Departamentos
      </LinkNav>
      <LinkNav 
        className={active === 'form-departamentos' ? 'active' : ''} 
        to="/departamentos/new"
        onClick={() => dispatch(updateActive('form-departamentos'))}
      >
        Add Departamento
      </LinkNav>
      <LinkNav 
        className={active === 'setup' ? 'active' : ''} 
        to="/setup"
        onClick={() => dispatch(updateActive('setup'))}
      >
        Setup
      </LinkNav>
      {/* <span>{counter}</span> */}
    </Nav>
  )
}

export default Menu