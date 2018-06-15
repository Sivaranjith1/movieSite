import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetch_genre } from '../../actions/fetch_genre'
//import { clean_genre } from '../../actions/clean_genre'
import { url_movie, url_serie, url_genre } from '../../actions/url_change'
import { CircularProgress } from '@material-ui/core'
import GenreTile from './GenreTile'
import MovieDialog from './MovieDialog'

class MovieList extends Component {
  componentDidMount() {
    let urlNow = this.props.location.pathname
    switch(urlNow){
      case '/movie':
        this.props.url_movie()
        break

      case '/serie':
        this.props.url_serie()
        break

      case '/':
        this.props.url_genre()
        break

      default:
        break
    }
    this.props.fetch_genre()
  }

  componentDidUpdate(prevProps) {
    let urlBefore = prevProps.location.pathname
    let urlNow = this.props.location.pathname
    if (urlBefore !== urlNow){
      //this.props.clean_genre()
      switch(urlNow){
        case '/movie':
          this.props.url_movie()
          break

        case '/serie':
          this.props.url_serie()
          break

        case '/':
          this.props.url_genre()
          break

        default:
          break
      }
      this.props.fetch_genre()
    }
  }

  render() {
    return (
      <div>
        {this.props.genre === [] 
          ? 
          <center>
            <CircularProgress size={100} />
          </center>
          :
          <div>
            <MovieDialog />
            {this.props.genre.map(data => <GenreTile key={data.pk} income={data} />)}
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
    count: state.movies.count,
    movies: state.movies.movies,
    genre: state.genre.genre,
})

const reduxFuncs = { fetch_genre, /*clean_genre,*/ url_movie, url_serie, url_genre }
export default connect(mapStateToProps, reduxFuncs)(MovieList);