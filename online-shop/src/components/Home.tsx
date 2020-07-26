import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Home() {
  const history = useHistory();

  function backButton() {
    history.push("/products");
  }

  return (
    <div>
      <h1>Welcome to the shop!</h1>
      <div className="center">
        <Button variant="contained" color="primary" onClick={backButton}> Products </Button>
      </div>
    </div>
  );
}

export default Home;
