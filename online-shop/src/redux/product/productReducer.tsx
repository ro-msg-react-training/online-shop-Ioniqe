import { IProductDetailsReady } from "../../types/types"
import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE } from "./productTypes"

export interface ProductState {
  loading: boolean,
  product: IProductDetailsReady,
  error: string
}

const initialState: ProductState = {
  loading: false,
  product: { id: 100, name: "mock", category: "mock", price: 0, image: "mock", description: "mock" },
  error: ''
}

const productReducer = (state = initialState, action: { type: string, payload: IProductDetailsReady }) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.payload,
        error: ''
      }
    case FETCH_PRODUCT_FAILURE:
      return {
        loading: false,
        product: action.payload
      }
    case DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true
      }
    case DELETE_PRODUCT_SUCCESS:
      return {
        loading: false,
        error: ''
      }
    case DELETE_PRODUCT_FAILURE:
      return {
        loading: false,
        error: action.payload
      }
    default: return state
  }
}

export default productReducer