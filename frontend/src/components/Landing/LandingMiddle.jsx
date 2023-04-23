import React from 'react'
import middleImage1 from '../../Images/middleImage1.png'
import middleImge2 from '../../Images/middleImage2.png'
import middleImage3 from '../../Images/middleImage3.png'
import './landing.css';

const LandingMiddle = () => {
  return (
    <div className='outer-middle'>
        <div className='middle'>
        <div className='middlePart1'>
            <img src={middleImage1} alt="image1" />
            <h1 className='minni'>No Minimum Order</h1>
            <p className='minni'>Order in for yourself or for the group,</p>
            <p className='para1'>with no restriction on order value</p>
        </div>
        <div className='middlePart2'>
            <img src={middleImge2} alt="image2" />
            <h1 className='minni'>Live Order Tracking</h1>
            <p className='minni'>Konw where your order is at all times,</p>
            <p className='para1'>from the resturant to your doorstep</p>
        </div>
        <div className='middlePart3'>
            <img src={middleImage3} alt="image3" />
            <h1 className='minni'>Lightning Fast Delivery</h1>
            <p className='minni'>Experience Swiggy's superFast Delivery</p>
            <p className='para1'>for food delivered fresh & on time</p>
        </div>
    </div>
    </div>
  )
}

export default LandingMiddle