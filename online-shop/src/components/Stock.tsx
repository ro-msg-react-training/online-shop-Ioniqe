import React from 'react';
import '../Style.css';

import { useHistory } from "react-router-dom";
import { Button, Table, TableRow, TableCell, TableBody, makeStyles } from '@material-ui/core';

interface Prod {
  id: string,
  name: string,
  category: string,
  price: string,
}

interface StockProps {
  products: Prod[];
};

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    borderRadius: 10,
    padding: '0 80px',
    boxShadow: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
  },
});

const Stock: React.FC<StockProps> = ({ products }) => {
  const history = useHistory();
  let gotoDetails = (id: string): void => history.push("/products/" + id);
  const classes = useStyles();

  return (
    <>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell align="left">{product.name}</TableCell>
              <TableCell align="right">
                <Button variant="contained" color="primary" onClick={() => gotoDetails(product.id)}> Details </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default Stock;
