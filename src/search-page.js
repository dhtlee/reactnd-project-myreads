import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as BooksAPI from 'api/books'
import BookList from 'book-list';

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
          <BookList list={this.state.results}/>
        </div>
      </div>
    )
  }
}

export default SearchPage;
