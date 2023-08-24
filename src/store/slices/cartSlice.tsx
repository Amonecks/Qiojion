import { createSlice } from '@reduxjs/toolkit';
import { getInitialState } from '../../utils/getInitialState';

type cartSliceType = {
  id: string,
  amount: number
}

const initialState: cartSliceType[] = getInitialState('cartSlice');

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push({ id: action.payload, amount: 1 });
    },
    removeFromCart(state, action) {
      return state.filter(item => item.id != action.payload)
    },
    removeAllFromCart() {
      return []
    },
    increment(state, action) {
      return state.map(item => {
        if(item.id == action.payload && item.amount < 10) {
          return {id: item.id, amount: item.amount + 1}
        }
        return item;
      });
    },
    decrement(state, action) {
      return state.map(item => {
        if(item.id == action.payload && item.amount > 1) {
          return {id: item.id, amount: item.amount - 1}
        }
        return item;
      });
    }
  }
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart, increment, decrement, removeAllFromCart } = cartSlice.actions;