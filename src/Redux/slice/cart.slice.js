import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  islLoading: false,
  cart: [],
  error: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = state.cart.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
