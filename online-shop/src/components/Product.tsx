import React, { useState, useEffect } from 'react';
import '../Style.css';
import Button from '@material-ui/core/Button';
import { RouteComponentProps, useHistory } from 'react-router-dom';

interface IProduct {
  id: string,
  name: string,
  category: string,
  price: string,
}

function Product({ match }: RouteComponentProps<IProduct>) {

  const history = useHistory();

  const mockData: IProduct = { id: "mock", name: "mock", category: "mock", price: "0" };
  const [uiForm, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    console.log("FETCHED")
    fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(data => { setProducts(data); console.log(data) })
  }, [])


  var foundProduct = mockData;
  uiForm.forEach(product => {
    if (Number(product.id) === Number(match.params.id)) {
      foundProduct = product;
    }
  });

  // const initialPrice = foundProduct ? Number(foundProduct.price) : 'Product is not available';
  
  //TODO: put quantity into IProduct
  const [quantity, increaseQuantity] = useState(1);
  const handleClick = () => increaseQuantity(newQuantity => newQuantity + 1);

  let backButton = (): void => history.push("/products");
  
  var cart: string[] = [];
  let buyProduct = (): void => {
    cart.push(foundProduct!.name);
    console.log(cart);
  }

  return (
    <>
      <h2>Details for {foundProduct.name}:</h2>
      <h3>category: {foundProduct.category}</h3>
      <h3>price: {foundProduct.price} </h3>
      <h3>quantity: {quantity} </h3>

      <Button variant="contained" color="primary" onClick={handleClick}> Increase quantity! </Button>
      <Button variant="contained" color="primary" onClick={buyProduct}> Buy </Button>
      <Button variant="contained" color="primary" onClick={backButton}> Back </Button>
    </>
  );
}

export default Product;
