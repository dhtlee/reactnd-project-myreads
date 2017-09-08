import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { debounce } from 'throttle-debounce';

import * as BooksAPI from 'api/books'
import BookList from 'book-list';

const maxResults = 20;

class SearchPage extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    handleShelfUpdate: PropTypes.func.isRequired
  }

  state = {
    results: []
  }

  updateResults = (updatedBook, shelf) => {
    const index = this.state.results.indexOf(updatedBook);
    const newBook = Object.assign({}, updatedBook, { shelf: shelf });
    this.setState({
      results: [
        ...this.state.results.slice(0, index),
        newBook,
        ...this.state.results.slice(index + 1),
      ]
    });
  }

  onChange = (event) => {
    this.searchBooks(event.target.value.trim());
  }

  searchBooks = debounce(1000, (query) => {
    BooksAPI.search(query, maxResults)
      .then(response => {
        this.props.books.forEach(shelvedBook => {
          const match = response.find((resultBook) => resultBook.id === shelvedBook.id);
          if (match) {
            match.shelf = shelvedBook.shelf;  
          }
        })
        this.setState({ results: response });
    });
  })

  render() {
    return (
      <div className="search-books">
        <div className='search-books-bar'>
          <Link className="close-search" to='/'/>
          <div className='search-books-input-wrapper'>
            <input 
              type='text'
              placeholder='Search by title or author'
              onChange={this.onChange}
            />
          </div>
        </div>
        { this.state.results.length !== 0 && (
          <div className="search-books-results">
            <BookList 
              list={this.state.results}
              handleShelfUpdate={(book, value) => {
                this.props.handleShelfUpdate(book, value);
                this.updateResults(book, value);
              }}
            />
          </div> 
        )}
      </div>
    )
  }
}

export default SearchPage;
