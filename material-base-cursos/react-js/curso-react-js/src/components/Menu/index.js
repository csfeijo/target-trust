import React from 'react';
import { Nav, LinkNav } from './styles';

const Menu = () => {

  return (
    <Nav>
      <h1>Curso de ReactJS</h1>

      <LinkNav to="/">Home</LinkNav>
      <LinkNav to="/departamentos">Departamentos</LinkNav>
      <LinkNav to="/departamentos/new">Add Departamento</LinkNav>
      <LinkNav to="/setup">Setup</LinkNav>
    </Nav>
  )
};

export default Menu;