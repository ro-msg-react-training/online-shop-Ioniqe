import React, { useState } from 'react';
import '../Style.css';
import Button from '@material-ui/core/Button';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import Data from "../data.json"

interface Prod {
  name: string,
  category: string,
  price: string
}

function Product({ match }: RouteComponentProps<Prod>) {
  const history = useHistory();
  const products = Data;
  const found = products.find(x => x.name === match.params.name); //product

  const initialPrice = Number(found!.price.match('[0-9]+'));
  const currency = found!.price.match('[a-z]+');

  const [newPrice, increasePrice] = useState(initialPrice);
  const handleClick = () => increasePrice(newPrice => newPrice + 1);

  function backButton() {
    history.push("/products");
  }

  var cart:string[] = [];
  function buyProduct() {
    cart.push(found!.name);
    console.log(cart);
    alert("You bought " + found?.name);
  }

  return (
    <div>
      <div>
        <h2>Details for {found!.name}:</h2>
        <h3>category: {found!.category}</h3>
        <h3>price: {newPrice} {currency}</h3>
      </div>

      <div>
        <Button variant="contained" color="primary" onClick={handleClick}> Increase price! </Button>
        <Button variant="contained" color="primary" onClick={buyProduct}> Buy </Button>
        <Button variant="contained" color="primary" onClick={backButton}> Back </Button>
      </div>

    </div>
  );
}

export default Product;
