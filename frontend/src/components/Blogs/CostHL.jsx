import React from 'react'
import Footer from '../Footer/Footer'
import RestPageOne from '../Restaurants/RestPageOne'
import RestPageTwo from '../Restaurants/RestPageTwo'
import BlogNav from './BlogNav'
import './blogs.css'

const CostHL = () => {
  return (
    <>
    <RestPageOne />
    <RestPageTwo />
    <BlogNav/>
    <div className='releOne'>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/tpyxtym0wi94ukzvwgvt" alt="" className='relImage' />
        <p className='chick'>Gourmet Couch</p>
        <p className='chick1'>American,Grill,Fast Food,Snacks</p>
        <div className='innerRel'>
          <p>Rating 4.1</p>
          <p>45 MINS</p>
          <p>Rs2500/- FOR TWO</p>
        </div>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/18b2d97ecb38da44c8650f48af7fdf85" alt="" className='relImage' />
        <p className='chick'>KURRAKU</p>
        <p className='chick1'>American,Grill,Fast Food,Snacks</p>
        <div className='innerRel'>
        <p>Rating 4.2</p>
        <p>37 MINS</p>
        <p>Rs2000/- FOR TWO</p>
        </div>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qjmt9lvjewoebq4aumh0" alt="" className='relImage' />
        <p className='chick'>Truffles</p>
        <p className='chick1'>American,Desserts,Continental,mexican</p>
       <div className='innerRel'>
       <p>Rating 4.4</p>
        <p>30 Mins</p>
        <p>Rs2000/- FOR TWO</p>
       </div>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kkcixpbzrwbt7ohqpwsh" alt="" className='relImage' />
        <p className='chick'>Yauatcha</p>
        <p className='chick1'> American,Desserts,Continental</p>
        <div className='innerRel'>
        <p>Rating 4.4</p>
        <p>30 Mins</p>
        <p>Rs1800/- FOR TWO</p>
        </div>
      </div>
    </div>
    <div className='releOne'>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/d2jtuajchfwoao5yodyo" alt="" className='relImage' />
        <p className='chick'>Tandoor Restaurant</p>
        <p className='chick1'>North indian</p>
        <div className='innerRel'>
          <p>Rating 4.6</p>
          <p>45 MINS</p>
          <p>Rs1400/- FOR TWO</p>
        </div>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/738a157b16bc11b9327e998f1f7cc1ee" alt="" className='relImage' />
        <p className='chick'>Mayya</p>
        <p className='chick1'>South Indian</p>
        <div className='innerRel'>
        <p>Rating 4.1</p>
        <p>37 MINS</p>
        <p>Rs1300/- FOR TWO</p>
        </div>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lx0tpfgsbqygafwh30wh" alt="" className='relImage' />
        <p className='chick'>Misu </p>
        <p className='chick1'>American,Desserts,Continental,mexican</p>
       <div className='innerRel'>
       <p>Rating 3.4</p>
        <p>30 Mins</p>
        <p>Rs1350/- FOR TWO</p>
       </div>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hxgas7ihmt3meltfft9o" alt="" className='relImage' />
        <p className='chick'>Stegi</p>
        <p className='chick1'>Italian</p>
        <div className='innerRel'>
        <p>Rating 4.3</p>
        <p>30 Mins</p>
        <p>Rs1200/- FOR TWO</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default CostHL