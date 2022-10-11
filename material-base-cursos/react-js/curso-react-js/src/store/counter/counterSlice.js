import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incrementCounter(state) {
      return { ...state, value: state.value + 1 }
    },
    updateCounter(state, { payload }) {
      return { ...state, value: payload }
    }
  }
})

export const { incrementCounter, updateCounter } = slice.actions

// Atalho para o acesso direto ao contador
export const selectCounter = state => state.counter.value

export default slice.reducer