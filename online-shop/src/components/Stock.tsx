import React from 'react';
import '../Style.css';

import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';

interface Prod {
  id: string,
  name: string,
  category: string,
  price: string,
}

interface StockProps {
  products: Prod[];
};

const Stock: React.FC<StockProps> = ({ products }) => {
  const history = useHistory();

  let gotoDetails = (id: string): void => history.push("/products/" + id);

  return (
    <>
      {products.map((product) =>
        <div key={product.id}>
          <h2>
            {product.name}
          </h2>
          <Button variant="contained" color="primary" onClick={() => gotoDetails(product.id)}> Details </Button>
        </div>
      )}
    </>
  );
}


export default Stock;