import React from 'react';
import '../Style.css';

import { useHistory } from "react-router-dom";
import { Button, Table, TableRow, TableCell, TableBody, makeStyles, TableHead, Box } from '@material-ui/core';
import { IProduct } from '../types/types';

interface StockProps {
  products: IProduct[];
};

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    borderRadius: 10,
    padding: '0 80px',
    boxShadow: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
  },
});

const StockDumb: React.FC<StockProps> = ({ products }) => { //this should be StockDumb
  const history = useHistory();
  let gotoDetails = (id: string): void => history.push(`/product/${id}`);
  let goHome = (): void => history.push("/");
  let addProductButton = (): void => history.push("/modifyItem/-1/" + products.length);
  const classes = useStyles();

  return (
    <>
      <Box display="flex" justifyContent="center" m={1} p={1}>
        <Button variant="contained" color="primary" style={{ borderRadius: 10, margin: 5 }} onClick={() => goHome()}> Back </Button>
        <Button variant="contained" color="primary" style={{ borderRadius: 10, margin: 5}} onClick={() => addProductButton()}> Add </Button>
      </Box>

      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Price</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell align="left">{product.category}</TableCell>
              <TableCell align="left">{product.name}</TableCell>
              <TableCell align="left">{product.price}</TableCell>
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

export default StockDumb;
