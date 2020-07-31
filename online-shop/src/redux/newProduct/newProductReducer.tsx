import { ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE } from "./newProductTypes"
import { IProductDetailsReady } from "../../types/types"

export interface NewProductState{
  loading: boolean,
  newProduct: IProductDetailsReady,
  error: string
}

const initialState:NewProductState = {
  loading: false,
  newProduct: {id: 100, name: "mock", category: "mock", price: 0 , image: "mock", description: "mock"},
  error: ''
}

const newProductReducer = (state = initialState, action: { type: string, payload: IProductDetailsReady }) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ADD_PRODUCT_SUCCESS:
      return {
        loading: false,
        newProduct: action.payload,
        error: ''
      }
    case ADD_PRODUCT_FAILURE:
      return {
        loading: false,
        newProduct: action.payload
      }
    default: return state
  }
}

export default newProductReducer