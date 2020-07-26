import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Stock from './Stock';
import Data from "../data.json"
import Home from './Home';
import Product from './Product';
import '../Style.css';

function Main() {
  const products = Data;

  return (
    <div className="center">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products'>
          <div className="center">
            <Stock products={products} />
          </div>
        </Route>
        <Route path='/products/:name' component={Product} />
      </Switch>
    </div>
  );
}

export default Main;