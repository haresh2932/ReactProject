import  {combineReducers}  from "redux";
import { facilitiesReducer } from "../reducer/facilities.reducer";

export const rootReducer =combineReducers({
    facilities: facilitiesReducer
})