import React, { useState } from 'react';
import { Container, Form } from './styles';
import Button from '../../components/Button';
import Mensagem from '../../components/Mensagem';

const FormDepartamento = () => {

  const [nome, setNome] = useState('');
  const [sigla, setSigla] = useState('');
  const [erro, setErro] = useState('');
  const [type, setType] = useState('');

  const validateForm = () => {
    if (nome === '') {
      setErro('Preencha o Nome');
      setType('erro');
      return false;
    }
    if (sigla === '') {
      setErro('Preencha a Sigla');
      setType('erro');
      return false;
    }
    setErro('Departamento adicionado!');
    setType('sucesso');
    setNome('');
    setSigla('');
  }

  return (
    <Container>
      <h1>Adicionar Departamento</h1>
      <Form>
        <input 
          type='text'
          id='nome'
          name='nome'
          placeholder='Nome...'
          value={nome}
          onChange={(e) => {
            setNome(e.target.value)
          }}
        />
        <input 
          type='text' 
          id='sigla'
          name='sigla' 
          placeholder='Sigla...'
          value={sigla}
          onChange={(e) => {
            setSigla(e.target.value)
          }}
        />
        <Button 
          titulo='Enviar'
          onClick={validateForm}
        />
        <Mensagem type={type}>
          {erro}
        </Mensagem>
      </Form>
    </Container>
  )
}

export default FormDepartamento;