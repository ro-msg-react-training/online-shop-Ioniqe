import { all } from 'redux-saga/effects'
import { loadStockWatcher } from './stock/stockSaga'
import { loadProductWatcher, deleteProductWatcher } from './product/productSaga'
import { addProductWatcher } from './newProduct/newProductSaga'
import { editProductWatcher } from './editProduct/editProductSaga'
  
export default function* rootSaga() {
  yield all([
    loadStockWatcher(),
    loadProductWatcher(),
    deleteProductWatcher(),
    addProductWatcher(),
    editProductWatcher(),
  ])
}