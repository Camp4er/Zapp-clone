import React from 'react';
import './Linklist.css';
import img1 from '../../Assets/linklist1.png';
import img2 from '../../Assets/linklist.png';

const Linklist = () => {
  return (
    <div className='linklist'>
      <div className="linklist-heading">
        <h1>Ditch your boring
        <br/>
        list of links.</h1>
        <p>Boost your clicks by 150% - Zaap pages get more clicks compared to Linktree pages. Auto-sync your latest posts from YouTube and TikTok. The most advanced link-in-bio page. Ever.</p>
      </div>
      <div className="images">
        <div className="image-container-left">
          <img src={img1} alt="Other link-in-bio pages" className='img' />
          <div className="image-caption-div">
          <p className="image-caption">Other 'Link-in-bio' pages</p>
        </div>
        </div>
        <div className="image-container-right">
          <img src={img2} alt="Zaap Pages" className='img' />
          <div className="image-caption-div">
          <p className="image-caption">Zaap Pages</p>
        </div></div>
      </div>
    </div>
  );
}

export default Linklist;
