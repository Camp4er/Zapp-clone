import React from 'react';
import './Examples.css';
import image1 from '../../Assets/moving1.png';
import image2 from '../../Assets/moving2.png';
import image3 from '../../Assets/moving3.png';
import image4 from '../../Assets/moving4.png';
import logo1 from '../../Assets/logo1.png';
import logo2 from '../../Assets/logo2.png';
import logo3 from '../../Assets/logo3.png';
import logo4 from '../../Assets/logo4.png';

const Examples = () => {
  return (
    <div className='examples'>
      <div className="examples-text">
        <div className="examples-logo">
          <div className='examples-logo-text'>EXAMPLE PAGES</div>
        </div>
        <h1>The Best Looking Link In Bio. 
          <br/>
          <span className='blue'>See For Yourself:</span>
        </h1>
      </div>
      <div className="examples-images">
        <div className="examples-images-X">
          <div className="examples-images-X1">
            <div className="X1-image">
              <img src={image1} alt="Ben Rein" />
            </div>
            <div className="X1-content">
              <img src={logo1} alt="profile pic" />
              <div className="X1-text">
                <h1>Ben Rein</h1>
                <h2>1M+ Followers</h2>
              </div>
            </div>
          </div>
          <div className="examples-images-X2">
            <div className="X2-image">
              <img src={image2} alt="Dain Walker" />
            </div>
            <div className="X2-content">
              <img src={logo2} alt="profile pic" />
              <div className="X2-text">
                <h1>Dain Walker</h1>
                <h2>500k+ Followers</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="examples-images-Y">
          <div className="examples-images-Y1">
            <div className="Y1-image">
              <img src={image3} alt="Wealth" />
            </div>
            <div className="Y1-content">
              <img src={logo3} alt="profile pic" />
              <div className="Y1-text">
                <h1>Wealth</h1>
                <h2>8.7M Followers</h2>
              </div>
            </div>
          </div>
          <div className="examples-images-Y2">
            <div className="Y2-image">
              <img src={image4} alt="Clips" />
            </div>
            <div className="Y2-content">
              <img src={logo4} alt="profile pic" />
              <div className="Y2-text">
                <h1>Clips</h1>
                <h2>14M Followers</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Examples;
