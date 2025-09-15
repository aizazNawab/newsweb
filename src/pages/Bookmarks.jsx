import React from 'react';
import NewsCard from '../components/NewsCard.jsx';

const Bookmarks = ({ bookmarks, onDelete }) => {
  return (
    <div className="container">
      <h2 className="header-title">My Bookmarks</h2>
      {bookmarks.length === 0 ? (
        <p>No bookmarks yet.</p>
      ) : (
        bookmarks.map((a, i) => (
          <div key={i}>
            <NewsCard article={a} onBookmark={() => {}} />
            <button 
              onClick={() => onDelete(i)} 
              className="bookmark-delete"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Bookmarks;
