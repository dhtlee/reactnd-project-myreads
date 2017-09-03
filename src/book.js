import React from 'react';
import { PropTypes } from 'prop-types';

const Book = (props) => {
  const { id, imageLink, title, authors, handleShelfUpdate } = props;
  const thumbnail = imageLink && imageLink.thumbnail ? imageLink.thumbnail : null;
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${thumbnail}')`}}></div>
          <div className="book-shelf-changer">
            <select onChange={(event => handleShelfUpdate(id, event.target.value))}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors && authors.join(', ')}</div>
      </div>
    </li>
  )
}

Book.propTypes = {
  imageLink: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired,
  handleShelfUpdate: PropTypes.func.isRequired
}

export default Book;
