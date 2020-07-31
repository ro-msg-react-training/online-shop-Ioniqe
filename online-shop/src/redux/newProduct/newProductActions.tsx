import { ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE } from "./newProductTypes"
import { IProductDetailsReady } from "../../types/types"

export const addProductRequest = (newProduct: IProductDetailsReady) => {
  return {
    type: ADD_PRODUCT_REQUEST,
    payload: newProduct
  }
}

export const addProductSuccess = () => {//newProduct: IProductDetailsReady
  return {
    type: ADD_PRODUCT_SUCCESS,
    // payload: newProduct
  }
}

export const addProductFailure = (error: string) => {
  return {
    type: ADD_PRODUCT_FAILURE,
    payload: error
  }
}

export const addProduct = (oldProduct: IProductDetailsReady) => {
  console.log("newProductActions");
  var productString = JSON.stringify({ oldProduct });
  var newProduct = productString.slice(14);
  newProduct = newProduct.slice(0, -1);
  console.log(newProduct);

  return (dispatch: any) => { //this function doesn't have to be pure
    console.log("test1");
    dispatch(addProductRequest(oldProduct))
    console.log("test2");
    fetch('http://localhost:4000/products', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: newProduct
    }).then(response => response.json())
      .then(data => {
        console.log("Merge ok");
        dispatch(addProductSuccess())
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(addProductFailure(errorMsg))
      })
  }
}
