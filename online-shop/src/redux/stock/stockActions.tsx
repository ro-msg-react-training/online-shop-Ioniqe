import { FETCH_STOCK_REQUEST, FETCH_STOCK_SUCCESS, FETCH_STOCK_FAILURE } from "./stockTypes"
import { IProduct } from "../../types/types"


export const fetchStockRequest = () => {
  return {
    type: FETCH_STOCK_REQUEST
  }
}

export const fetchStockSuccess = (products: IProduct[]) => {
  return {
    type: FETCH_STOCK_SUCCESS,
    payload: products
  }
}

export const fetchStockFailure = (error: string) => {
  return {
    type: FETCH_STOCK_FAILURE,
    payload: error
  }
}

export const fetchStock = () => {
  return (dispatch: any) => { //this function doesn't have to be pure
    dispatch(fetchStockRequest())
    fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(data => {
        dispatch(fetchStockSuccess(data))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchStockFailure(errorMsg))
      })
  }
}