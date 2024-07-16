import React from 'react'
import './Linkinbio.css'
import linkinbio_link from '../../Assets/linkinbio-link.svg';
import linktree from '../../Assets/linktree.webp';
import beacons from '../../Assets/beacons.webp';
import linkinbio_newsletter from '../../Assets/linkinbio-newsletter.svg';
import linkinkbio_videos from '../../Assets/linkinbio-videos.svg';
import linkinbio_mysocials from '../../Assets/linkinbio-mysocials.svg';
import linkinbio_latestvideo from '../../Assets/linkinbio-latest-video.svg';
import linkinbio_blog from '../../Assets/653bc4fd75e21f382bfee64e_PostImage.png';
import linkinbio_scott from '../../Assets/linkinbio-scott.svg';


const Linkinbio = () => {
  return (
    <div className='linkinbio'>
      <div className="linkinbio-heading">
        <div className="linkinbio-logo">
            <img src={linkinbio_link} alt="link" />
            <p>LINK-IN-BIO PAGE</p>
        </div>
        <h1>Build A Stunning Link-In-Bio Page For Your <span className='purple-h1'>Links, Content And Products.</span></h1>
      </div>
      <div className="linkinbio-replaces">
        <div className="linkinbio-replaces-linktree">
            <img src={linktree} alt="linktree" />
            <p>Replaces Linktree</p>
        </div>
        <div className="linkinbio-replaces-beacons">
            <img src={beacons} alt="beacons" />
            <p>Replaces Beacons</p>
        </div>
      </div>
      <div className="linkinbio-pics">
      <div className="pics-q">
          <div className="email-list">
            <img src={linkinbio_newsletter} alt="newsletter" />
            <div className="linkinbio-p1">
            <p>Build An Email List.</p>
            </div>
          </div>
          <div className="videos">
            <img src={linkinkbio_videos} alt="videos" />
            <div className="linkinbio-p2">
            <p>Not just Links.</p>
            <p>Embed Youtube Videos And Tweets.</p>
            </div>
          </div>
        </div>
        <div className="pics-r">
          <div className="mysocials">
            <img src={linkinbio_mysocials} alt="mysocials" />
            <div className="below-image">
            <div className="below-image-div">
            <div className="text-block-92">📁</div>
            </div>
            <p>Big-Linker?</p>
            <p>Organise Links Into Folders.</p>
            </div>
          </div>
          <div className="latestvideos">
            <img src={linkinbio_latestvideo} alt="latest videos" className='mainimage'/>
            <div className="below-image">
            <div className="below-image-div">
            <div className="text-block-92">🪄</div>
            </div>
            <p>Auto-Sync Your Latest Videos.
              <br/>
              Youtube + Tiktok.</p>
            </div>
          </div>
        </div>
        <div className="pics-s">
          <div className="blogposts">
            <img src={linkinbio_blog} alt="blog posts" />
            <div className="linkinbio-p3">
            <p>Publish Blog Posts.</p>
            </div>
          </div>
          <div className="yourspace">
            <img src={linkinbio_scott} alt="michaelscott.com" />
            <div className="linkinbio-p4">
            <p>Your Space. Not Ours.</p>
            <p>Use Your Own Domain.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Linkinbio
