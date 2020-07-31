import { IProductDetailsReady } from "../../types/types"
import {
  FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE
} from "./productTypes"

export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST
  }
}

export const fetchProductSuccess = (product: IProductDetailsReady) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: product
  }
}

export const fetchProductFailure = (error: string) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error
  }
}

export const deleteProductRequest = () => {
  return {
    type: DELETE_PRODUCT_REQUEST
  }
}

export const deleteProductSuccess = () => {
  return {
    type: DELETE_PRODUCT_SUCCESS,
  }
}

export const deleteProductFailure = (error: string) => {
  return {
    type: DELETE_PRODUCT_FAILURE,
    payload: error
  }
}

export const fetchProduct = (id: string) => {
  console.log("ID: " + id);
  return (dispatch: any) => { //this function doesn't have to be pure
    dispatch(fetchProductRequest())
    fetch(`http://localhost:4000/products/${id}`)
      .then(response => response.json())
      .then(data => {
        dispatch(fetchProductSuccess(data))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchProductFailure(errorMsg))
      })
  }
}

export const deleteProduct = (id: string) => {
  return (dispatch: any) => { //this function doesn't have to be pure

    dispatch(deleteProductRequest())
    // fetch(`http://localhost:4000/products/${id}`, {
    //   method: 'DELETE',
    // }).then(response => response.json())
    //   .then(data => {
    //     dispatch(deleteProductSuccess())
    //   })
    //   .catch(error => {
    //     const errorMsg = error.message
    //     dispatch(deleteProductFailure(errorMsg))
    //   })

    fetch(`http://localhost:4000/products/${id}`, {
      method: 'DELETE',
    })
  }
}