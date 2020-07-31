import { IProductDetailsReady } from "../../types/types"
import { EDIT_PRODUCT_REQUEST, EDIT_PRODUCT_SUCCESS, EDIT_PRODUCT_FAILURE } from "./editProductTypes"

export const editProductRequest = (newProduct: IProductDetailsReady) => {
  return {
    type: EDIT_PRODUCT_REQUEST,
    payload: newProduct
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

export const editProduct = (oldProduct: IProductDetailsReady) => {
  let productString = JSON.stringify({ oldProduct });
  let newProduct = productString.slice(14);
  newProduct = newProduct.slice(0, -1);

  return (dispatch: any) => { //this function doesn't have to be pure
    dispatch(editProductRequest(oldProduct))

    fetch(`http://localhost:4000/products/${oldProduct.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: newProduct
    }).then(response => response.json())
      .then(data => {
        alert("The new product was saved!");
        dispatch(editProductSuccess())
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(editProductFailure(errorMsg))
      })
  }
}
