import { IProductDetailsReady } from "../../types/types"
import { EDIT_PRODUCT_REQUEST, EDIT_PRODUCT_SUCCESS, EDIT_PRODUCT_FAILURE } from "./editProductTypes"

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

const editProductReducer = (state = initialState, action: { type: string, payload: IProductDetailsReady }) => {
  switch (action.type) {
    case EDIT_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true
      }
    case EDIT_PRODUCT_SUCCESS:
      return {
        loading: false,
      }
    case EDIT_PRODUCT_FAILURE:
      return {
        loading: false,
        newProduct: action.payload
      }
    default: return state
  }
}

export default editProductReducer