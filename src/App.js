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

  updateShelf = (updatedBook, shelf) => {
    BooksAPI.update({ id: updatedBook.id }, shelf).then(response => {
      const book = this.state.books.find(book => book.id === updatedBook.id);
      const newBook = Object.assign({}, book, { shelf: shelf });
      const index = this.state.books.findIndex(book => book.id === updatedBook.id);
      this.setState({
        books: [
          ...this.state.books.slice(0, index),
          newBook,
          ...this.state.books.slice(index + 1)
        ]
      });
    })
  }

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
