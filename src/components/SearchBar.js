import React, { useState } from 'react';
import {BsSearch} from 'react-icons/bs';
import './style/search-bar.css'; 


const SearchBar = ({ search }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Movie Me"
        className="search-input"
      />
      <button type="submit" className="search-button">
        <BsSearch className="search-icon" />
      </button>
    </form>
  );
};

export default SearchBar;


