import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NewsCard from '../components/NewsCard.jsx';
import { fetchCategoryNews } from '../api';

const Category = ({ onBookmark }) => {
  const { name } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchCategoryNews(name).then(setArticles);
  }, [name]);

  return (
    <div>
      <h2>{name.toUpperCase()} News</h2>
      {articles.map((a, i) => (
        <NewsCard key={i} article={a} onBookmark={onBookmark} />
      ))}
    </div>
  );
};

export default Category;
