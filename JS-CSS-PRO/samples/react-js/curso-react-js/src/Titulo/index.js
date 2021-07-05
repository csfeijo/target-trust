// src/Titulo/index.js
import React from 'react';
import Mensagem from './styles';


const Titulo = ({ curso }) => (
  <>
    {curso &&
      <Mensagem type="success">Curso selecionado : {curso}</Mensagem>
    }
    {!curso &&
      <Mensagem type="warning">Nenhum curso selecionado!</Mensagem>
    }
  </>
);

export default Titulo;
