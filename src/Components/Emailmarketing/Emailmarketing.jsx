import React from 'react'
import './Emailmarketing.css'
import emailLogo from '../../Assets/email marketing logo.svg';
import mailchimp from '../../Assets/email marketing mailchip.webp';
import convertkit from '../../Assets/email marketing convertkit.webp';
import email from '../../Assets/email marketing email.svg';
import inbox from '../../Assets/email marketing inbox.svg';
import newsletter from '../../Assets/email marketing newsletter.svg';
import notifications from '../../Assets/email marketing notification.svg';

const Emailmarketing = () => {
  return (
    <div className='emailmarketing'>
      <div className="emailmarketing-heading">
        <div className="email-marketing-logo">
        <img src={emailLogo} alt="Email Marketing" />
        <p>EMAIL MARKETING</p>
        </div>
        <h1>Just Click Send.
          <br/>
        <span className='blue'>Send Broadcasts And 
        Sequences.</span></h1>
      </div>
      <div className="emailmarketing-replaces">
        <div className="emailmarketing-replaces-mail">
            <img src={mailchimp} alt="Mailchimp" />
            <p>Replaces Mailchimp</p>
        </div>
        <div className="emailmarketing-replaces-kit">
            <img src={convertkit} alt="ConvertKit" />
            <p>Replaces ConvertKit</p>
        </div>
      </div>
      <div className="emailmarketing-pics">
        <div className="pics-a">
        <div className="email">
            <img src={email} alt="Email" />
            <p>Send Email Broadcasts.</p>
        </div>
        <div className="inbox">
            <img src={inbox} alt="Inbox" />
            <p>Hit The Inbox.</p>
            <p>Avoid The Spam Folder</p>
        </div>
        </div>
        <div className="pics-a">
        <div className="newsletter">
            <img src={newsletter} alt="Newsletter" />
            <div class="div-block-523">
              <div class="div-block-533">
                <div class="text-block-92">🪄</div>
                </div>
                </div>
            <p>Notion-Style.</p>
            <p>Drag And Drop Email Builder.</p>
        </div>
        <div className="notifications">
            <img src={notifications} alt="Notifications" />
            <div class="div-block-523">
              <div class="div-block-533">
                <div class="text-block-92">🪄</div>
                </div>
                </div>
            <p>All-You-Can-Send.</p>
            <p>Unlimited Sends For Everyone.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Emailmarketing
