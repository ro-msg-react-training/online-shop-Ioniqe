import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import { ProductListState } from "./products/productReducer";

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

const logger = createLogger();
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk, // lets us dispatch() functions
      logger // neat middleware that logs actions
    )
  )
)

export interface AppState {
  productList: ProductListState;
}

export default store