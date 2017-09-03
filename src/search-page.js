import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import * as BooksAPI from 'api/books'
import BookList from 'book-list';

const maxResults = 20;

class SearchPage extends Component {
  static propTypes = {
    handleShelfUpdate: PropTypes.func.isRequired
  }

  state = {
    results: []
  }

  searchBooks = (event) => {
    const query = event.target.value.trim();
    if (query.length >= 3) {
      BooksAPI.search(query, maxResults)
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
              onChange={this.searchBooks}
            />
          </div>
        </div>
        { this.state.results.length !== 0 && (
          <div className="search-books-results">
            <BookList 
              list={this.state.results}
              handleShelfUpdate={this.props.handleShelfUpdate}
            />
          </div> 
        )}
      </div>
    )
  }
}

export default SearchPage;
