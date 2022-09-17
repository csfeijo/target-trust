import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, List, Panel } from './styles';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { BiEditAlt, BiTrash } from 'react-icons/bi';
import { getDepartamentos, deleteDepartamento } from '../../services/departamentos';

const Departamentos = () => {

  const [departamentos, setDepartamentos] = useState(null);
  const navigate = useNavigate();
  const loadDepartamentos = async () => {
    setDepartamentos(await getDepartamentos());
  }

  useEffect(() => {
    if(!departamentos) {
      loadDepartamentos();
    }
  }, [departamentos])

  // const listaDepartamentos = [
  //   { id: 1, nome: 'Recursos Humanos', sigla: 'RH' },
  //   { id: 2, nome: 'Financeiro', sigla: 'FINANC' },
  //   { id: 3, nome: 'Contabilidade', sigla: 'CONTAB' }
  // ]

  return (
    <Container>
      <h1>Departamentos</h1>

      <List>
        {/* TEM QUE TER O TESTE PARA EVITAR O STATE VAZIO */}
        {departamentos && departamentos.map((depto, index) => {
          return (
            <Card key={index}>
              <Link to={`/departamentos/${depto.id_departamento}`}>
                <h3>{depto.sigla}</h3>
              </Link>

              <Panel>
                <Button 
                  uiType='success'
                  titulo='Sucesso' 
                  icon={BiTrash}
                  onClick={() => {
                    deleteDepartamento({
                      idDepartamento: depto.id_departamento
                    })
                  }}
                />
                <Button 
                  uiType='warning'
                  titulo='Warning'
                  icon={BiEditAlt} 
                  onClick={() => {
                    navigate(`/departamentos/edit/${depto.id_departamento}`);
                  }}
                />
                <Button 
                  uiType='danger'
                  titulo='Danger' 
                  icon={BiTrash}
                  onClick={() => {
                    deleteDepartamento({
                      idDepartamento: depto.id_departamento
                    })
                  }}
                />
              </Panel>
            </Card>
          )
        })}
      </List>
    </Container>
  )
}

export default Departamentos;