import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../api';

// Displays the list of books
const BookList = ({ onEdit }) => {
  const [books, setBooks] = useState([]);

  // Load books from the server when component mounts
  useEffect(() => {
    fetchBooks().then(setBooks);
  }, []);

  return (
    <div>
      <h2>Bookshelf</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
            <button onClick={() => onEdit(book)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
