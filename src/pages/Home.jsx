import React, { useEffect, useState } from 'react';
import { fetchTrendingNews, searchNews } from '../api.js';
import NewsCard from '../components/NewsCard.jsx';
import SearchBar from '../components/SearchBar.jsx';

const Home = ({ onBookmark }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadNews = async () => {
    setLoading(true);
    const data = await fetchTrendingNews();
    setArticles(data);
    setLoading(false);
  };

  const handleSearch = async (query) => {
    setLoading(true);
    const data = await searchNews(query);
    setArticles(data);
    setLoading(false);
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <div className="container">
      <h1 className="header-title">🔥 Trends News</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? <p>Loading...</p> :
        articles.map((a, i) => (
          <NewsCard key={i} article={a} onBookmark={onBookmark} />
        ))}
    </div>
  );
};

export default Home;
