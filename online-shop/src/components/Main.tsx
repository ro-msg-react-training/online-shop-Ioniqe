import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Stock from './Stock';
import Home from './Home';
import Product from './Product';
import '../Style.css';
import ShoppingCart from './ShoppingCart';

interface IProduct {
  id: string,
  name: string,
  category: string,
  price: string,
}

interface Ready {
  id: number,
  name: string,
  category: string,
  price: string,
  quantity: number
}

interface IState {
  uiForm: Array<IProduct>,
  shoppingCartList: Ready[],
}

class Main extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      uiForm: [],
      shoppingCartList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(data => this.setState({ uiForm: data }))
  }

  addProductToCart = (product: IProduct, newQuantity:number): void => {
    const newAddition: Ready = {id: Number(product.id), name: product.name, category:product.category, price: product.price, quantity: newQuantity};

    this.setState((state) => ({
      uiForm: this.state.uiForm,
      shoppingCartList: this.state.shoppingCartList.concat([newAddition]),
    }));
  }

  render() {
    const { uiForm } = this.state;

    return (
      <div className="center">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products'>
            <Stock products={uiForm} />
          </Route>
          <Route path='/products/:id' render={props => <Product match={props.match} addItemToCart={this.addProductToCart} />}></Route>
          <Route path='/shoppingCart'>
            <ShoppingCart customer="doej" productList={this.state.shoppingCartList} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Main;
