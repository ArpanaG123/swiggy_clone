import React, { useState } from 'react'
import './landing.css'
import logoImage from '../../Images/logo_swiggy.png'
import rightLanding from '../../Images/landside.png'
import axios from 'axios'
import { Link } from 'react-router-dom'


const LandingUpper = ({openSidebar}) => {
    const[currentLocation,setCurrentLocation] = useState({});

    const getLocation = async() => {
        const location = await axios.get("https://ipapi.co/json");
        setCurrentLocation(location.data)
    }

  return (
    <>
    <div className='headerUpper'>
        <img src={logoImage} alt="logo"  className='landingUp-Image' />
        <h1 className='swiggy-Header'>SWIGGY</h1>
    </div>
    <div className='AccountSetting'>
        <div className='signup' onClick={openSidebar}>
            Sign up
        </div>
    </div>
    <div className="landing-right">
        <img src={rightLanding} alt="rightside" className='rightSide-image' />
    </div>
    <div className='texts-Landing'>
        <h1 className='text-Header'>Hungry ?</h1>
        <p className='para-Text'>Order food from favourite resturant near you.</p>
    </div>
    <div className='locationPart'>
        <div><input type="text" placeholder='Enter Your Delivery Address' value= {currentLocation.city} className = "deliveryAddressLocate" /></div>
        <div className='locate' onClick={getLocation}>Locate Me</div>
    </div>
    <Link to = "/home"><button className='finding-Food' style={{cursor:"pointer"}}>Find Food</button></Link>

    <div>
        <p className="citiesName">POPULAR CITIES IN INDIA</p>
        <div className='names-city'>
            <p className='cit'>Ahmedabad</p>
            <p className='ahm'>Banglore</p>
            <p className='cit'> Chennai</p>
            <p className='ahm'>Delhi</p>
            <p className='cit'>Gurgoan</p>
            <p className='ahm'>Hyderabad</p>
            <p className='cit'>Kolkata</p>
        </div>
        <div className='secondlist-city'>
            <p className='ahm'>Mumbai</p>
            <p className='cit'>Pune</p>
            <p className='ahm'>& more...</p>
        </div>
    </div>

    
    </>
  )
}

export default LandingUpper;