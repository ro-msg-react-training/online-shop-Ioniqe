import { takeLatest, call, put } from "redux-saga/effects";
import { addProductRequest, addProductAPI, addProductSuccess, addProductFailure } from "..";
import { ADD_PRODUCT } from "./newProductTypes";
import { IProductDetailsReady } from "../../types/types";

interface Props {
  type: string,
  payload: IProductDetailsReady
}

function* addProductAsync(props: Props) {
  try {
    yield put(addProductRequest());
    yield call(() => addProductAPI(props.payload));
    yield put(addProductSuccess())
  } catch (e) {
    yield put(addProductFailure(e))
  }
}

export function* addProductWatcher() {
  yield takeLatest(ADD_PRODUCT, addProductAsync)
}


