import React from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Main from './components/Main';
import Header from './components/Header';

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

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
          <Header/>
          <Main />
      </div>
    </ThemeProvider >
  );
}

export default App;
