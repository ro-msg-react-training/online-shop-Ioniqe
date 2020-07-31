import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from "./productTypes"
import { IProduct } from "../../types/types"


export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST
  }
}

export const fetchProductsSuccess = (products: IProduct[]) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  }
}

export const fetchProductsFailure = (error: string) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  }
}

export const fetchProducts = () => {
  return (dispatch: any) => { //this function doesn't have to be pure
    dispatch(fetchProductsRequest())
    fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(data => {
        dispatch(fetchProductsSuccess(data))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchProductsFailure(errorMsg))
      })
  }
}