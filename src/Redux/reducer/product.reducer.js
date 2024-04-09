import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  ERROR_PRODUCT,
  LOADING_PRODUCT,
  PRODUCT_DATA,
} from "../ActionType";

const initialValues = {
  isloading: false,
  product: [],
  error: null,
};

export const productReducer = (state = initialValues, action) => {
  console.log(action);
  switch (action.type) {
    case LOADING_PRODUCT:
      return {
        ...state,
        isloading: true,
      };

    case ERROR_PRODUCT:
      return {
        ...state,
        isloading: false,
        error: action.payload,
      };
    case PRODUCT_DATA:
      return {
        isloading: false,
        product: action.payload,
        error: null,
      };
    case ADD_PRODUCT:
      return {
        isloading: false,
        product: state.product.concat(action.payload),
        error: null,
      };
    case DELETE_PRODUCT:
      return {
        isloading: false,
        product: state.product.filter((v) => v.id !== action.payload),
        error: null,
      };
    case EDIT_PRODUCT:
      return {
        isloading: false,
        product: state.product.map((v) =>
          v.id === action.payload.id ? action.payload : v
        ),
        error: null,
      };
    default:
      return state;
  }
};
