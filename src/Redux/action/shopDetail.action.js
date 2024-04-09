import axios from "axios";
import {
  ADD_SHOPDATA,
  ERROR_SHOPDATA,
  GET_SHOPDATA,
  LOADING_SHOPDATA,
} from "../ActionType";
import { BASE_URL } from "../../utils/baseURL";

const loagindShopDetailes = () => async (dispatch) => {
  dispatch({ type: LOADING_SHOPDATA });
};

const errorShopDetaiols = (error) => async (dispatch) => {
  dispatch({ type: ERROR_SHOPDATA, payload: error });
};

export const addShopDetail = (data) => async (dispatch) => {
  try {
    // dispatch(loagindShopDetailes());
    await axios
      .post(BASE_URL + "review", data)
      .then((response) =>
        dispatch({ type: ADD_SHOPDATA, payload: response.data })
      )
      .catch((error) => errorShopDetaiols(error.message));
  } catch (error) {}
};

export const displayReview = () => async (dispatch) => {
  try {
    dispatch(loagindShopDetailes());

    await axios
      .get(BASE_URL + "review")
      .then((respons) =>
        dispatch({ type: GET_SHOPDATA, payload: respons.data })
      )
      .catch((error) => console.log(error));
  } catch (error) {}
};
