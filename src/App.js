import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Category from './pages/Category.jsx';
import Bookmarks from './pages/Bookmarks.jsx';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(saved);
  }, []);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const handleBookmark = (article) => {
    const updated = [...bookmarks, article];
    setBookmarks(updated);
    localStorage.setItem("bookmarks", JSON.stringify(updated));
  };

  const handleDeleteBookmark = (index) => {
    const updated = bookmarks.filter((_, i) => i !== index);
    setBookmarks(updated);
    localStorage.setItem("bookmarks", JSON.stringify(updated));
  };

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home onBookmark={handleBookmark} />} />
          <Route path="/category/:name" element={<Category onBookmark={handleBookmark} />} />
          <Route path="/bookmarks" element={<Bookmarks bookmarks={bookmarks} onDelete={handleDeleteBookmark} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
