import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

interface Ready {
  id: number,
  name: string,
  category: string,
  price: string,
  quantity: number
}

interface IShoppingCartProduct {
  productId: number,
  quantity: number,
}

interface StockProps {
  customer: string,
  productList: Ready[],
};

const ShoppingCart: React.FC<StockProps> = ({ customer, productList }) => {
  const history = useHistory();

  let homeButton = (): void => {
    history.push("/");
  }

  let checkoutButton = (): void => {
    var products: Array<IShoppingCartProduct> = [];

    productList.forEach(product => { 
      products.push({ productId: product.id, quantity: product.quantity } as IShoppingCartProduct);
    });

    fetch('http://localhost:4000/orders', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ customer,  products })
    }).then(response => {
      if (response.ok) {
        console.log(response);
        return;
      } else {
        alert("Error");
      }
    })
  }

  var element = productList === undefined ? "Shopping Cart empty" : productList.map((product) =>
    <div key={product.id}>
      <h2> user: {customer} </h2>
      <h3> id: {product.id} </h3>
      <h3> name: {product.name} </h3>
      <h3> category: {product.category} </h3>
      <h3> quantity: {product.quantity} </h3>
    </div>
  )

  return (
    <>
      <h1>You're a shopaholic, Harry</h1>
      {element}
      <Button variant="contained" color="primary" onClick={checkoutButton}> Checkout </Button>
      <Button variant="contained" color="primary" onClick={homeButton}> Home </Button>
    </>
  );
}

export default ShoppingCart;