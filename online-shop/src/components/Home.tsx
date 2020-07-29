import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Home() {
  const history = useHistory();
  let gotoProducts = (): void => history.push("/products");
  
  return (
    <>
      <h1>Welcome to the shop!</h1>
      <Button variant="contained" color="primary" onClick={gotoProducts} style={{ left: '30%', borderRadius: 10}}> Products </Button>
    </>
  );
}

export default Home;
