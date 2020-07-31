import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_FAILURE } from "./productTypes"
import { IProduct } from "../../types/types"

export interface ProductListState{
  loading: boolean,
  products: IProduct[],
  error: string
}

const initialState:ProductListState = {
  loading: false,
  products: [],
  error: ''
}

const productReducer = (state = initialState, action: { type: string, payload: IProduct[] }) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        error: ''
      }
    case FETCH_PRODUCTS_FAILURE:
      return {
        loading: false,
        products: action.payload
      }
    default: return state
  }
}

export default productReducer