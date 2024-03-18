import React from 'react';
import 'bulma/css/bulma.css';

const ContactUs = () => {
  return (
    <div className="container">
      <h2 className="title is-2 has-text-centered">Contact Us</h2>
      <form className="contact-form">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Your Name" />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" planceholder="Your Email" />
          </div>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="Your Message"></textarea>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;

