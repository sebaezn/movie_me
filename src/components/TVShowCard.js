import React, { useState} from 'react';
import './style/TVShowCard.css';
import 'bulma/css/bulma.min.css';

const TVShowCard = ({ show }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tvShowDetails, setTvShowDetails] = useState(null);
  const posterUrl = `https://image.tmdb.org/t/p/w500${show.poster_path}`;
  const API_KEY = '0b4ad6dce0b03b3271a160a2a5b8d215';

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen && !tvShowDetails) {
      fetchTvShowDetails();
    }
  };

  const fetchTvShowDetails = async () => {
    try {
      const url = `https://api.themoviedb.org/3/tv/${show.id}?api_key=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setTvShowDetails(data);
    } catch (error) {
      console.error('Error fetching TV show details:', error);
    }
  };

  return (
    <div className="tv-show-card">
      <img src={posterUrl} alt={show.name} onClick={toggleModal} />
      <h3>{show.name}</h3>

      <div className={`modal ${isModalOpen ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={toggleModal}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">
              <h3-show>{show.name}</h3-show>
            </p>
            <button className="delete" aria-label="close" onClick={toggleModal}></button>
          </header>
          <section className="modal-card-body">
            <div className="content">
              <p>{show.overview}</p>
              <p>First Air Date: {show.first_air_date}</p>
              <p>Rating: {show.vote_average}</p>
              {tvShowDetails && (
                <>
                  <p>Number of Episodes: {tvShowDetails.number_of_episodes}</p>
                  <p>Number of Seasons: {tvShowDetails.number_of_seasons}</p>
                </>
              )}
              <p>Original Language: {show.original_language}</p>
              <p>Original Name: {show.original_name}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TVShowCard;
