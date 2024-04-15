import { combineReducers } from "redux";
import { facilitiesReducer } from "../reducer/facilities.reducer";
import { productReducer } from "../reducer/product.reducer";
import { reviewReducer } from "../reducer/review.reducer";
import { addReducer } from "../reducer/addcart.reducer";
import counterSlice from "../slice/counter.slice";

export const rootReducer = combineReducers({
  facilities: facilitiesReducer,
  product: productReducer,
  review: reviewReducer,
  addcart: addReducer,
  counter: counterSlice,
});
