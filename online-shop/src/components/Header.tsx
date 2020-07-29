import { useHistory } from 'react-router-dom'
import React from 'react';
import '../Style.css';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  shadow: {
    boxShadow: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
  },
});

function Header() {
  const history = useHistory();
  const classes = useStyles();

  //-----------------------------------HOME
  let gotoHome = (): void => history.push("/");

  //-----------------------------------PRODUCTS
  let gotoProducts = (): void => history.push("/products");

  //-----------------------------------SHOPPING CART
  let gotoShoppingCart = (): void => history.push("/shoppingCart");

  return (
    <header>
      <nav className={classes.shadow}>
        <ul>
          <Button variant="contained" color="primary" style={{ borderRadius: 10 }} onClick={gotoHome}> Home </Button> &nbsp;
          <Button variant="contained" color="primary" style={{ borderRadius: 10 }} onClick={gotoProducts}> Products </Button> &nbsp;
          <Button variant="contained" color="primary" style={{ borderRadius: 10 }} onClick={gotoShoppingCart}> Shopping Cart </Button> &nbsp;
        </ul>
      </nav>
    </header>
  );
}

export default Header;
