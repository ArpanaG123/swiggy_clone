import React from 'react'
import Footer from '../Footer/Footer'
import RestPageOne from '../Restaurants/RestPageOne'
import RestPageTwo from '../Restaurants/RestPageTwo'
import BlogNav from './BlogNav'
import './blogs.css'

const Relevance = () => {
  
  return (
    <>
    <RestPageOne/>
    <RestPageTwo />
    <BlogNav />
    <div className='releOne'>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/joazw8wzy9tf4ejdcxae" alt="" className='relImage' />
        <p className='chick'>chicking</p>
        <p className='chick1'>American,Grill,Fast Food,Snacks</p>
        <div className='innerRel'>
          <p>Rating 4.1</p>
          <p>45 MINS</p>
          <p>Rs500/- FOR TWO</p>
        </div>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qol6dzbjxyse0tylbznu" alt="" className='relImage' />
        <p className='chick'>Leon's Burger and Wings</p>
        <p className='chick1'>American,Grill,Fast Food,Snacks</p>
        <div className='innerRel'>
        <p>Rating 4.2</p>
        <p>37 MINS</p>
        <p>Rs300/- FOR TWO</p>
        </div>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cd832b6167eb9f88aeb1ccdebf38d942" alt="" className='relImage' />
        <p className='chick'>Truffles</p>
        <p className='chick1'>American,Desserts,Continental,mexican</p>
       <div className='innerRel'>
       <p>Rating 4.4</p>
        <p>30 Mins</p>
        <p>Rs450/- FOR TWO</p>
       </div>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cd832b6167eb9f88aeb1ccdebf38d942" alt="" className='relImage' />
        <p className='chick'>Truffles</p>
        <p className='chick1'> American,Desserts,Continental</p>
        <div className='innerRel'>
        <p>Rating 4.4</p>
        <p>30 Mins</p>
        <p>Rs450/- FOR TWO</p>
        </div>
      </div>
    </div>
    <div className='releOne'>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/27238ee4292d42c7b705f2ce8671ff80" alt="" className='relImage' />
        <p className='chick'>California Burrito</p>
        <p className='chick1'>American,Grill,Fast Food,Snacks</p>
        <div className='innerRel'>
          <p>Rating 4.6</p>
          <p>45 MINS</p>
          <p>Rs500/- FOR TWO</p>
        </div>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/0e8f93a56b93e43d7627c2c21bc1106c" alt="" className='relImage' />
        <p className='chick'>McDonald's</p>
        <p className='chick1'>American,Grill,Fast Food,Snacks</p>
        <div className='innerRel'>
        <p>Rating 4.1</p>
        <p>37 MINS</p>
        <p>Rs300/- FOR TWO</p>
        </div>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kjilj6yf2fd4vnvqdx6n" alt="" className='relImage' />
        <p className='chick'>Kabab Magic</p>
        <p className='chick1'>American,Desserts,Continental,mexican</p>
       <div className='innerRel'>
       <p>Rating 3.4</p>
        <p>30 Mins</p>
        <p>Rs450/- FOR TWO</p>
       </div>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/d06b7fa84cb8f8193f60d4c2de172347" alt="" className='relImage' />
        <p className='chick'>Easy Bytes by Hotel Empire</p>
        <p className='chick1'> American,Desserts,Continental</p>
        <div className='innerRel'>
        <p>Rating 4.3</p>
        <p>30 Mins</p>
        <p>Rs450/- FOR TWO</p>
        </div>
      </div>
    </div>
    <Footer/>

    </>
  )
}

export default Relevance