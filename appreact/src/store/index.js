import { configureStore } from '@reduxjs/toolkit';
import prixReducer from './prixSlice';

const store = configureStore({
  reducer: {
    prix: prixReducer,
  },
});

export default store;
