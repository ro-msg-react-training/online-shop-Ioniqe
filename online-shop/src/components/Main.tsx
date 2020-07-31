import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Home from './Home';
import Product from './Product';
// import '../Style.css';
import ShoppingCart from './ShoppingCart';
import EditProduct from './EditProduct';
import StockContainer from '../containers/StockContainer';
import { IProduct, Ready } from '../types/types';
import NewProductContainer from '../containers/NewProductContainer';

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
          <Route exact path='/test' component={NewProductContainer}/>
          <Route exact path='/products' component={StockContainer} />
          <Route exact path='/products/addNewItem/:validation/:id' render={props => <EditProduct match={props.match} />}></Route>
          <Route exact path='/products/:id' render={props => <Product match={props.match} addItemToCart={this.addProductToCart} />}></Route>
          <Route exact path='/shoppingCart'>
            <ShoppingCart customer="doej" productList={this.state.shoppingCartList} />
          </Route>

          <Route exact path='/products/editItem/:productId' render={props => <EditProduct match={props.match} />}></Route>
          {/* ^this would be more elegant with :id instead of :productId but i'll leave it like that bc I understand better how (some specific) routes work */}

        </Switch>
      </div>
    );
  }
}

export default Main;
