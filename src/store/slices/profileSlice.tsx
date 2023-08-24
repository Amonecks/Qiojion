import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    login(_, action) {
      return action.payload;
    },
    logout() {
      return {};
    },
    setOrders(state, action) {
      return {
        ...state,
        orders: action.payload
      }
    }
  }
});

export default profileSlice.reducer;

export const { login, logout, setOrders } = profileSlice.actions;