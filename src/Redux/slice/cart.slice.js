import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  islLoading: false,
  cart: [],
  count: 0,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action);

      const index = state.cart.findIndex((v) => v.pid === action.payload);

      if (index !== -1) {
        state.cart[index].qty++;
      } else {
        state.cart.push({ pid: action.payload, qty: 1 });
      }
    },

    incrementQty: (state, action) => {
      console.log(action);

      const index = state.cart.findIndex((v) => v.pid === action.payload);

      if (index !== -1) {
        state.count += 1;
      }
    },
    // decrementQty: (state, action) => {

    // },
  },
});

export const { addToCart, incrementQty, decrementQty } = cartSlice.actions;

export default cartSlice.reducer;
