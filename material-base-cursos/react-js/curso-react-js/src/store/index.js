import { configureStore } from '@reduxjs/toolkit'
import setupReducer from './setup/setupSlice'
import counterReducer from './counter/counterSlice'

export default configureStore({
  reducer: {
    setup: setupReducer,
    counter: counterReducer
  }
})


