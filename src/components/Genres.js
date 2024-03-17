import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.css';

const Genres = ({ API_KEY, onGenreSelect }) => {
  const [genres, setGenres] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('Genres');

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setGenres(data.genres);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  const handleGenreClick = (genreId, genreName) => {
    onGenreSelect(genreId);
    setSelectedGenre(genreName);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`dropdown is-centered ${isDropdownOpen ? 'is-active' : ''}`} onClick={toggleDropdown}>
      <div className="dropdown-trigger">
        <button className="button is-black" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>{selectedGenre}</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {genres.map((genre) => (
            <a
              key={genre.id}
              className="dropdown-item"
              onClick={() => handleGenreClick(genre.id, genre.name)}
            >
              {genre.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Genres;
