import React, { useEffect, useState } from 'react';
import { Container, Form } from './styles';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button';
import Mensagem from '../../components/Mensagem';
import { insertDepartamento, getDepartamento, updateDepartamento } from '../../services/departamentos';

const FormDepartamento = () => {
  const { idDepartamento } = useParams();
  const [nome, setNome] = useState('');
  const [sigla, setSigla] = useState('');
  const [erro, setErro] = useState('');
  const [type, setType] = useState('');

  const [departamento, setDepartamento] = useState();

  // Caso seja um edit busca dados na API
  const loadDepartamento = async () => {
    setDepartamento(await getDepartamento({ idDepartamento }));
  }

  useEffect(() => {
    if (!departamento && idDepartamento) {
      loadDepartamento();
    }
  }, [departamento])

  useEffect(() => {
    if (departamento){
      setNome(departamento[0].nome)
      setSigla(departamento[0].sigla)
    }
  }, [departamento])



  // Validacao do formulario
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

    if (idDepartamento) {
      updateDepartamento({
        idDepartamento,
        nome,
        sigla
      })
      setErro('Departamento atualizado!');
    } else {
      insertDepartamento({
        nome,
        sigla
      })
      setErro('Departamento adicionado!');
    }


    
    setType('sucesso');
    setNome('');
    setSigla('');
  }

  return (
    <Container>
      <h1>{idDepartamento ? 'Editar' : 'Adicionar'} Departamento</h1>
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