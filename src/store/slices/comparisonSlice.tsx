import { createSlice } from '@reduxjs/toolkit';
import { getInitialState } from '../../utils/getInitialState';

type comparisonSliceType = {
  id: string,
  category: string
}

const initialState: comparisonSliceType[] = getInitialState('comparisonSlice');

const comparisonSlice = createSlice({
  name: "comparisonSlice",
  initialState,
  reducers: {
    addToComparison(state, action) {
      state.push(action.payload);
    },
    removeFromComparison(state, action) {
      return state.filter(item => item.id != action.payload.id);
    }
  }
});

export default comparisonSlice.reducer;

export const { addToComparison, removeFromComparison } = comparisonSlice.actions;