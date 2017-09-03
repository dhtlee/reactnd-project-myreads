import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import BookList from 'book-list';

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
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <BookList 
              list={props.books.filter(book => book.shelf === Shelf.CURRENTLY_READING)}
              handleShelfUpdate={props.handleShelfUpdate}
            />
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <BookList 
              list={props.books.filter(book => book.shelf === Shelf.WANT_TO_READ)}
              handleShelfUpdate={props.handleShelfUpdate}
            />
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <BookList 
              list={props.books.filter(book => book.shelf === Shelf.READ)}
              handleShelfUpdate={props.handleShelfUpdate}
            />
          </div>
        </div>
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