import React from 'react'
import './landing.css'

const LandingLast = () => {
  return (
    <div>
        <div>
            <h1 className='thirdRes'>Resturant in your</h1>
            <h1 className='thirdLandRes'>Pocket</h1>
            <p className='paraLast'>Order from your favorite restaurants & track</p>
            <p className='paraLand'>on the go, with the all-new Swiggy app.</p>
        </div>
        <div className='google-Images'>
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" alt="" className='googleImage1' />
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" alt="" className='googleImage2' />
        </div>
        <div className='lastLanding-Image'>
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n" alt="" className='lastLanding-Image1'/>
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn" alt="" className='lastLanding-Image2' />
        </div>
    </div>
  )
}

export default LandingLast