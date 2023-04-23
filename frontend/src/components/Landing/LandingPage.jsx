import React, { useState } from 'react'
import Login from '../Account/Login'
import LoginUpper from '../Account/LoginUpper'
import Signup from '../Account/Signup'
import Footer from '../Footer/Footer'
import LandingLast from './LandingLast'
import LandingMiddle from './LandingMiddle'
import LandingUpper from './LandingUpper'

const LandingPage = () => {
  const[outerSidebar,setShowSignupsidebar] = useState(false);
  const[loginSidebar,setLoginSidebar] = useState(false)
  

  const toggleSidebar = () => {
    setShowSignupsidebar((prevState) => !prevState)
  }

  const toggleLoginsidebar = () => {
    setLoginSidebar((prevState) => !prevState)
  }

  return (
    <div>
        <Signup outerSidebar = {outerSidebar} />
        <Login loginSidebar = {loginSidebar} />
        <LandingUpper openSidebar = {toggleSidebar}/>
        <LoginUpper openLoginSide = {toggleLoginsidebar} />
        <LandingMiddle />
        <LandingLast />
        <Footer />
    </div>
  )
}

export default LandingPage