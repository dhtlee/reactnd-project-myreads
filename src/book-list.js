import React from 'react';

import Book from 'book';

const BookList = (props) => (
  <ol className="books-grid">
    { 
      props.list.map((book) => 
        <Book
          imgLink={book.imageLinks}
          key={book.id}
          title={book.title}
          authors={book.authors}  
        />
      )
    }
  </ol>
)

export default BookList;