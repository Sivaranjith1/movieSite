import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetch_movies } from '../../actions/fetch_movies'

class MovieList extends Component {
  render() {
    return (
      <div>
        <button onClick={() => {this.props.fetch_movies()}}>Test</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    count: state.movies.count,
    movies: state.movies.movies,
})

export default  connect(mapStateToProps, { fetch_movies })(MovieList);