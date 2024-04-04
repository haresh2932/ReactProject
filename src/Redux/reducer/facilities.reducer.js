import {
  ADD_FACILITIES,
  DELETE_FACILITIES,
  EDIT_FACILITIES,
  LOADING_FACILITIES,
} from "../ActionType";

const initialState = {
  isloading: false,
  facilities: [],
  error: null,
};

export const facilitiesReducer = (state = initialState, action) => {
  console.log("facility",action);
  switch (action.type) {
    case LOADING_FACILITIES:
      return {
        ...state,
        isloading: true,
      };

    case ADD_FACILITIES:
      return {
        ...state,
        isloading: false,
        facilities: state.facilities.concat(action.payload),
      };

    case DELETE_FACILITIES:
      return {
        ...state,
        isloading: false,
        facilities: state.facilities.filter((v) => v.id !== action.payload),
      };

    case EDIT_FACILITIES:
      return {
        ...state,
        isloading: false,
        facilities: state.facilities.map((v) => {
          if (v.id === action.payload.id) {
            return action.payload;
          } else {
            return v;
          }
        }),
      };

    default:
      return state;
  }
};
