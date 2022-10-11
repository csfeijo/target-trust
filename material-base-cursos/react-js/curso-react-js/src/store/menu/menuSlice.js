import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'menu',
  initialState: {
    active: 'departamentos'
  },
  reducers: {
    updateActive(state, { payload }) {
      return { ...state, active: payload }
    }
  }
})

export const { updateActive } = slice.actions

// Atalho para o acesso direto ao contador
export const activeItem = state => state.menu.active

export default slice.reducer