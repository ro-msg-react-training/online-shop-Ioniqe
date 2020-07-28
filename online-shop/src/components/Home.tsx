import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Home() {
  const history = useHistory();

  let backButton = (): void => {
    history.push("/products");
  }

  return (
    <div className="center">
      <h1>Welcome to the shop!</h1>
      <Button variant="contained" color="primary" onClick={backButton}> Products </Button>
    </div>
  );
}

export default Home;
