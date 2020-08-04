import { ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE, ADD_PRODUCT } from "./newProductTypes"
import { IProductDetailsReady } from "../../types/types"

export const addProductRequest = () => {
  return {
    type: ADD_PRODUCT_REQUEST,
  }
}

export const addProductSuccess = () => {
  return {
    type: ADD_PRODUCT_SUCCESS,
  }
}

export const addProductFailure = (error: string) => {
  return {
    type: ADD_PRODUCT_FAILURE,
    payload: error
  }
}

export const addProductAPI = (oldProduct: IProductDetailsReady) => {
  // return (dispatch: any) => { //this function doesn't have to be pure
  //   dispatch(addProductRequest(oldProduct))
  //   fetch('http://localhost:4000/products', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(oldProduct)
  //   }).then(response => response.json())
  //     .then(data => {
  //       alert("The new product was saved!");
  //       dispatch(addProductSuccess())
  //     })
  //     .catch(error => {
  //       const errorMsg = error.message
  //       dispatch(addProductFailure(errorMsg))
  //     })
  // }

  return fetch('http://localhost:4000/products', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(oldProduct)
  }).then(response => response.json())


}

export const addProduct = (oldProduct: IProductDetailsReady) => {
  return {
    type: ADD_PRODUCT,
    payload: oldProduct
  }
}
