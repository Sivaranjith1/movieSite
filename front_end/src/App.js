import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

import NavBar from './components/NavBar/NavBar';
import MovieList from './components/grid/MovieList'


const theme = createMuiTheme({
  palette: {
    primary: grey,
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme} >
        <div className="App">
          <NavBar />
          <MovieList />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
