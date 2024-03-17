import React, { useState, useEffect } from 'react';
import TVShowCard from './TVShowCard';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import 'bulma/css/bulma.css';
import Genres from './Genres';

const TVShows = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const API_KEY = '0b4ad6dce0b03b3271a160a2a5b8d215';
  const [searchQuery, setSearchQuery] = useState('');
  const [genreId, setGenreId] = useState(null);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (page = 1, searchQuery = null, genreId = null) => {
    try {
      setLoading(true);
      let url;
      if (searchQuery) {
        url = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-AU&query=${searchQuery}&page=${page}`;
      } else if (genreId) {
        url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-AU&sort_by=popularity.desc&include_adult=true&include_video=&include_episode&page=${page}&with_genres=${genreId}`;
      } else {
        url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-AU&page=${page}`;
      }
  
      const response = await fetch(url);
      const data = await response.json();
      setData(data.results);
      setTotalPages(data.total_pages);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };
  

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    fetchData(newPage, searchQuery, genreId); // Pass searchQuery and genreId
  };

  const handleSearch = (newSearchQuery) => {
    setSearchQuery(newSearchQuery);
    setCurrentPage(1);
    fetchData(1, newSearchQuery, genreId); // Pass searchQuery and genreId
  };

  const handleGenreSelect = (newGenreId) => {
    setGenreId(newGenreId);
    setCurrentPage(1);
    fetchData(1, searchQuery, newGenreId); // Pass searchQuery and genreId
  };

  return (
    <div>
      <SearchBar search={handleSearch} />
      <Genres API_KEY={API_KEY} onGenreSelect={handleGenreSelect} />
      <h2 className='title is-2 has-text-centered'>Top TV Shows</h2>
      {loading ? (
          <p>Loading...</p>
      ) : (
        <>
        {data && data.length > 0 ? (
      <div className="tv-show-grid">
        {data.map((show) => (
          <TVShowCard key={show.id} show={show} />
        ))}
      </div>
    ) : (
      <p className="has-text-centered">
        No TV shows found.
      </p>
    )}
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  </>
)}
    </div>
  );
};

export default TVShows;
