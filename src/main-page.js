import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import BookList from 'book-list';
import BookShelf from 'bookshelf';

const Shelf = {
  CURRENTLY_READING: 'currentlyReading',
  WANT_TO_READ: 'wantToRead',
  READ: 'read'
}

const MainPage = (props) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelf 
          name='Currently Reading' 
          books={props.books.filter(book => book.shelf === Shelf.CURRENTLY_READING)}
          handleShelfUpdate={props.handleShelfUpdate}
        />
        <BookShelf 
          name='Want to Read' 
          books={props.books.filter(book => book.shelf === Shelf.WANT_TO_READ)}
          handleShelfUpdate={props.handleShelfUpdate}
        />
        <BookShelf 
          name='Read' 
          books={props.books.filter(book => book.shelf === Shelf.READ)}
          handleShelfUpdate={props.handleShelfUpdate}
        />
      </div>
      <div className="open-search">
        <Link to='/search'/>
      </div>
    </div>
  </div>
)

MainPage.propTypes = {
  books: PropTypes.array.isRequired,
  handleShelfUpdate: PropTypes.func.isRequired
}

export default MainPage;