import React, { useCallback, useEffect, useState } from 'react';
import { Container, Form } from './styles';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button';
import Mensagem from '../../components/Mensagem';
import Loader from '../../components/Loader';
import { 
  insertDepartamento, 
  getDepartamento, 
  updateDepartamento 
} from '../../services/departamentos';

const FormDepartamento = () => {
  const { idDepartamento } = useParams();
  const [nome, setNome] = useState('');
  const [sigla, setSigla] = useState('');
  const [erro, setErro] = useState('');
  const [type, setType] = useState('');
  const [loading, setLoading] = useState(false);

  const [departamento, setDepartamento] = useState();

  // Caso seja um edit busca dados na API
  const loadDepartamento = useCallback( async () => {
    setDepartamento(await getDepartamento({ idDepartamento }));
  },[idDepartamento]) 


  // const loadDepartamentoOld = async () => {
  //   setDepartamento(await getDepartamento({ idDepartamento }));
  // }

  useEffect(() => {
    if (!departamento && idDepartamento) {
      setLoading(true);
      loadDepartamento();
    }
  }, [departamento, idDepartamento, loadDepartamento])

  useEffect(() => {
    if (departamento){
      setLoading(false);
      setNome(departamento[0].nome)
      setSigla(departamento[0].sigla)
    }
  }, [departamento]);

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
      setLoading(true);
      (async () => {
        const resp = await updateDepartamento({
          idDepartamento,
          nome,
          sigla
        })
        if (resp.status && resp.status === 500) {
          setErro('Erro no Servidor!');
          setType('erro');
        } else {
          setErro('Departamento atualizado!');
          setType('sucesso');
          setNome('');
          setSigla('');
        }
        setLoading(false);
      })()
        // setErro('Departamento atualizado!');
    } else {
      
      setLoading(true);

      (async () => {
        const resp = await insertDepartamento({
          nome,
          sigla
        })
        
        if (resp.status && resp.status === 500) {
          setErro('Erro no Servidor!');
          setType('erro');
        } else {
          setErro('Departamento adicionado!');
          setType('sucesso');
          setNome('');
          setSigla('');
        }
        setLoading(false);
      })()
    }
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
          uiType='success'
          onClick={validateForm}
        >
          {loading &&
            <>
              <Loader/> Carregando
            </>
          }

          {!loading && 
            <>
              Salvar
            </>
          }
          
        </Button>
        <Mensagem type={type}>
          {erro}
        </Mensagem>
      </Form>
    </Container>
  )
}

export default FormDepartamento;