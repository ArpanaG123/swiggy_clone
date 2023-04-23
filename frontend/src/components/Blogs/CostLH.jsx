import React from 'react'
import Footer from '../Footer/Footer'
import RestPageOne from '../Restaurants/RestPageOne'
import RestPageTwo from '../Restaurants/RestPageTwo'
import BlogNav from './BlogNav'
import './blogs.css'

const CostLH = () => {
  return (
    <>
    <RestPageOne />
    <RestPageTwo />
    <BlogNav />
    <div className='releOne'>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/3e341cdb6ad63bb7bcaf0f7538fe7702" alt="" className='relImage' />
        <p className='chick'>Paan House</p>
        <p className='chick1'>Paan</p>
        <div className='innerRel'>
          <p>Rating 4.1</p>
          <p>45 MINS</p>
          <p>Rs50/- FOR TWO</p>
        </div>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nplevbrcqo7iobpvrny9" alt="" className='relImage' />
        <p className='chick'>Sri Ramji Sweets</p>
        <p className='chick1'>sweets</p>
        <div className='innerRel'>
        <p>Rating 4.2</p>
        <p>37 MINS</p>
        <p>Rs75/- FOR TWO</p>
        </div>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jjybxzyxie9dhpe8qcvz" alt="" className='relImage' />
        <p className='chick'>Guru Dutta Chaat</p>
        <p className='chick1'>Chaat,Indian</p>
       <div className='innerRel'>
       <p>Rating 4.4</p>
        <p>30 Mins</p>
        <p>Rs90/- FOR TWO</p>
       </div>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ug9l24encjpduyjxifeg" alt="" className='relImage' />
        <p className='chick'>Kolkata Famous Kati Roll</p>
        <p className='chick1'> American,Desserts,Continental</p>
        <div className='innerRel'>
        <p>Rating 4.4</p>
        <p>30 Mins</p>
        <p>Rs99/- FOR TWO</p>
        </div>
      </div>
    </div>
    <div className='releOne'>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/okjfoyr1ppofcsqvqsyz" alt="" className='relImage' />
        <p className='chick'>Bikaners sweets</p>
        <p className='chick1'>sweets</p>
        <div className='innerRel'>
          <p>Rating 4.6</p>
          <p>45 MINS</p>
          <p>Rs99/- FOR TWO</p>
        </div>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vojof3tfxr0i3kwpsp3e" alt="" className='relImage' />
        <p className='chick'>Karnataka Bhel House</p>
        <p className='chick1'>Chaat</p>
        <div className='innerRel'>
        <p>Rating 4.1</p>
        <p>37 MINS</p>
        <p>Rs100/- FOR TWO</p>
        </div>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lynwmpukcdxjrizoklfa" alt="" className='relImage' />
        <p className='chick'>Bombay Vada Pav center</p>
        <p className='chick1'>North Indian</p>
       <div className='innerRel'>
       <p>Rating 3.4</p>
        <p>30 Mins</p>
        <p>Rs100/- FOR TWO</p>
       </div>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qk1voy6nv9rv3k6yqj6c" alt="" className='relImage' />
        <p className='chick'>Bombay Kulfi</p>
        <p className='chick1'>Desserts,Ice cream</p>
        <div className='innerRel'>
        <p>Rating 4.3</p>
        <p>30 Mins</p>
        <p>Rs100/- FOR TWO</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default CostLH