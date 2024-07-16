import React from 'react';
import './Intro.css';
import link from '../../Assets/intro-link.svg';
import cart from '../../Assets/intro-cart.svg';
import email from '../../Assets/intro-email.svg';
import arrow from '../../Assets/intro-arrow.svg';

const Intro = () => {
  return (
    <div className='intro'>
      <div className="intro-wrap">
      <div className="intro-heading">
        <h1>A link-in-bio.
            <br/>
         For the Pro's.</h1>
      </div>
      <div className="intro-icons">
        <div className="icon-container">
          <img src={link} alt="link" />
          <p>Your Link-in-bio</p>
        </div>
        <div className="icon-container">
          <img src={cart} alt="cart" />
          <p>Your Creator Store</p>
        </div>
        <div className="icon-container">
          <img src={email} alt="email" />
          <p>Email Marketing</p>
        </div>
      </div>
      <div className="intro-definition">
        <p>Zaap is the most advanced link-in-bio ever. A single page for your links, an online store and email marketing built into one easy to use platform.</p>
      </div>
      <div className="intro-buttons">
        <div className="intro-started">
            <p>Get Started</p>
            <img src={arrow} alt="arrow" />
        </div>
        <div className="intro-watch">
            <p>Watch The Video</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Intro;
