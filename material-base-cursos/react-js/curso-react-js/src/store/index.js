import { configureStore } from '@reduxjs/toolkit';
import setupReducer from './setupSlice';

export default configureStore({
  reducer: {
    setup: setupReducer
  }
});


