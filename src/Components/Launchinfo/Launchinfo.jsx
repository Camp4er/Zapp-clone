import React from 'react';
import './Launchinfo.css'
import tick from '../../Assets/launchinfo-tick.webp';

const Launchinfo = () => {
  return (
    <div className='launchinfo'>
      <div className="launchinfo-title">
        <h1>Launch your
          <br/>
           page in seconds.</h1>
        <p>Say goodbye to complicated website builders. Get your Zapp page launched quickly using our magic page-builder. Start selling and earning today.</p>
      </div>
      <div className="launchinfo-stepcover">
        <div className="launchinfo-stepcover-a">
        <div className="launchinfo-steps">
          <div className="image"><img src={tick} alt="tick logo" /></div>
          <h4>Pick a theme or
            <br/>
            design your own.</h4>
          <p>Pick from our already designed themes, or design a custom theme to match your brand.</p>
        </div>
        <div className="launchinfo-steps">
        <div className="image"><img src={tick} alt="tick logo" /></div>
          <h4>Invite your whole team.</h4>
          <p>Zaap allows you to invite team members to help build, manage and grow your store.</p>
        </div>
        </div>
        <div className="launchinfo-stepcover-a">
        <div className="launchinfo-steps">
        <div className="image"><img src={tick} alt="tick logo" /></div>
          <h4>Embed your content.</h4>
          <p>Embed YouTube videos and Tweets to your page. So visitors don't have to leave your page.</p>
        </div>
        <div className="launchinfo-steps">
        <div className="image"><img src={tick} alt="tick logo" /></div>
          <h4>No Coding Required.</h4>
          <p>Zaap requires zero coding. Designed for everyone. From beginners, to experts.</p>
        </div>
      </div>
      </div>
    </div>
  )
};

export default Launchinfo
