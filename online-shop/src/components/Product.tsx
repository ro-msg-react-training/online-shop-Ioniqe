import React, { useState, useEffect } from 'react';
import '../Style.css';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

interface IProduct {
  id: string,
  name: string,
  category: string,
  price: string,
}

// function Product({ match }: RouteComponentProps<IProduct>) {
function Product({ match, addItemToCart }: any) {
  const history = useHistory();

  const mockData: IProduct = { id: "mock", name: "mock", category: "mock", price: "0" };
  const [uiForm, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(data =>  setProducts(data))
  }, [])


  var foundProduct = mockData;
  uiForm.forEach(product => {
    if (Number(product.id) === Number(match.params.id)) {
      foundProduct = product;
    }
  });


  //----------------------------------INCREASE QUANTITY
  const [quantity, increaseQuantity] = useState(1);
  const handleClick = () => increaseQuantity(newQuantity => newQuantity + 1);

  //-----------------------------------BACK
  let backButton = (): void => history.push("/products");

  //-----------------------------------BUY
  let buyProduct = (): void => {

    // const productToAdd: IShoppingCartProduct = {productId: Number(foundProduct.id), quantity: quantity};
    // addItemToCart(productToAdd);

    addItemToCart(foundProduct, quantity);
  }

  //-----------------------------------DELETE
  let deleteProduct = (): void => {
    fetch('http://localhost:4000/products/' + foundProduct.id, {
      method: 'DELETE',
    })
  }

  return (
    <>
      <h2>Details for {foundProduct.name}:</h2>
      <h3>category: {foundProduct.category}</h3>
      <h3>price: {foundProduct.price} </h3>
      <h3>quantity: {quantity} </h3>

      <Button variant="contained" color="primary" onClick={handleClick}> Increase quantity! </Button>
      <Button variant="contained" color="primary" onClick={buyProduct}> Buy </Button>
      <Button variant="contained" color="primary" onClick={deleteProduct}> Delete </Button>
      <Button variant="contained" color="primary" onClick={backButton}> Back </Button>
    </>
  );
}

export default Product;
