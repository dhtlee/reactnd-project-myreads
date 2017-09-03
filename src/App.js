import React, { Component } from 'react'
import { Route } from 'react-router-dom';

import MainPage from 'main-page';
import SearchPage from 'search-page';
import * as BooksAPI from 'api/books';
import 'css/app.css'

class App extends Component {
  state = {
    books: []
  }

  updateShelf = (book, shelf) => {
    console.log(book);
    console.log(shelf);

  componentDidMount = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MainPage books={this.state.books} handleShelfUpdate={this.updateShelf}/>
        )}/>
        <Route path='/search' render={() => (
          <SearchPage handleShelfUpdate={this.updateShelf}/>
        )}/>
      </div>
    )
  }
}

export default App
