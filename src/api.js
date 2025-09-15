// src/api.js
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

// Fetch trending news (top headlines)
export const fetchTrendingNews = async () => {
  try {
    const res = await fetch(`${BASE_URL}/top-headlines?country=us&pageSize=20&apiKey=${API_KEY}`);
    const data = await res.json();
    return data.articles || [];
  } catch (error) {
    console.error("Error fetching trending news:", error);
    return [];
  }
};

// Search news by query
export const searchNews = async (query) => {
  try {
    const res = await fetch(`${BASE_URL}/everything?q=${encodeURIComponent(query)}&pageSize=20&apiKey=${API_KEY}`);
    const data = await res.json();
    return data.articles || [];
  } catch (error) {
    console.error("Error searching news:", error);
    return [];
  }
};

// Fetch news by category
export const fetchCategoryNews = async (category) => {
  try {
    const res = await fetch(`${BASE_URL}/top-headlines?country=us&category=${category}&pageSize=20&apiKey=${API_KEY}`);
    const data = await res.json();
    return data.articles || [];
  } catch (error) {
    console.error("Error fetching category news:", error);
    return [];
  }
};
