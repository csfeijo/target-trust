import { React, useEffect, useState } from 'react';
import './App.css';
import Clicou from './Clicou';
import Contador from './Contador';
import Titulo from './Titulo';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';


const App = () => {

  return (
    <>
      <Router>
        <Link to="/home">HOME</Link>
        <Link to="/clientes">Clientes</Link>
        <Link to="/contato">Contato</Link>
        <h1>Bem Vindo!</h1>
        <hr />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
