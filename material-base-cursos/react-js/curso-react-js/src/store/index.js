import { configureStore } from '@reduxjs/toolkit'
import setupReducer from './setup/setupSlice'
import counterReducer from './counter/counterSlice'
import menuReducer from './menu/menuSlice'

export default configureStore({
  reducer: {
    setup: setupReducer,
    counter: counterReducer,
    menu: menuReducer,
  }
})


