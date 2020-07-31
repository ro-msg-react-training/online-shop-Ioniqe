import { combineReducers } from 'redux'
import stockReducer from './stock/stockReducer'
import newProductReducer from './newProduct/newProductReducer'
import editProductReducer from './editProduct/editProductReducer'
import productReducer from './product/productReducer'

const rootReducer = combineReducers({
  stock: stockReducer,
  newProduct: newProductReducer,
  editProduct: editProductReducer,
  product: productReducer,
})

export default rootReducer
