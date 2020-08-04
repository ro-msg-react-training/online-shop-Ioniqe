import { takeLatest, call, put } from "redux-saga/effects";
import { LOAD_STOCK } from "./stockTypes";
import { fetchStockRequest, fetchStock, fetchStockSuccess, fetchStockFailure } from "./stockActions";

function* loadStockAsync() {
  try {
    yield put(fetchStockRequest());
    const products = yield call(() => fetchStock());
    yield put(fetchStockSuccess(products))
  } catch (e) {
    yield put(fetchStockFailure(e))
  }
}

export function* loadStockWatcher() {
  yield takeLatest(LOAD_STOCK, loadStockAsync)
}

