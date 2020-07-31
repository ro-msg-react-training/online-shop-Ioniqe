import React from 'react';
import '../Style.css';
import { Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Box } from '@material-ui/core';
import { IProductDetailsReady } from '../types/types';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    boxShadow: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    padding: theme.spacing(3),
  },
  table: {
    minWidth: 500,
    padding: '0 80px',
    boxShadow: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
  },
  image: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

interface Props{
  foundProduct: IProductDetailsReady,
}

// function Test(foundProduct : IProductDetailsReady) {
  const ProductDumb: React.FC<Props> = ( {foundProduct} ) => {
  const classes = useStyles();
  let displayDetails =
    <>
      <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
        <img src={foundProduct.image} alt="" />
      </Box>

      <Box display="flex" justifyContent="center" m={1} p={1}>
        <h1>{foundProduct.name} details</h1>
      </Box>

      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={foundProduct.id}>
            <TableCell align="left">{foundProduct.name}</TableCell>
            <TableCell align="right">{foundProduct.category}</TableCell>
            <TableCell align="right">{foundProduct.price}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Box display="flex" justifyContent="center" m={1} p={1}>
        <h3>DESCRIPTION</h3>
      </Box>
      <div className={classes.root}>{foundProduct.description}</div>
    </>

  return (
    <>
      {displayDetails}
    </>
  );
}

export default ProductDumb;
