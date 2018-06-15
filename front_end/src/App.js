import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { BrowserRouter } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import RoutController from './components/grid/RoutController'
import VideoFull from './components/video/VideoFull'


const theme = createMuiTheme({
  palette: {
    primary: {main: grey[800]},
    light: '#FFF',
    type: 'dark',
  }
})

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme} >
          <div className="App">
            <NavBar />
            <RoutController />
            <VideoFull />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
