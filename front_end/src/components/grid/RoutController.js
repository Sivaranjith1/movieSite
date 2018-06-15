import React from 'react'
import MovieList from './MovieList'
import {Switch, Route} from 'react-router-dom'

const RoutController = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={MovieList} isMovie={true} isSerie={true} />
        <Route path='/serie' component={MovieList} isMovie={false} isSerie={true} />
        <Route path='/movie' component={MovieList} isMovie={true} isSerie={false} />
      </Switch>
    </div>
  )
}

export default RoutController;