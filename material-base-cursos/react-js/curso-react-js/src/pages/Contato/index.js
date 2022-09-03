import React, { useState, useEffect } from 'react';
import { Container, Form } from './styles';
import Button from '../../components/Button';
import Mensagem from '../../components/Mensagem';
import { type } from '@testing-library/user-event/dist/type';

const Contato = () => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [erro, setErro] = useState('');
  const [type, setType] = useState('');

  const validateForm = () => {
    if (nome === '') {
      setErro('Preencha o nome');
      setType('erro');
      return false;
    }
    if (email === '') {
      setErro('Preencha o e-mail');
      setType('erro');
      return false;
    }
    setErro('Mensagem enviada!');
    setType('sucesso');
    setNome('');
    setEmail('');
  }

  return (
    <Container>
      <h1>Contato</h1>
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
          type='email' 
          id='email'
          name='email' 
          placeholder='E-mail...'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
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

export default Contato;