import React from 'react';
import '../Style.css';

interface ProductProps {
  name: string;
  category?: string; //? is so it doesn't give an error in case i don't want to give a category/price  
  price?: string;
};

class Product extends React.Component<ProductProps> {
  render() { 
    return (
      <div className = "center">
        <h2>Details for {this.props.name}:</h2>
        <h3>category: {this.props.category}</h3>
        <h3>price: {this.props.price}</h3>
      </div>
    );
  }
}

export default Product;
