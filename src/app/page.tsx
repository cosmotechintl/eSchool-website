import React from 'react'
import Home from './component/HomePage/home'
import IntroductionPart from './component/IntroductionSection/introductionSection'
import ApplicationAdvantages from './component/ApplicationAdvantage/applicationadvantages'

const page = () => {
  return (
    <div>
     
      <Home/>
      <IntroductionPart/>
      <ApplicationAdvantages/>
    </div>
  )
}

export default page