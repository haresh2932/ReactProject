import { ADD_SHOPDATA, GET_SHOPDATA } from "../ActionType";

const initialState = {
  isloading: false,
  shopData: [],
  error: null,
};

export const shopReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case GET_SHOPDATA:
      return {
        isloading: false,
        shopData: action.payload,
        error: null,
      };
    case ADD_SHOPDATA:
      return {
        isloading: false,
        shopData: state.shopData.concat(action.payload),
        error: null,
      };

    default:
      return state;
  }
};
