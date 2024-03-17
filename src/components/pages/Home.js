import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/movies');
  };

  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
        </div>

        <button className="button is-danger is-large" onClick={handleClick}>
          Movie Me!
        </button>
      </div>
    </section>
  );
}

export default Home;

