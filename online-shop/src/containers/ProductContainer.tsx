import React, { useEffect, useState } from 'react';
import { deleteProduct, loadProduct } from '../redux';
import { connect } from 'react-redux'
import { IProductDetailsReady } from '../types/types';
import { Container, CircularProgress, Box, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import ProductDumb from '../components/ProductDumb';

interface Props {
  match: any,
  fetchProductF: (id: string) => void,
  deleteProductF: (id: string) => void,
  fetchProduct: {
    loading: boolean,
    product: IProductDetailsReady,
    error: string
  },
  addItemToCart: any
}

// function ProductContainer({ match, fetchProductF, fetchProduct }: Props, { addItemToCart }: any) {
function ProductContainer({ addItemToCart, match, fetchProductF, deleteProductF, fetchProduct }: Props) {
  useEffect(() => {
    fetchProductF(match.params.id)
  }, [fetchProductF, match.params.id])

  const history = useHistory();

  //----------------------------------INCREASE QUANTITY
  const [quantity, increaseQuantity] = useState(1);
  const handleIncreaseQuantity = () => increaseQuantity(newQuantity => newQuantity + 1);

  //----------------------------------BACK
  let backButton = (): void => history.push("/products");

  //----------------------------------BUY
  let buyProduct = (): void => {
    addItemToCart(fetchProduct.product, quantity);
    alert(`You put ${quantity} ${fetchProduct.product.name} in your cart`);
    backButton();
  }

  //-----------------------------------EDIT
  let editButton = (): void => history.push(`/modifyItem/0/${fetchProduct.product.id}`);

  //----------------------------------DELETE
  let deleteProduct = (): void => {
    deleteProductF(match.params.id);
    alert("Deleted!");
    backButton();
  }

  if (fetchProduct.loading) {
    return (
      <Container maxWidth="sm">
        <CircularProgress />
      </Container>
    );
  }

  const increment =
    <>
      <Box display="flex" justifyContent="center" m={1} p={1}>
        <Button variant="contained" color="primary" style={{ borderRadius: 10, margin: 5 }} onClick={handleIncreaseQuantity}> increase quantity </Button> &nbsp;&nbsp;&nbsp;
      <h3> Quantity: </h3>&nbsp;&nbsp;&nbsp;
      <h3>{quantity}</h3>
      </Box>
    </>

  return (
    <>
      <h1>{fetchProduct.product.name}</h1>
      <ProductDumb foundProduct={fetchProduct.product} />
      <Box display="flex" justifyContent="center" m={1} p={1}>
        <Button variant="contained" color="primary" style={{ borderRadius: 10, margin: 5 }} onClick={buyProduct}> Buy </Button> &nbsp;
        <Button variant="contained" color="primary" style={{ borderRadius: 10, margin: 5 }} onClick={deleteProduct}> Delete </Button> &nbsp;
        <Button variant="contained" color="primary" style={{ borderRadius: 10, margin: 5 }} onClick={editButton}> Edit </Button> &nbsp;
        <Button variant="contained" color="primary" style={{ borderRadius: 10, margin: 5 }} onClick={backButton}> Back </Button> &nbsp;
      </Box>
      {increment}
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    fetchProduct: state.product //from rootReducer
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchProductF: (id: string) => dispatch(loadProduct(id)),
    deleteProductF: (id: string) => dispatch(deleteProduct(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);