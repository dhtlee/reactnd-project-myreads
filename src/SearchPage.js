import React, { Component } from 'react';

class SearchPage extends Component {
  render() {
    return (
      <div className='search-books-bar'>
        <div className='close-search'/>
        <div className='search-books-input-wrapper'>
          <input type='text' placeholder='Type search text here...'/>
        </div>
      </div>
    )
  }
}

export default SearchPage;
