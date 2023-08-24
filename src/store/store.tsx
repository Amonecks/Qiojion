import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favoritesSlice from "./slices/favoritesSlice";
import comparisonSlice from "./slices/comparisonSlice";
import cartSlice from "./slices/cartSlice";
import profileSlice from "./slices/profileSlice";

const rootReducer = combineReducers({
  favoritesSlice,
  comparisonSlice,
  cartSlice,
  profileSlice
})

export const store = configureStore({
  reducer: rootReducer
});

store.subscribe(() => {

  localStorage.setItem('store', JSON.stringify(store.getState()));

});
