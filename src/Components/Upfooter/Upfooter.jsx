import React from 'react';
import './Upfooter.css';
import image from '../../Assets/upfooter.webp';
import arrow from '../../Assets/upfooter arrow.webp';

const Upfooter = () => {
  return (<>
  <div className="upfooter-whitestrip"></div>
    <div className='upfooter'>
        <div className="upfooter-text">
          <h1>The most advanced link-in-bio. Ever.</h1>
          <p>Everything you need to run your creator-business, in one place. It's quick, easy and free to get started.</p>
          <button>Get started <img src={arrow} alt="arrow icon" /></button>
        </div>
        <div className="upfooter-image">
          <img src={image} alt="examples" />
        </div>
    </div>
    </>
  );
}

export default Upfooter;
