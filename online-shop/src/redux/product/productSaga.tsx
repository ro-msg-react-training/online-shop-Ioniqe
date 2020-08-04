import { takeLatest, call, put } from "redux-saga/effects";
import { LOAD_PRODUCT, DELETE_PRODUCT } from "./productTypes";
import { fetchProductRequest, fetchProduct, fetchProductSuccess, fetchProductFailure } from "..";
import { deleteProductSuccess, deleteProductRequest, deleteProductAPI, deleteProductFailure } from "./productActions";

interface Props {
  type: string,
  payload: string
}

function* loadProductAsync(props: Props) {
  try {
    yield put(fetchProductRequest());
    const product = yield call(() => fetchProduct(props.payload));
    yield put(fetchProductSuccess(product))
  } catch (e) {
    yield put(fetchProductFailure(e))
  }
}

export function* loadProductWatcher() {
  yield takeLatest(LOAD_PRODUCT, loadProductAsync)
}

function* deleteProductAsync(props: Props) {
  try {
    yield put(deleteProductRequest());
    yield call(() => deleteProductAPI(props.payload));
    yield put(deleteProductSuccess())
  } catch (e) {
    yield put(deleteProductFailure(e))
  }
}

export function* deleteProductWatcher() {
  yield takeLatest(DELETE_PRODUCT, deleteProductAsync)
}

