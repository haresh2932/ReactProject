import { combineReducers } from "redux";
import { facilitiesReducer } from "../reducer/facilities.reducer";
import { productReducer } from "../reducer/product.reducer";
import { shopReducer } from "../reducer/shopDetail.reducer";

export const rootReducer = combineReducers({
  facilities: facilitiesReducer,
  product: productReducer,
  shopData: shopReducer,
});
