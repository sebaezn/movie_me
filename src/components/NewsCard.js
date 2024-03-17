import React, { useState } from 'react';
import './style/NewsCard.css';

const NewsCard = ({ article }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="newsCard" onClick={toggleModal}>
        <img src={article.urlToImage} alt={article.title} />
        <div>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more...
            </a>
        </div>
      </div>
      <div className={`modal ${isModalOpen ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={toggleModal}></div>
        <div className="modal-content">
          <div className="box">
            <h2>{article.title}</h2>
            <img src={article.urlToImage} alt={article.title} />
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more...
            </a>
          </div>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={toggleModal}></button>
      </div>
    </>
  );
};

export default NewsCard;



