import { BASE_URL } from "../../utils/baseURL"
import axios from 'axios'
export const getProduct = () => () => {
    axios.get(BASE_URL + 'product')
    .then((response) => {
        console.log(response.data);
    }) 
    .catch((error) => {
        console.log(error);
    })
}