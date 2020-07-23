import React from 'react';
import Product from './Product';
import '../Style.css';


interface StockProps {
  products: Product[];
};

//https://reactjs.org/docs/lists-and-keys.html#basic-list-component
class Stock extends React.Component<StockProps> {
  render() {
    const productList = this.props.products;
    const listProducts = productList.map(
      (product) => <li>{product.props.name}</li>
    );

    return (
      <div>
        <h2 className="center">List of products:</h2>
        <ul>{listProducts}</ul>
      </div>
    );
  }
}

export default Stock;