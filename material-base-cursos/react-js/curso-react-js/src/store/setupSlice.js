import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'setup',
  initialState: {
    theme: 'light',
  },
  reducers: {
    changeTheme(state, { payload }) {
      return { ...state, theme: payload }
    }
  }
})

export const { changeTheme } = slice.actions;

export const selectSetup = state => state.setup;

export default slice.reducer;