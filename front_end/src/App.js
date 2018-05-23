import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/NavBar/NavBar';
import MovieList from './components/grid/MovieList'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <NavBar />
          <MovieList />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
