import axios from "axios";
import { ADD_SHOPDATA, GET_SHOPDATA } from "../ActionType";
import { BASE_URL } from "../../utils/baseURL";

export const addShopDetail = (data) => async (dispatch) => {
  try {
    await axios
      .post(BASE_URL + "review", data)
      .then((response) =>
        dispatch({ type: ADD_SHOPDATA, payload: response.data })
      )
      .catch((error) => console.log(error));
  } catch (error) {}
};

export const displayReview = () => async (dispatch) => {
  try {
    await axios
      .get(BASE_URL + "review")
      .then((respons) =>
        dispatch({ type: GET_SHOPDATA, payload: respons.data })
      )
      .catch((error) => console.log(error));
  } catch (error) {}
};
