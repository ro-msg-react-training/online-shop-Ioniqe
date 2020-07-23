import React, { useState } from 'react';
import '../Style.css';

function Product(props: { name: string, category?: string, price: string }) {
  const initialPrice = Number(props.price.match('[0-9]+'));
  const currency = props.price.match('[a-z]+');

  const [newPrice, increasePrice] = useState(initialPrice);
  const handleClick = () => increasePrice(newPrice => newPrice + 1);

  return (
    <div className="center">
      <h2>Details for {props.name}:</h2>
      <h3>category: {props.category}</h3>

      <div>
        <h3>price: {newPrice} {currency}</h3>
        <button onClick={handleClick}>Increase price! </button>
      </div>

    </div>
  );
}

export default Product;
