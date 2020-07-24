import React from 'react';
import './App.css';
import Stock from './components/Stock';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#a01441",
    },
    secondary: {
      main: "#001427",
    },
  },
});

const useStyles = makeStyles(theme => (
  {
    root: {
      background: "linear-gradient(45deg, #56cfe1 20%, #80ffdb 60%)",
    },

  }
));

const products = [
  { name: "chocolate", category: "sweets", price: "22 lei" },
  { name: "candy", category: "sweets", price: "1 euro" },
  { name: "milk", category: "dairy", price: "3 lei" }
];

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <ThemeProvider theme={theme}>

        <div className="center">

          <Typography color= "secondary">
            <h1>Hello World!</h1>
            <Stock products={products} />
          </Typography>

        </div>

      </ThemeProvider>
    </div>
  );
}

export default App;
