import React from 'react'
import Intro from '../Components/Intro/Intro'
import Pageg from '../Components/Pageg/Pageg'
import WhatIsZaap from '../Components/WhatIsZaap/WhatIsZaap'
import People from '../Components/People/People'
import ColoredBorder from '../Components/ColoredBorder/ColoredBorder'
import Linkinbio from '../Components/Linkinbio/Linkinbio'
// import Onlinestore from '../Components/Onlinestore/Onlinestore'
// import Emailmarketing from '../Components/Emailmarketing/Emailmarketing'
import Upfooter from '../Components/Upfooter/Upfooter'
import Launchinfo from '../Components/Launchinfo/Launchinfo'
import Examples from '../Components/Examples/Examples'
import Linklist from '../Components/Linklist/Linklist'
import Onlinestore from '../Components/Onlinestore/Onlinestore'
import Emailmarketing from '../Components/Emailmarketing/Emailmarketing'

const Home = () => {
  return (
    <>
      <Intro/>
      <Pageg/>
      <People/>
      <WhatIsZaap/>
      <ColoredBorder/>
      <Linkinbio/>
      <Examples/>
      <Linklist/>
      <Onlinestore/>
      <Emailmarketing/>
      <Launchinfo/>
      <Upfooter/> 
    </>
  )
}

export default Home

