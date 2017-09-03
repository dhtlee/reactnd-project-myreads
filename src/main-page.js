import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import BookList from 'book-list';
import * as BooksAPI from 'api/books';

const Shelf = {
  CURRENTLY_READING: 'currentlyReading',
  WANT_TO_READ: 'wantToRead',
  READ: 'read'
}

class MainPage extends Component {
  static propTypes = {
    handleShelfUpdate: PropTypes.func.isRequired
  }
  
  state = {
    books: []
  }

  componentDidMount = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
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
                  handleShelfUpdate={this.props.handleShelfUpdate}
                />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <BookList 
                  list={this.state.books.filter(book => book.shelf === Shelf.WANT_TO_READ)}
                  handleShelfUpdate={this.props.handleShelfUpdate}
                />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <BookList 
                  list={this.state.books.filter(book => book.shelf === Shelf.READ)}
                  handleShelfUpdate={this.props.handleShelfUpdate}
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