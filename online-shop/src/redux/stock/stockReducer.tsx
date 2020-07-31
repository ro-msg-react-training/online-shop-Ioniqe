import { IProduct } from "../../types/types"
import { FETCH_STOCK_REQUEST, FETCH_STOCK_SUCCESS, FETCH_STOCK_FAILURE } from "./stockTypes"

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

const stockReducer = (state = initialState, action: { type: string, payload: IProduct[] }) => {
  switch (action.type) {
    case FETCH_STOCK_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_STOCK_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        error: ''
      }
    case FETCH_STOCK_FAILURE:
      return {
        loading: false,
        products: action.payload
      }
    default: return state
  }
}

export default stockReducer