import { createSlice } from '@reduxjs/toolkit';
import { getInitialState } from '../../utils/getInitialState';

const initialState: string[] = getInitialState('favoritesSlice');

const favoritesSlice = createSlice({
  name: 'favoritesSlice',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      state.push(action.payload);
    },
    removeFromFavorites(state, action) {
      return state.filter(item => item != action.payload);
    }
  }
});

export default favoritesSlice.reducer;

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;