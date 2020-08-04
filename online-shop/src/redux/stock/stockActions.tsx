import { FETCH_STOCK_REQUEST, FETCH_STOCK_SUCCESS, FETCH_STOCK_FAILURE, LOAD_STOCK } from "./stockTypes"
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
  return fetch('http://localhost:4000/products').then(response => response.json())
}

export const loadStock = () => {
  return {
    type: LOAD_STOCK,
  }
}
