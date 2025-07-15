import React, { useState, useEffect } from 'react';
import { addBook, updateBook } from '../api';

// Handles the form for adding and editing books
const BookForm = ({ selectedBook, onSuccess }) => {
  const [book, setBook] = useState({ title: '', author: '' });

  // If a book is selected, load it into form
  useEffect(() => {
    if (selectedBook) {
      setBook(selectedBook);
    }
  }, [selectedBook]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (book.id) {
      await updateBook(book);
    } else {
      await addBook(book);
    }
    setBook({ title: '', author: '' });
    onSuccess(); // Notify parent to reload list
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{book.id ? 'Edit Book' : 'Add Book'}</h2>
      <input
        name="title"
        placeholder="Title"
        value={book.title}
        onChange={handleChange}
        required
      />
      <input
        name="author"
        placeholder="Author"
        value={book.author}
        onChange={handleChange}
        required
      />
      <button type="submit">{book.id ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default BookForm;
