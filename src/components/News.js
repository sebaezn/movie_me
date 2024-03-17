import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import Pagination from './Pagination'; // 1. Import the Pagination component

const News = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(1); 
  const api_key = '2ac219ff8d5241d5907354967052853f';

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]); 

  const fetchNews = async (page = 1) => { 
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=movie&sortBy=popularity&page=${page}&apiKey=${api_key}`
      );
      const data = await response.json();

      if (data.status === 'ok') {
        setArticles(data.articles || []);
        setTotalPages(Math.ceil(data.totalResults / 20)); 
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    fetchNews(newPage);
  
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
    <h2 className='title is-2 has-text-centered'>What's New In The Industry</h2>
    <div className="news">
      {articles.slice(0, 12).map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}      
    </div>
    <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default News;
