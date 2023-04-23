import React from 'react'
import './restaurant.css'
import Carousel from 'react-elastic-carousel'
import Caro1 from '../../Images/carousel.png'
import Caro2 from '../../Images/caro2.png'
import Caro3 from '../../Images/caro3.png'
import Caro4 from '../../Images/caro4.png'
import Caro5 from '../../Images/caro5.png'
import caro6 from '../../Images/caro6.png'
import Caro7 from '../../Images/caro7.png'


const breakPoints = [
  {itemsToShow:4}
]

const RestPageTwo = () => {
  return (
    <div className='carouselPage'>
      <Carousel breakPoints={breakPoints}>
        <img src={Caro1} alt="" className='imageCaro1' />
        <img src={Caro2} alt="" className='imageCaro1' />
        <img src={Caro3} alt="" className='imageCaro1' />
        <img src={Caro4} alt="" className='imageCaro1' />
        <img src={Caro5} alt="" className='imageCaro1' />
        <img src={caro6} alt="" className='imageCaro1' />
        <img src={Caro7} alt="" className='imageCaro1'/>
      </Carousel>
    </div>
  )
}

export default RestPageTwo