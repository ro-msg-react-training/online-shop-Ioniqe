import React, { useState, useEffect } from 'react';
import '../Style.css';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Box } from '@material-ui/core';
import { IProductDetails } from '../types/types';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    boxShadow: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    padding: theme.spacing(3),
  },
  table: {
    minWidth: 500,
    padding: '0 80px',
    boxShadow: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
  },
  image: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

// function Product({ match, addItemToCart }: any) {
function Product({ match } :any, {addItemToCart }: any) {
  const history = useHistory();
  const mockData: IProductDetails = { id: "mock", name: "mock", category: "mock", price: "0", image: "mock", description: "mock" };
  const [foundProduct, setProduct] = useState<IProductDetails>(mockData);

  //TODO
  useEffect(() => {
    fetch(`http://localhost:4000/products/${match.params.id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
  }, [match.params.id])

  //----------------------------------INCREASE QUANTITY
  const [quantity, increaseQuantity] = useState(1);
  const handleIncreaseQuantity = () => increaseQuantity(newQuantity => newQuantity + 1);

  //-----------------------------------BACK
  let backButton = (): void => history.push("/products");

  //-----------------------------------EDIT
  let editButton = (): void => history.push(`/modifyItem/0/${foundProduct.id}`);

  //-----------------------------------BUY
  let buyProduct = (): void => {
    addItemToCart(foundProduct, quantity);
    alert(`You put ${quantity} ${foundProduct.name} in your cart`);
    backButton();
  }

  //-----------------------------------DELETE
  //TODO
  let deleteProduct = (): void => {
    fetch('http://localhost:4000/products/' + foundProduct.id, {
      method: 'DELETE',
    })
    alert("Deleted!");
    backButton();
  }

  const classes = useStyles();
  let displayDetails =
    <>
      <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
        <img src={foundProduct.image} alt="" />
      </Box>

      <Box display="flex" justifyContent="center" m={1} p={1}>
        <h1>{foundProduct.name} details</h1>
      </Box>

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

      <Box display="flex" justifyContent="center" m={1} p={1}>
        <h3>DESCRIPTION</h3>
      </Box>
      <div className={classes.root}>{foundProduct.description}</div>
    </>

  return (
    <>
      {displayDetails}
      <Box display="flex" justifyContent="center" m={1} p={1}>
        <Button variant="contained" color="primary" style={{ borderRadius: 10, margin: 5 }} onClick={handleIncreaseQuantity}> Increase quantity! </Button> &nbsp;
        <Button variant="contained" color="primary" style={{ borderRadius: 10, margin: 5 }} onClick={buyProduct}> Buy </Button> &nbsp;
        <Button variant="contained" color="primary" style={{ borderRadius: 10, margin: 5 }} onClick={deleteProduct}> Delete </Button> &nbsp;
        <Button variant="contained" color="primary" style={{ borderRadius: 10, margin: 5 }} onClick={editButton}> Edit </Button> &nbsp;
        <Button variant="contained" color="primary" style={{ borderRadius: 10, margin: 5 }} onClick={backButton}> Back </Button> &nbsp;
      </Box>
    </>
  );
}

export default Product;
