import React from 'react'
import Home from './component/HomePage/home'
import IntroductionPart from './component/IntroductionSection/introductionSection'
import ApplicationAdvantages from './component/ApplicationAdvantage/applicationadvantages'
import Contact from './component/ContactUs/contact'

const page = () => {
  return (
    <div>
     
      <Home/>
      <IntroductionPart/>
      <ApplicationAdvantages/>
      <Contact/>
    </div>
  )
}

export default page