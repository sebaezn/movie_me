// Footer.js
import React from 'react';
import './style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h4>Contact Us</h4>
          <p>Email: MovieMe@me.com</p>
          <p>Phone: +61 0482334976</p>
          <p>Address: 567 noreal street </p>
        </div>
        <div className="copyright">
          <p className="footer-text">
            Sebastian Baez Navarro/IFN666/Assessment2.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
