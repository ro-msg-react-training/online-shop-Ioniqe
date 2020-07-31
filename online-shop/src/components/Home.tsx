import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Box } from '@material-ui/core';

function Home() {
  const history = useHistory();
  let gotoProducts = (): void => history.push("/products");

  return (
    <>
      <Box display="flex" justifyContent="center" m={1} p={1}>
        <h1>Welcome to the shop!</h1>
      </Box>

      <Box display="flex" justifyContent="center" m={1} p={1}>
        <Button variant="contained" color="primary" onClick={gotoProducts} style={{ borderRadius: 10 }}> Products </Button>
      </Box>
    </>
  );
}

export default Home;
