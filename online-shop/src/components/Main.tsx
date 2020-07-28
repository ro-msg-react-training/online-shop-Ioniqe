import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Stock from './Stock';
import Home from './Home';
import Product from './Product';
import '../Style.css';

interface IProduct {
  id: string,
  name: string,
  category: string,
  price: string,
}

interface IState {
  uiForm: Array<IProduct>
}

class Main extends React.Component<{}, IState> {
  state: IState = {
    uiForm: []
  }

  componentDidMount() {
    fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(data =>  this.setState({ uiForm: data }))
  }

  render() {
    const { uiForm } = this.state;

    // console.log(uiForm);

    return (
      <div className="center">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products'>
            <div className="center">
              <Stock products={uiForm} />
            </div>
          </Route>
          <Route path='/products/:id' component={Product} />
        </Switch>
      </div>
    );
  }
}

export default Main;