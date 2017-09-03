import React from 'react'
import { Route } from 'react-router-dom';

import MainPage from 'main-page';
import SearchPage from 'search-page';
import 'css/app.css'

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' component={MainPage}/>
        <Route path='/search' component={SearchPage}/>
      </div>
    )
  }
}

export default BooksApp
