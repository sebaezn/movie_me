import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/NavigationBar.css';
import {BiCameraMovie} from 'react-icons/bi';
import logo from './style/logo.png'; 
import LoginModal from './LoginModal';

const NavigationBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };


  return (
    <header>
      <nav className="navbar is-black" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={logo} alt="Website Logo" style={{ width: '75px', height: '75px' }}/>
          </Link>
          <button className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={handleToggle}>
            <BiCameraMovie className="navbar-icon" />
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <Link className="navbar-item" to="/movies">Movies</Link>
            <Link className="navbar-item" to="/tv">TV Shows</Link>
            <Link className="navbar-item" to="/topairing">Top Airing</Link>
            <Link className="navbar-item" to="/news">News</Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button is-info" onClick={openLoginModal}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isLoginModalOpen && <LoginModal closeModal={closeLoginModal} />}
    </header>
  );
};

export default NavigationBar;
