import { configureStore } from '@reduxjs/toolkit';
import filters from './slises/filterSlise';

export const store = configureStore({
  reducer: { filters },
});
