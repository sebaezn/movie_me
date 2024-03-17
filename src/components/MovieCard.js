import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './style/MovieCard.css';

const MovieCard = ({ movie }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={movie.title} onClick={toggleModal} />
      {movie.title ? <h3>{movie.title}</h3> : <h3>{movie.name}</h3>}

      <div className={`modal ${isModalOpen ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={toggleModal}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{movie.title ? <h3-movie>{movie.title}</h3-movie> : <h3-show>{movie.name}</h3-show>}</p>
            <button className="delete" aria-label="close" onClick={toggleModal}></button>
          </header>
          <section className="modal-card-body">
            <div className="content">
              <p>{movie.overview}</p>
              <p>Release Date: {movie.release_date ? <p>{movie.release_date}</p> : <p>{movie.first_air_date}</p>}</p>
              <p>Rating: {movie.vote_average}</p>
              <p>Original Language: {movie.original_language}</p>
              <p>Original Title: {movie.original_title}</p>
              </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;



