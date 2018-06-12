import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetch_movies } from '../../actions/fetch_movies'
import { fetch_genre } from '../../actions/fetch_genre'
import { CircularProgress } from '@material-ui/core'
import GenreTile from './GenreTile'
import MovieDialog from './MovieDialog'

class MovieList extends Component {
  componentDidMount() {
    this.props.fetch_genre()
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
        <button onClick={() => {this.props.fetch_genre()}}>Test</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    count: state.movies.count,
    movies: state.movies.movies,
    genre: state.genre.genre,
})

export default connect(mapStateToProps, { fetch_movies, fetch_genre })(MovieList);