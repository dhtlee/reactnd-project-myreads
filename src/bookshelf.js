import React from 'react';
import { PropTypes } from 'prop-types';

import BookList from 'book-list';

const BookShelf = (props) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">Currently Reading</h2>
    <div className="bookshelf-books">
      <BookList 
        list={props.books}
        handleShelfUpdate={props.handleShelfUpdate}
      />
    </div>
  </div>
)

BookShelf.propTypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  handleShelfUpdate: PropTypes.func.isRequired
}

export default BookShelf;