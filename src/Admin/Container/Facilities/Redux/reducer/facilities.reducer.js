import { ADD_FACILITIES } from "../ActionType";

const initialState = {
  isloading: false,
  facilities: [],
  error: null,
};

export const facilitiesReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_FACILITIES:
      return {
        ...state,
        facilities: state.facilities.concat(action.payload),
      };

    default:
      return state;
  }
};
