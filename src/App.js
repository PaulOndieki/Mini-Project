import React, { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import './styles.css';

// Main App component
const App = () => {
  const [editedBook, setEditedBook] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  // Trigger list refresh
  const refreshList = () => {
    setRefreshKey((prev) => prev + 1);
    setEditedBook(null);
  };

  return (
    <div className="App">
      <h1>My React Bookshelf</h1>
      <BookForm selectedBook={editedBook} onSuccess={refreshList} />
      <BookList key={refreshKey} onEdit={setEditedBook} />
    </div>
  );
  return (
    <div className="app-background">
  <h1>Welcome</h1>
</div>

  );
  
};

export default App;
