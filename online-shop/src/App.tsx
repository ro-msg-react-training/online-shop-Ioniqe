import React from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Main from './components/Main';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffee93",
    },
    secondary: {
      main: "#001427",
    },
  },
});

const useStyles = makeStyles(theme => (
  {
    root: {
      height: "550vh", //HARDCODED, NOT GOOD
      background: "linear-gradient(70deg, #56cfe1 30%, #80ffdb 50%)",
    }, //242423, 333533, f5cb5c, e8eddf, cfdbd5
  }
));

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Header />
          <Main />
        </div>
      </ThemeProvider >
    </Provider>
  );
}

export default App;


//this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#ceva"
//C:\Users\bozdoi\Desktop\code\frontend\example\resources-career-start-2020\backend