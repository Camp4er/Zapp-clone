import React from 'react';
import './WhatIsZapp.css';
import cloud_image from '../../Assets/zapp cloud.svg';
import rectangle_boundary_icon from '../../Assets/whatiszaap rectangle.svg';

const WhatIsZaap = () => {
  return (
    <div className='whatiszaap'>
      <div className="whatiszaap-outer">
        <h2>A single page for your <span className='violet-text'>links, products + content.</span></h2>
        <img src={rectangle_boundary_icon} className="figmabox bottom-right" alt="figmabox bottom-right" />
        <img src={rectangle_boundary_icon} className="figmabox bottom-left" alt="figmabox bottom-left" />
        <img src={rectangle_boundary_icon} className="figmabox top-right" alt="figmabox top-right" />
        <img src={rectangle_boundary_icon} className="figmabox top-left" alt="figmabox top-left" />
        <div className="whatiszaap-outer-heading">Frame 02: What is Zaap</div>
        <div className="whatiszaap-outer-p">
          <p>Turn your audience into a thriving creator business.</p>
        </div>
        <img src={cloud_image} className='cloud-image' alt="cloud" />
      </div>
    </div>
  );
};

export default WhatIsZaap;
