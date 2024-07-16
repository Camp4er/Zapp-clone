import React from 'react';
import './Footer.css';
import Plain_Zaap_Logo from '../../Assets/plain zaap logo.webp';
import Terms from '../../Assets/Footer terms.webp';
import Privacy from '../../Assets/Footer privacy.webp';
import Zapp from '../../Assets/Footer connect zapp.webp';
import Discord from '../../Assets/Footer connect discord.webp';
import Insta from '../../Assets/Footer connect insta.webp';
import Twitter from '../../Assets/Footer connect twitter.webp';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section legal-section">
        <img src={Plain_Zaap_Logo} alt="website logo" className="footer-logo" />
        <p className='legal '>© Copyright 2024 
        <br/>
          All rights reserved</p>
        <div className="footer-policies">
          <p><img src={Terms} alt="Terms" /> Terms</p>
          <p><img src={Privacy} alt="Privacy" /> Privacy</p>
        </div>
      </div>

      <div className="footer-section slit">
        <h4>Platform</h4>
        <p>Pricing</p>
        <p>Gallery</p>
        <p>Feature Request</p>
        <p>What's New</p>
      </div>

      <div className="footer-section slit">
        <h4>Zaap Vs</h4>
        <p>Compare</p>
        <p>Vs Gumroad</p>
        <p>Vs Linktree</p>
        <p>Vs Beacons</p>
      </div>

      <div className="footer-section slit">
        <h4>Resources</h4>
        <p>Instagram Course</p>
        <p>Social Media Templates</p>
        <p>Magic Card</p>
        <p>Blog</p>
      </div>

      <div className="footer-section slit">
        <h4>Company</h4>
        <p>About Us</p>
        <p>Jobs</p>
        <p>Current Status</p>
      </div>

      <div className="footer-section connect-section">
        <h4>Connect</h4>
        <div className="footer-links-icons">
            <div className="connect-logo"><img src={Zapp} alt="Zapp connect logo" className='icons-footer' /></div>
            <div className="connect-logo"><img src={Discord} alt="Discord connect" className='icons-footer' /></div>
            <div className="connect-logo"><img src={Insta} alt="Instagram connect" className='icons-footer' /></div>
            <div className="connect-logo"><img src={Twitter} alt="X/Twitter connect" className='icons-footer' /></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
