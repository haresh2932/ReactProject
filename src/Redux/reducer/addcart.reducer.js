import { ADD_CART } from "../ActionType";

const initialState = {
  cartItem: [],
};

export const addReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        cartItem: state.cartItem.concat(action.payload),
      };
    default:
      return state;
  }
};
