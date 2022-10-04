import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/Button'
import { changeTheme } from '../../store/setup/setupSlice'
import PanelContainer from './styles'

const Setup = () => {

  const dispatch = useDispatch()
  const { theme } = useSelector(state => state.setup)

  return (
    <section>
      <h1>Setup</h1>
      <h3>Selecione o tema da aplicação:</h3>
      <PanelContainer>
        <Button
          disabled={theme === 'dark'}
          onClick={() => {
            dispatch(changeTheme('dark'))
          }}
        >
          Dark
        </Button>
        <Button
          disabled={theme === 'light'}
          onClick={() => {
            dispatch(changeTheme('light'))
          }}
        >
          Light
        </Button>
      </PanelContainer>
    </section>
  )
}

export default Setup