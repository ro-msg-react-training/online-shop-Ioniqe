import React, { useEffect } from 'react';
import { fetchStock } from '../redux';
import { connect } from 'react-redux'
import { IProduct } from '../types/types';
import StockDumb from '../components/StockDumb';
import { Container, CircularProgress } from '@material-ui/core';

interface ITestContainer {
  fetchProducts: () => void,
  productList: {
    loading: boolean,
    products: IProduct[],
    error: string
  }
}

function StockContainer({ fetchProducts, productList }: ITestContainer) { //this should be StockSmart
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return productList.loading ? (
    <Container maxWidth="sm">
      <CircularProgress />
    </Container>
  ) : productList.error ? (
    <h1>{productList.error}</h1>
  ) : (<StockDumb products={productList.products} />)

}

const mapStateToProps = (state: any) => {
  return {
    productList: state.stock //from rootReducer
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchProducts: () => dispatch(fetchStock())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockContainer);