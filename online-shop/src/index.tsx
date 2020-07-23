import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Stock from './components/Stock';
import * as serviceWorker from './serviceWorker';


const products = [
  { name: "chocolate", category: "sweets", price: "2 lei" },
  { name: "candy", category: "sweets", price: "1 lei" },
  { name: "milk", category: "dairy", price: "3 lei" }
];

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Stock products={products}/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
