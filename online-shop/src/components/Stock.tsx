import React from 'react';
import '../Style.css';

import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';

interface Prod {
  name: string,
  category: string,
  price: string
}

interface StockProps {
  products: Prod[];
};

const Stock: React.FC<StockProps> = ({ products }) => {
  const history = useHistory();

  function gotoDetails(name: string) {
    history.push("/products/" + name);
  }

  return (
    <div>
      {products.map((product) =>
        <div key={product.name}>
          <h2>
            {product.name}
          </h2>
          <Button variant="contained" color="primary" onClick={() => gotoDetails(product.name)}> Details </Button>
        </div>
      )}

      {/* {products.map((product) => <Product key={product.id} id={product.id} name={product.name} category={product.category} price={product.price} />)} */}
    </div>
  );
}


export default Stock;