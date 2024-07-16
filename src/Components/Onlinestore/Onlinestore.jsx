import React from 'react'
import './Onlinestore.css'
import cart from '../../Assets/cart image online store.svg';
import gumroad from '../../Assets/gumroad.webp';
import calendly from '../../Assets/calendly.webp';
import payout from '../../Assets/payout.svg';
import digital from '../../Assets/digital-download.svg';
import pay from '../../Assets/pay.svg';
import euro from '../../Assets/euro.webp';
import info from '../../Assets/info.svg';
import bulb from '../../Assets/bulb.jpeg';
import soon from '../../Assets/coming-soon.svg';
import free from '../../Assets/free-offer.svg';

const Onlinestore = () => {
  return (
    <div className='onlinestore'>
      <div className="onlinestore-heading">
      <div className="onlinestore-logo">
        <img src={cart} alt="Cart" />
        <p>YOUR ONLINE STORE</p>
        </div>
        <h1>Make Sales While You Sleep.
          <br/>
        <span className='blue'>Sell Downloads, Coaching
        <br/>
         And More</span>
        </h1>
      </div>
      <div className="onlinestore-replaces">
        <div className="onlinestore-replaces-gumroad">
            <img src={gumroad} alt="Gumroad" />
            <p>Replaces Gumroad</p>
        </div>
        <div className="onlinestore-replaces-calendly">
            <img src={calendly} alt="Calendly" />
            <p>Replaces Calendly</p>
        </div>
      </div>
      <div className="onlinestore-pics">
        <div className="pics-a">
          <div className="payout">
            <div className="p1">
            <p>Easy-Payouts.</p>
            <p>Stripe And PayPal.</p>
            </div>
            <img src={payout} alt="payout" />
          </div>
          <div className="digital-download">
            <div className="p2">
            <p>Sell Digital Downloads. 
              <br/>
              Templates, Courses + More.</p>
            </div>
            <img src={digital} alt="digital" />
          </div>
        </div>
        <div className="pics-b">
          <div className="pay">
            <img src={euro} alt="euro stack" className='euro' />
            <p>Pay-What-You-Want Pricing.</p>
            <img src={pay} alt="pay" className='payimg'/>
          </div>
          <div className="info">
            <img src={bulb} alt="bulb icon" className='bulb'/>
            <p>Know Something?</p>
            <p>Sell Paid Coaching Calls.</p>
            <img src={info} alt="info" className='infoimg'/>
          </div>
        </div>
        <div className="pics-c">
          <div className="coming-soon">
            <div className="p3">
            <p>Coming Soon:</p>
            <p>Discount Codes:</p>
            </div>
            <img src={soon} alt="soon" className='soonimg' />
          </div>
          <div className="free-offer">
            <div className="p4">
            <p>Provide Value For Free.</p>
            <p>Offer Lead Magnets.</p>
            </div>
            <img src={free} alt="free" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Onlinestore
