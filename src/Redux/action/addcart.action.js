import { ADD_CART } from "../ActionType";

export const addCart = (item) => (dispatch) => {
  dispatch({ type: ADD_CART, payload: item });
};
