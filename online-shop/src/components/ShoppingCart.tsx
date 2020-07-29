import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    borderRadius: 10,
    padding: '0 80px',
    boxShadow: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
  },
});

const ShoppingCart: React.FC<StockProps> = ({ customer, productList }) => {
  const history = useHistory();

  let emptyCart = () : void => {
    productList.splice(0, productList.length);
  }

  //-----------------------------------------------HOME
  let homeButton = (): void => {
    history.push("/");
  }

  //-----------------------------------------------CHECKOUT
  let checkoutButton = (): void => {
    var products: Array<IShoppingCartProduct> = [];

    productList.forEach(product => {
      products.push({ productId: product.id, quantity: product.quantity } as IShoppingCartProduct);
    });

    fetch('http://localhost:4000/orders', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ customer, products })
    }).then(response => {
      if (response.ok) {
        // console.log(response);
        alert("Success!");
        emptyCart();
        homeButton();
      } else {
        alert("Error");
      }
    })
  }

  const classes = useStyles();
  var displayTable =
    <>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Product</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productList.map((product) => (
            <TableRow key={product.id}>
              <TableCell align="left">{product.name}</TableCell>
              <TableCell align="right">{product.category}</TableCell>
              <TableCell align="right">{product.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>

  return (
    <>
      <h1>Your shopping cart</h1>
      {displayTable}
      <div style={{ padding: 10 }}>
        <Button variant="contained" color="primary" style={{ left: '30%' }} onClick={checkoutButton}> Checkout </Button> &nbsp;&nbsp;&nbsp;
        <Button variant="contained" color="primary" style={{ left: '30%' }} onClick={homeButton}> Home </Button>
      </div>
    </>
  );
}

export default ShoppingCart;
