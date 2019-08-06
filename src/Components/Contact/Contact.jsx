import React, { memo } from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="contact__title">
          Sign up for new and get 15% off
        </h2>
        <form className="contact__form">
          <input className="contact__input" type="email" aria-label="Your email" placeholder="YOUR EMAIL" />
          <button className="contact__btn" type="submit" aria-label="submit">
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default memo(Contact);