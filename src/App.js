import React from 'react'
import { Route } from 'react-router-dom';

import MainPage from './MainPage';
import SearchPage from './SearchPage';
import './App.css'

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
