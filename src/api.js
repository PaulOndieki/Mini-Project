// Handles all API interactions with json-server
const API_URL = 'http://localhost:3001/books';

// Fetch all books
export const fetchBooks = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

// Add a new book
export const addBook = async (book) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });
  return res.json();
};

// Update an existing book
export const updateBook = async (book) => {
  const res = await fetch(`${API_URL}/${book.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });
  return res.json();
};
