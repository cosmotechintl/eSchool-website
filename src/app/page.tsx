import React from 'react'
import Home from './component/HomePage/home'
import IntroductionPart from './component/IntroductionSection/introductionSection'
import ApplicationAdvantages from './component/ApplicationAdvantage/applicationadvantages'
import Contact from './component/ContactUs/contact'
import ThankYou from './component/ThankYou/thankyou'

const page = () => {
  return (
    <div>
     
      <Home/>
      <IntroductionPart/>
      <ApplicationAdvantages/>
      <Contact/>
      <ThankYou/>
    </div>
  )
}

export default page