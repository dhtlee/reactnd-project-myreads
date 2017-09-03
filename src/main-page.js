import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BookList from 'book-list';
import * as BooksAPI from 'api/books';

const Shelf = {
  CURRENTLY_READING: 'currentlyReading',
  WANT_TO_READ: 'wantToRead',
  READ: 'read'
}

class MainPage extends Component {
  state = {
    books: []
  }

  componentDidMount = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  updateShelf = (book, shelf) => {
      console.log(book);
      console.log(shelf);
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <BookList 
                  list={this.state.books.filter(book => book.shelf === Shelf.CURRENTLY_READING)}
                  handleShelfUpdate={this.updateShelf}
                />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <BookList 
                  list={this.state.books.filter(book => book.shelf === Shelf.WANT_TO_READ)}
                  handleShelfUpdate={this.updateShelf}
                />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <BookList 
                  list={this.state.books.filter(book => book.shelf === Shelf.READ)}
                  handleShelfUpdate={this.updateShelf}
                />
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to='/search'/>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;