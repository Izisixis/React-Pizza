import { configureStore } from '@reduxjs/toolkit';
import categoryReduser from './slises/filterSlise';

export const store = configureStore({
  reducer: {
    category: categoryReduser,
  },
});
