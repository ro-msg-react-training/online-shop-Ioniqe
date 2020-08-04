import { takeLatest, call, put } from "redux-saga/effects";
import { IProductDetailsReady } from "../../types/types";
import { EDIT_PRODUCT } from "./editProductTypes";
import { editProductRequest, editProductAPI, editProductSuccess, editProductFailure } from "..";

interface Props {
  type: string,
  payload: IProductDetailsReady
}

function* editProductAsync(props: Props) {
  try {
    yield put(editProductRequest());
    yield call(() => editProductAPI(props.payload));
    yield put(editProductSuccess())
  } catch (e) {
    yield put(editProductFailure(e))
  }
}

export function* editProductWatcher() {
  yield takeLatest(EDIT_PRODUCT, editProductAsync)
}


