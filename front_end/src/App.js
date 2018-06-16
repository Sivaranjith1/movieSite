import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetch_genre } from './actions/fetch_genre'

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
  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }
  
  trackScrolling = () => {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 100) && !this.props.fetching) {
      this.props.fetch_genre()
    }
  }

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

const mapStateToProps = state => ({
  fetching: state.genre.fetching
})

export default connect(mapStateToProps,{ fetch_genre })(App);
