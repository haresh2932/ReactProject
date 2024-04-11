import {
  ADD_SHOPDATA,
  DELETE_REVIEW,
  EDIT_REVIEW,
  ERROR_SHOPDATA,
  GET_SHOPDATA,
  LOADING_SHOPDATA,
} from "../ActionType";

const initialState = {
  isloading: false,
  review: [],
  error: null,
};

export const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_SHOPDATA:
      return {
        ...state,
        isloading: true,
      };

    case ERROR_SHOPDATA:
      return {
        ...state,
        isloading: false,
        error: action.payload,
      };
    case GET_SHOPDATA:
      return {
        isloading: false,
        review: action.payload,
        error: null,
      };
    case ADD_SHOPDATA:
      return {
        isloading: false,
        review: state.review.concat(action.payload),
        error: null,
      };

    case DELETE_REVIEW:
      return {
        isloading: false,
        review: state.review.filter((v) => v.id !== action.payload),
        error: null,
      };

    case EDIT_REVIEW:
      return {
        isloading: false,
        review: state.review.map((v) =>
          v.id === action.payload.id ? action.payload : v
        ),
        error: null
      };
    default:
      return state;
  }
};
