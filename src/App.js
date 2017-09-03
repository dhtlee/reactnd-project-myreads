import React, { Component } from 'react'
import { Route } from 'react-router-dom';

import MainPage from 'main-page';
import SearchPage from 'search-page';
import 'css/app.css'

class App extends Component {

  updateShelf = (book, shelf) => {
    console.log(book);
    console.log(shelf);
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MainPage handleShelfUpdate={this.updateShelf}/>
        )}/>
        <Route path='/search' render={() => (
          <SearchPage handleShelfUpdate={this.updateShelf}/>
        )}/>
      </div>
    )
  }
}

export default App
