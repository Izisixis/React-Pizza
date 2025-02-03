import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  categoryValue: 0,
  sortValue: { name: 'Популярные', sortProperty: 'rating' },
};

export const counterSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    changeCategory: (state, i) => {
      state.categoryValue = i.payload;
    },
    changeSort: (state, i) => {
      state.sortValue = i.payload;
      console.log(state.sortValue.sortProperty);
    },
  },
});

export const { changeCategory, changeSort } = counterSlice.actions;

export default counterSlice.reducer;
