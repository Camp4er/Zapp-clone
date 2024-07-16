import React from 'react';
import './Autosync.css'
import arrow_icon from '../../Assets/intro-arrow.svg';
import phone_image from '../../Assets/AutoSync mr.beast image.webp';
import bold_arrow_icon from '../../Assets/AutoSync bold arrow icon.webp';

const Autosync = () => {
  return (
    <div className='autosync'>
      <div className="autosync-left">
        <h1>Auto-Sync Your Content From </h1>
        <div className="autosync-left-social">
        <div className="autosync-left-instagram">· Instagram</div>
        <div className="autosync-left-tiktok">· TikTok</div>
        <div className="autosync-left-youtube">· Youtube</div>
        </div>
        <div className="autosync-left-button">
            <button>Learn More <img src={arrow_icon} alt="arrow icon" /></button>
        </div>
      </div>
      <div className="autosync-right">
        <div className="autosync-right-heading">
            <img src={bold_arrow_icon} alt="bold arrow icon" />
            <h1>Latest TikTok's</h1>
        </div>
        <img src={phone_image} alt="phone" />
      </div>
    </div>
  )
};

export default Autosync;
