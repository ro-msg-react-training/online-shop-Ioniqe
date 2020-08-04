import { IProductDetailsReady } from "../../types/types"
import { EDIT_PRODUCT_REQUEST, EDIT_PRODUCT_SUCCESS, EDIT_PRODUCT_FAILURE, EDIT_PRODUCT } from "./editProductTypes"

export const editProductRequest = () => {
  return {
    type: EDIT_PRODUCT_REQUEST,
  }
}

export const editProductSuccess = () => {
  return {
    type: EDIT_PRODUCT_SUCCESS,
  }
}

export const editProductFailure = (error: string) => {
  return {
    type: EDIT_PRODUCT_FAILURE,
    payload: error
  }
}

export const editProductAPI = (oldProduct: IProductDetailsReady) => {
  // return (dispatch: any) => { //this function doesn't have to be pure
  //   dispatch(editProductRequest(oldProduct))

  //   fetch(`http://localhost:4000/products/${oldProduct.id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(oldProduct)
  //   }).then(response => response.json())
  //     .then(data => {
  //       alert("The new product was saved!");
  //       dispatch(editProductSuccess())
  //     })
  //     .catch(error => {
  //       const errorMsg = error.message
  //       dispatch(editProductFailure(errorMsg))
  //     })
  // }

  return fetch(`http://localhost:4000/products/${oldProduct.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(oldProduct)
    }).then(response => response.json())
      
}

export const editProduct = (oldProduct: IProductDetailsReady) => {
  return {
    type: EDIT_PRODUCT,
    payload: oldProduct
  }
}
