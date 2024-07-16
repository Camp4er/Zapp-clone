import React from 'react';
import './ColoredBorder.css'
import arrow_icon from '../../Assets/intro-arrow.svg';
import bold_arrow_icon from '../../Assets/AutoSync bold arrow icon.webp';
import play_button_coloredBorder from '../../Assets/play button.svg';
import beast_black from '../../Assets/Mr Beast black.webp';
import beast_white from '../../Assets/Mr Beast white.webp';
import beast_screen from '../../Assets/beast screen.webp';
import star_icon from '../../Assets/pageg link icon.webp';
import forward_arrow from '../../Assets/pageg forward icon.svg';
import orange from '../../Assets/pageg img1.webp';
import white from '../../Assets/pageg img 2.webp';
import brown from '../../Assets/pageg img3.webp';
import triple_image from '../../Assets/triple image.png';
// import coloured_border from '../../Assets/65d77f850499172b9ebaaf64_Frame 625945.png';

const ColoredBorder = () => {
  return (
    <div className='coloredborder-box'>
        <div className="div-border">
            <div className="div-border-1"></div>
            <div className="div-border-1 shadow"></div>
        </div>
       <div className="horizontalwrap">
        <div className="horizontal-wrap-1">
            <div className="horizontal-wrap-1-1">
                <div className="horizontal-heading">
                    <h1 className="heading left-align">Auto-Sync Your Content From</h1>
                    <div className="div-block-2">
                        <div className="div-block-2-social">· Instagram</div>
                    </div>
                    <div className="div-block-2 dark">
                        <div className="div-block-2-social">· TikTok</div>
                    </div>
                    <div className="div-block-2 red">
                    <div className="div-block-2-social">· Youtube</div>
                    </div>
                    <div className="space"></div>
                    <div className="newbutton w-inline-block clickable">
                        <p>Learn More</p> 
                        <img src={arrow_icon} alt="arrow" loading='lazy' className='button-image-icon' />
                    </div>
                </div>
            </div>
            <div className="horizontal-wrap-1-1 right">
                <div className="horizontal-right-pic purple">
                    <div className="horizontal-right-pic-folder">
                        <div className="horizontal-right-pic-folder-heading">
                            <div className="socialicon">
                                <img src={bold_arrow_icon} alt="bold arrow" loading='lazy' className='bold-arrow-icon'/>
                            </div>
                            <div className="zaapheading dark">Latest TikTok's</div>
                        </div>
                        <div className="horizontal-right-pic-folder-1 purple">
                            <div className="socialicon">
                            <img src={forward_arrow} alt="forward arrow" className='image-221' />
                            </div>
                        </div>
                        <div className="horizontal-right-pic-folder-2">
                            <div className="tiktok">
                                <div className="socialicon">
                                    <img src={play_button_coloredBorder} alt="play button" className='image-221' />
                                </div>
                                <img src={beast_black} alt="mr. beast black t-shirt" className='image-213'/>
                            </div>
                            <div className="tiktok">
                            <div className="socialicon">
                                    <img src={beast_white} alt="mr. beast white t-shirt" className='image-213'/>
                                </div>
                            </div>
                            <div className="tiktok">
                                <div className="socialicon">
                                <img src={forward_arrow} alt="forward arrow" className='image-221' />                                </div>
                                <img src={beast_screen} alt="mr. beast screen" className='image-213'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
       <div className="div-border">
            <div className="div-border-1"></div>
            <div className="div-border-1 shadow"></div>
        </div>
        <div className="horizontalwrap green">
        <div className="horizontal-wrap-1">
        <div className="horizontal-wrap-1-1 right">
                <div className="horizontal-right-pic green">
                    <div className="horizontal-right-pic-folder">
                        <div className="horizontal-right-pic-folder-heading">
                            <div className="socialicon">
                                <img src={star_icon} alt="stars, linkicon" loading='lazy' className='star-link-icon'/>
                            </div>
                            <div className="zaapheading dark">My Products</div>
                        </div>
                        <div className="horizontal-right-pic-folder-1 green">
                            <div className="socialicon">
                                <img src={forward_arrow} alt="forward arrow" className='upper-forward-icon-green' />
                            </div>
                        </div>
                        <div className="horizontal-right-pic-folder-2">
                            <div className="link w-inline-block">
                                <div className="div-block-536">
                                    <img src={orange} alt="orange" className="link-image" />
                                </div>
                                <div className="div-block-522"></div>
                                <div className="link-content">
                                    <div>
                                    <div class="zaapheading">Internet Money Course</div>
                                    <div class="link-description">Learn how to make money on the internet. Coming soon!</div>
                                    </div>
                                    <div className="link-button">
                                    <div class="pagebuttontext">Coming Soon</div>
                                    </div>
                                </div>
                            </div>
                            <div className="link w-inline-block">
                                <div className="div-block-536">
                                    <img src={white} alt="white" className='link-image'/>
                                </div>
                                <div className="div-block-522 white"></div>
                                <div className="link-content white">
                                    <div>
                                    <div class="zaapheading dark">Notion Creator Hub</div>
                                    <div class="link-description dark">Start organising your life and business with the creator hub.</div>
                                    </div>
                                    <div className="link-button">
                                    <div class="pagebuttontext">Purchase</div>
                                    </div>
                                </div>
                            </div>
                            <div className="link w-inline-block">
                                <div className="div-block-536">
                                    <img src={brown} alt="brown" className="link-image" />
                                </div>
                                <div className="div-block-522 brown"></div>
                                <div className="link-content">
                                    <div>
                                    <div class="zaapheading">Rewind 2023</div>
                                    <div class="link-description">Your year of BeReal memories. Printed in a custom book.</div>
                                    </div>
                                    <div class="link-button">
                                        <div class="pagebuttontext">Order Yours</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="horizontal-right-pic-folder">
                        <div className="horizontal-right-pic-folder-heading">
                            <div className="socialicon">
                                <img src={star_icon} alt="stars, linkicon" loading='lazy' className='star-link-icon'/>
                            </div>
                            <div className="zaapheading dark">Templates</div>
                        </div>
                        <div className="horizontal-right-pic-folder-1 green">
                            <div className="socialicon">
                                <img src={forward_arrow} alt="forward arrow" />
                            </div>
                        </div>
                        <div className="horizontal-right-pic-folder-2">
                            <div className="link w-inline-block">
                                <div className="div-block-536">
                                    <img src={white} alt="white" className="link-image" />
                                </div>
                                <div className="div-block-532"></div>
                                <div className="link-content white">
                                    <div>
                                    <div class="zaapheading dark">Notion Creator Hub</div>
                                    <div class="link-description dark">Start organising your life and business with the creator hub.</div>
                                    </div>
                                    <div className="link-button">
                                    <div class="pagebuttontext">Coming Soon</div>
                                    </div>
                                </div>
                            </div>
                            <div className="link w-inline-block">
                                <div className="div-block-536">
                                    <img src={brown} alt="brown" className='link-image'/>
                                </div>
                                <div className="div-block-522 brown"></div>
                                <div className="link-content brown">
                                    <div>
                                    <div class="zaapheading">Rewind 2023</div>
                                    <div class="link-description">Your year of BeReal memories. Printed in a custom book.</div>
                                    </div>
                                    <div className="link-button">
                                    <div class="pagebuttontext">Order Yours</div>
                                    </div>
                                </div>
                            </div>
                            <div className="link w-inline-block">
                                <div className="div-block-536">
                                    <img src={orange} alt="orange" className="link-image" />
                                </div>
                                <div className="div-block-532"></div>
                                <div className="link-content">
                                    <div>
                                    <div class="zaapheading">Internet Money Course</div>
                                    <div class="link-description">Learn how to make money on the internet. Coming soon!</div>
                                    </div>
                                    <div class="link-button">
                                        <div class="pagebuttontext">Coming Soon</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="horizontal-wrap-1-1">
                <div className="horizontal-heading">
                    <h1 className="heading left-align">Organise links into folders.</h1>
                    <div className="heading-text">Say goodbye to endless list of links.</div>
                    <div className="space"></div>
                    <div className="newbutton w-inline-block clickable">
                        <p>Learn More</p> 
                        <img src={arrow_icon} alt="arrow" loading='lazy' className='button-image-icon' />
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="div-border">
            <div className="div-border-1"></div>
            <div className="div-border-1 shadow"></div>
        </div>
        <div className="horizontalwrap orange">
        <div className="horizontal-wrap-1">
            <div className="horizontal-wrap-1-1">
                <div className="horizontal-heading">
                    <h1 className="heading left-align">Publish Blog Posts.</h1>
                    <div className="heading-text">Public blog posts. Directly to your website</div>
                    <div className="space"></div>
                    <div className="newbutton w-inline-block clickable">
                        <p>Learn More</p> 
                        <img src={arrow_icon} alt="arrow" loading='lazy' className='button-image-icon' />
                    </div>
                </div>
            </div>
            <div className="horizontal-wrap-1-1 right">
                <img src={triple_image} alt="triple" className='image-223' />
            </div>
        </div>
        </div>
        <div className="div-border">
            <div className="div-border-1"></div>
            <div className="div-border-1 shadow"></div>
        </div>
    </div>
  )
}

export default ColoredBorder
