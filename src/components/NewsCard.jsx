import React from 'react';

const NewsCard = ({ article, onBookmark }) => {
  return (
    <div className="news-card">
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
      <div className="news-card-content">
        <h3>{article.title}</h3>
        {article.description && <p>{article.description}</p>}
        <button onClick={() => onBookmark(article)}>Bookmark</button>
      </div>
    </div>
  );
};

export default NewsCard;
