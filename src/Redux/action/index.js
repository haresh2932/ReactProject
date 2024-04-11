import { combineReducers } from "redux";
import { facilitiesReducer } from "../reducer/facilities.reducer";
import { productReducer } from "../reducer/product.reducer";
import { reviewReducer } from "../reducer/review.reducer";

export const rootReducer = combineReducers({
  facilities: facilitiesReducer,
  product: productReducer,
  review: reviewReducer,
});
