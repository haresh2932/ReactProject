import { BASE_URL } from "../../utils/baseURL";
import axios from "axios";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  PRODUCT_DATA,
} from "../ActionType";
export const getProduct = () => async (dispatch) => {
  try {
    await axios
      .get(BASE_URL + "product")
      .then((response) => {
        dispatch({ type: PRODUCT_DATA, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {}
};

export const addProduct = (data) => async (dispatch) => {
  try {
    await axios
      .post(BASE_URL + "product", data)
      .then((response) =>
        dispatch({ type: ADD_PRODUCT, payload: response.data })
      )
      .catch((error) => console.log(error));
  } catch (error) {}
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios
      .delete(BASE_URL + "product/" + id)
      .then((response) =>
        dispatch({ type: DELETE_PRODUCT, payload: id })
      )
      .catch((error) => console.log(error));
  } catch (error) {}
};

export const editProduct = (data) => async (dispatch) => {
  try {
    await axios
      .put(BASE_URL + "product/" + data.id)
      .then((response) =>
        dispatch({ type: EDIT_PRODUCT, payload: data })
      )
      .catch((error) => console.log(error));
  } catch (error) {}
};
