import React, { useState } from 'react';
import './Pageg.css';
import black from '../../Assets/pageg 1.webp';
import white from '../../Assets/pageg white.webp';
import profile_pic from '../../Assets/pageg profile.webp';
import discord_icon from '../../Assets/pageg discord.svg';
import facebook_icon from '../../Assets/pageg facebook.svg';
import insta_icon from '../../Assets/pageg instagram.svg';
import twitter_icon from '../../Assets/pageg twitter.svg';
import Zapp_icon from '../../Assets/Zappy Logo.svg';
import Link_icon from '../../Assets/pageg link icon.webp';
import image1 from '../../Assets/pageg img1.webp';
import image2 from '../../Assets/pageg img 2.webp';
import image3 from '../../Assets/pageg img3.webp';
import forward_icon from '../../Assets/pageg forward icon.svg';
import attherate from '../../Assets/pageg @.webp';
import arrow_icon from '../../Assets/intro-arrow.svg';

const Pageg = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`pageg ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="pageg-mode">
        <button onClick={toggleMode}>
          {darkMode ? <img src={white} alt="light mode" /> : <img src={black} alt="dark mode" />}
        </button>
      </div>
      <div className="pageg-page">
        <div className="pageg-left">
          <div className="pageg-intro">
            <img src={profile_pic} alt="profile pic" />
            <h1>Your Name</h1>
            <p>This is an example page - showing you your future! Get a single page to show all your content, products, and links.</p>
          </div>
          <div className="pageg-intro-logo">
            <img src={discord_icon} alt="discord icon" />
            <img src={facebook_icon} alt="facebook icon" />
            <img src={insta_icon} alt="instagram icon" />
            <img src={twitter_icon} alt="twitter icon" />
          </div>
          <div className="pageg-intro-icon">
            <p>Made with</p>
            <img src={Zapp_icon} alt="zaap icon" />
          </div>
        </div>
        <div className="pageg-right">
          <div className="pageg-tabs">
            <p className='pageg-tabs-home'>Home</p>
            <p className='pageg-tabs-posts'>Posts</p>
          </div>
          <div className="pageg-heading">
            <img src={Link_icon} alt="link icon" className='icon-background'/>
            <p>Links</p>
          </div>
          <div className="pageg-images">
            <div className="image1">
              <img src={image1} alt="image1" />
              <div className="image1-text">
                <h1>Internet Money Course</h1>
                <h3>Learn how to make money on the internet. Coming soon!</h3>
              </div>
              <p>Coming Soon</p>
            </div>
            <div className="image2">
              <img src={image2} alt="image2" />
              <div className="image2-text">
                <h1>Notion Creator Hub</h1>
                <h3>Start organizing your life and business with the creator hub.</h3>
              </div>
              <p>Purchase</p>
            </div>
            <div className="image3">
              <img src={image3} alt="image3" className='image3-img' />
              <div className="image3-text">
                <h1>Rewind 2023</h1>
                <h3>Your year of BeReal memories</h3>
                <h3>Printed in a custom book</h3>
              </div>
              <p>Order Yours</p>
              <img src={forward_icon} alt="arrow" className='forward-icon icon-background' />
            </div>
          </div>
          <div className="pageg-newsletter">
            <div className="pageg-newsletter-heading">
              <img src={attherate} alt="@" />
              <p>Join the newsletter</p>
            </div>
            <div className="pageg-newsletter-form">
              <p className='name'>Name</p>
              <p className='email_address'>Email Address</p>
              <p className='submit'>Submit <img src={arrow_icon} alt="icon" /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pageg;
