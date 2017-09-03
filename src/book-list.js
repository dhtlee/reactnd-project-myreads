import React from 'react';
import { PropTypes } from 'prop-types';

import Book from 'book';

const BookList = (props) => (
  <ol className="books-grid">
    { 
      props.list.map((book) => 
        <Book
          key={book.id}
          book={book}
          handleShelfUpdate={props.handleShelfUpdate}
        />
      )
    }
  </ol>
)

BookList.propTypes = {
  list: PropTypes.array.isRequired,
  handleShelfUpdate: PropTypes.func.isRequired
}

export default BookList;