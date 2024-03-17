import React, { useState } from 'react';
import 'bulma/css/bulma.css';

const LoginModal = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isEmailValid) {
      // display error message
      alert('Please enter a valid email');
      return;
    }
    // perform login action
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Login</p>
          <button className="delete" aria-label="close" onClick={closeModal}></button>
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className={`input ${isEmailValid ? '' : 'is-danger'}`}
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            {!isEmailValid && (
              <p className="help is-danger">Please enter a valid email</p>
            )}
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input className="input" type="password" placeholder="Password" />
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={handleSubmit}>Login</button>
          <button className="button" onClick={closeModal}>Cancel</button>
        </footer>
      </div>
    </div>
  );
};

export default LoginModal;