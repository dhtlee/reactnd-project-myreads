import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as BooksAPI from 'api/books'
import Book from 'Book';

class SearchPage extends Component {
  state = {
    maxResults: 20, // TODO: Add functionality to change this 
    results: []
  }

  searchBooks = (event) => {
    const query = event.target.value.trim();
    if (query.length >= 3) {
      BooksAPI.search(query, this.state.maxResults)
        .then(results => {
          this.setState({ results })
        })
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className='search-books-bar'>
          <Link className="close-search" to='/'/>
          <div className='search-books-input-wrapper'>
            <input 
              type='text'
              placeholder='Search by title or author'
              value={this.state.query}
              onChange={this.searchBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { 
              this.state.results.map((book) => 
              <Book
                imgLink={book.imageLinks}
                key={book.id}
                title={book.title}
                authors={book.authors}  
              />
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage;
