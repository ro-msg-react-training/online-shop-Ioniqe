import { combineReducers } from 'redux'
import productReducer from './products/productReducer'
import newProductReducer from './newProduct/newProductReducer'

const rootReducer = combineReducers({
  product: productReducer,
  newProduct: newProductReducer,
})

export default rootReducer
