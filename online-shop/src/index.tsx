import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Product from './components/Product';
import Stock from './components/Stock';
import * as serviceWorker from './serviceWorker';

const products: Product[] = [];

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Product name="Chocolate" category="Sweets" price="2 lei" />
    <Stock products={products}/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
