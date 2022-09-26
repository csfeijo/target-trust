import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import { changeTheme } from '../../store/setup/setupSlice';
import PanelContainer from './styles';

const Setup = () => {

  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.setup);

  return (
    <section>
      <h1>Setup</h1>
      <h3>Selecione o tema da aplicação:</h3>
      <PanelContainer>
        <Button
          disabled={theme === 'dark'}
          titulo='Dark'
          onClick={() => {
            dispatch(changeTheme('dark'))
          }}
        />
        <Button
          disabled={theme === 'light'}
          titulo='Light'
          onClick={() => {
            dispatch(changeTheme('light'))
          }}
        />
      </PanelContainer>
    </section>
  )
};

export default Setup;