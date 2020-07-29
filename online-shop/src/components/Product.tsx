import React, { useState, useEffect } from 'react';
import '../Style.css';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { Table, TableHead, TableRow, TableCell, TableBody, makeStyles } from '@material-ui/core';

interface IProduct {
  id: string,
  name: string,
  category: string,
  price: string,
}

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    borderRadius: 10,
    padding: '0 80px',
    boxShadow: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
  },
});

function Product({ match, addItemToCart }: any) {
  const history = useHistory();
  const [uiForm, setProducts] = useState<IProduct[]>([]);
  const mockData: IProduct = { id: "mock", name: "mock", category: "mock", price: "0" };

  //fetch data from backend
  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  //find product with given id from match
  var foundProduct = mockData;
  uiForm.forEach(product => {
    if (Number(product.id) === Number(match.params.id)) {
      foundProduct = product;
    }
  });

  //----------------------------------INCREASE QUANTITY
  const [quantity, increaseQuantity] = useState(1);
  const handleIncreaseQuantity = () => increaseQuantity(newQuantity => newQuantity + 1);

  //-----------------------------------BACK
  let backButton = (): void => history.push("/products");

  //-----------------------------------BUY
  let buyProduct = (): void => {
    addItemToCart(foundProduct, quantity);
    alert(`You put ${quantity} ${foundProduct.name} in your cart`);
    backButton();
  }

  //-----------------------------------DELETE
  let deleteProduct = (): void => {
    fetch('http://localhost:4000/products/' + foundProduct.id, {
      method: 'DELETE',
    })
  }

  //TODO move design into a new file
  const classes = useStyles();
  var displayTable =
    <>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={foundProduct.id}>
            <TableCell align="left">{foundProduct.name}</TableCell>
            <TableCell align="right">{foundProduct.category}</TableCell>
            <TableCell align="right">{foundProduct.price}</TableCell>
            <TableCell align="right">{quantity}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>

  return (
    <>
      <h1>{foundProduct.name} details</h1>
      {displayTable}
      <div style={{ padding: 10 }}>
        <Button variant="contained" color="primary" style={{ borderRadius: 10 }} onClick={handleIncreaseQuantity}> Increase quantity! </Button> &nbsp;
        <Button variant="contained" color="primary" style={{ borderRadius: 10 }} onClick={buyProduct}> Buy </Button> &nbsp;
        <Button variant="contained" color="primary" style={{ borderRadius: 10 }} onClick={deleteProduct}> Delete </Button> &nbsp;
        <Button variant="contained" color="primary" style={{ borderRadius: 10 }} onClick={backButton}> Back </Button> &nbsp;
      </div>
    </>
  );
}

export default Product;
