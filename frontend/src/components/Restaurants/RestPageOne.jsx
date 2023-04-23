import React  from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import homeLogo from '../../Images/logo_swiggy.png'
import './restaurant.css'

const RestPageOne = () => {
    const navigate = useNavigate();
    const {cartTotalQuantity} = useSelector(state => state.cart)

    const returnHome = () => {
        navigate("/")
    }
    
    
  return (
    <div className='HomeNavigation'>
        <div>
            <img src={homeLogo} alt="" className='mainLogo' />
            <span className='locationMain'>Location - Bhopal</span>
            <hr  className='mainLine'/>
        </div>
        <div className='serachBar'>
            <i class="ri-search-line"></i>
            <span className='serachLine'>Search</span>
        </div>
        <div className='restOffer'>
            <i class="ri-percent-line"></i>
            <span className='spanOffer'>Offers</span>
        </div>
        <div className='restuHelp'>
            <i class="ri-question-fill"></i>
            <span className='RestHelp'>Help</span>
        </div>
        <div className='signInRest' onClick={returnHome}>
            <i class="ri-admin-fill"></i>
            <span className='signingRest'>Logout</span>
        </div>
        <Link to = "/cart">
        <div className='restCart'>
            <i class="ri-shopping-cart-line"></i>
            <span className='addingCart'>Cart</span>
            <span className='quantityCount'>{cartTotalQuantity}</span>
        </div>
        </Link>
    </div>
  )
}

export default RestPageOne