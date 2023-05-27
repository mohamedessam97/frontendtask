import axios from "axios";
import { startLoading, endLoading, alertError } from "./statusActions";
import {
  SEARCH_PRODUCTS,
  CLEAR_FILTER,
  GET_PRODUCTS_CATEGORY,
  GET_SORTED_PRODUCTS,
  GET_ALL_PRODUCTS,
  GET_PAGE_PRODUCTS,
} from "../actionTypes";

export const getAllProducts = () => (dispatch) => {   // getting the products from the api
// dipatch action for start loading
  dispatch(startLoading());
  axios
    .get("https://dummyjson.com/products?limit=0")
    .then((response) => {
		// dispatch action for save the data in the store
		dispatch(getAllProductsSuccess(response.data));
		//dispatch action for end loading
      dispatch(endLoading());
    })
    .catch((error) => {
		//dispatch when error catched for handling error
      dispatch(alertError(error.message));
    });
};

export const getPageProducts = (page) => (dispatch) => { // getting the products by pagination
  dispatch(startLoading());
  axios
    .get("https://dummyjson.com/products?limit=12&skip=" + page * 12)
    .then((response) => {
      dispatch({
        type: GET_PAGE_PRODUCTS,
        payload: response.data,
      });
      dispatch(endLoading());
    })
    .catch((error) => {
      dispatch(alertError(error.message));
    });
};

export const getAllProductsSuccess = (products) => ({
  type: GET_ALL_PRODUCTS,
  payload: products,
});
export const getSortedProducts = (sort) => ({ // used in sort products
  type: GET_SORTED_PRODUCTS, 
  payload: sort,
});
export const getProductsCategory = (category) => (dispatch) => { // used in getting products by category
  if (category === "fragrances") {
    dispatch(alertError("Error in fetching data")); // case for stmulate error in this case
  } else {
    dispatch({
      type: GET_PRODUCTS_CATEGORY,
      payload: category,
    });
  }
};

export const clearFilter = () => ({ // for clearing filters
  type: CLEAR_FILTER,
});

export const searchProducts = ({ filter, keyword }) => { // for search in products
  return {
    type: SEARCH_PRODUCTS,
    payload: { filter, keyword },
  };
};
