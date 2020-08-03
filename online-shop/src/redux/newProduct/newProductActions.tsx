import { ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE } from "./newProductTypes"
import { IProductDetailsReady } from "../../types/types"

export const addProductRequest = (newProduct: IProductDetailsReady) => {
  return {
    type: ADD_PRODUCT_REQUEST,
    payload: newProduct
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

export const addProduct = (oldProduct: IProductDetailsReady) => {
  // let productString = JSON.stringify({ oldProduct });
  // let newProduct = productString.slice(14);
  // newProduct = newProduct.slice(0, -1);

  // console.log(JSON.stringify(newProduct));

  return (dispatch: any) => { //this function doesn't have to be pure
    dispatch(addProductRequest(oldProduct))
    fetch('http://localhost:4000/products', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(oldProduct)
    }).then(response => response.json())
      .then(data => {
        alert("The new product was saved!");
        dispatch(addProductSuccess())
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(addProductFailure(errorMsg))
      })
  }
}
