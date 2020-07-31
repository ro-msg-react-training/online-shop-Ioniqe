import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Home from './Home';
import ShoppingCart from './ShoppingCart';
import StockContainer from '../containers/StockContainer';
import { IProduct, Ready } from '../types/types';
import ModifyProductContainer from '../containers/ModifyProductContainer';
import ProductContainer from '../containers/ProductContainer';

interface IState {
  shoppingCartList: Ready[],
}

class Main extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      shoppingCartList: [],
    };
  }

  addProductToCart = (product: IProduct, newQuantity: number): void => {
    const newAddition: Ready = { id: Number(product.id), name: product.name, category: product.category, price: product.price, quantity: newQuantity };

    this.setState((state) => ({
      shoppingCartList: this.state.shoppingCartList.concat([newAddition]),
    }));
  }

  render() {

    return (
      <div className="center">
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/test/:id' component={ProductContainer} /> */}
          <Route exact path='/product/:id' render={props => <ProductContainer match={props.match} addItemToCart={this.addProductToCart} />}></Route>
          {/* <Route exact path='/test/:id'> <ProductContainer match={props.match} addItemToCart={this.addProductToCart} /> </Route> */}

          <Route exact path='/modifyItem/:validation/:id' component={ModifyProductContainer}/>
          <Route exact path='/products' component={StockContainer} />
          {/* <Route exact path='/products/:id' render={props => <Product match={props.match} addItemToCart={this.addProductToCart} />}></Route> */}
          <Route exact path='/shoppingCart'>
            <ShoppingCart customer="doej" productList={this.state.shoppingCartList} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Main;
