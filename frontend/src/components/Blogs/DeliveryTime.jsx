import React from 'react'
import Footer from '../Footer/Footer'
import RestPageOne from '../Restaurants/RestPageOne'
import RestPageTwo from '../Restaurants/RestPageTwo'
import BlogNav from './BlogNav'
import './blogs.css'


const DeliveryTime = () => {
  return (
    <>
    <RestPageOne />
    <RestPageTwo />
    <BlogNav />
    <div className='releOne'>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/o77uezd0iftxb1czbnla" alt="" className='relImage' />
        <p className='chick'>Theobroma</p>
        <p className='chick1'>American,Grill,Fast Food,Snacks</p>
        <div className='innerRel'>
          <p>Rating 4.6</p>
          <p>45 MINS</p>
          <p>Rs500/- FOR TWO</p>
        </div>
        <p className='freeDel'>Free Delivery</p>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fbz10fgdbnaiordkbiet" alt="" className='relImage' />
        <p className='chick'>Kabab Korner</p>
        <p className='chick1'>American,Grill,Fast Food,Snacks</p>
        <div className='innerRel'>
        <p>Rating 4.4</p>
        <p>37 MINS</p>
        <p>Rs300/- FOR TWO</p>
        </div>
        <p className='freeDel'>Free Delivery</p>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/sv7p8xmdlnw8hr0qzsxf" alt="" className='relImage' />
        <p className='chick'>Sahi Kitchens</p>
        <p className='chick1'>American,Desserts,Continental,mexican</p>
       <div className='innerRel'>
       <p>Rating 3.2</p>
        <p>30 Mins</p>
        <p>Rs450/- FOR TWO</p>
       </div>
       <p className='freeDel'>Free Delivery</p>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/53d952b4e56a01b6774bb2f522d709c3" alt="" className='relImage' />
        <p className='chick'>AI-Sara Restaurant</p>
        <p className='chick1'> American,Desserts,Continental</p>
        <div className='innerRel'>
        <p>Rating 4.4</p>
        <p>30 Mins</p>
        <p>Rs450/- FOR TWO</p>
        </div>
        <p className='freeDel'>Free Delivery</p>
      </div>
    </div>
    <div className='releOne'>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/gnkjme3hys8kwswquhif" alt="" className='relImage' />
        <p className='chick'>Imperial Restaurant</p>
        <p className='chick1'>American,Grill,Fast Food,Snacks</p>
        <div className='innerRel'>
          <p>Rating 4.4</p>
          <p>45 MINS</p>
          <p>Rs500/- FOR TWO</p>
        </div>
        <p className='freeDel'>Free Delivery</p>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/taavokxehqfaugbzzhzk" alt="" className='relImage' />
        <p className='chick'>Hyderabad Biryani House</p>
        <p className='chick1'>American,Grill,Fast Food,Snacks</p>
        <div className='innerRel'>
        <p>Rating 4.1</p>
        <p>37 MINS</p>
        <p>Rs300/- FOR TWO</p>
        </div>
        <p className='freeDel'>Free Delivery</p>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/on12tk5aqza0stxxsqhc" alt="" className='relImage' />
        <p className='chick'>Natural Ice cream</p>
        <p className='chick1'>American,Desserts,Continental,mexican</p>
       <div className='innerRel'>
       <p>Rating 4.6</p>
        <p>30 Mins</p>
        <p>Rs450/- FOR TWO</p>
       </div>
       <p className='freeDel'>Free Delivery</p>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/t8pkvvuhdgyoitxgdqlz" alt="" className='relImage' />
        <p className='chick'>Richie Rich</p>
        <p className='chick1'> American,Desserts,Continental</p>
        <div className='innerRel'>
        <p>Rating 4.3</p>
        <p>30 Mins</p>
        <p>Rs450/- FOR TWO</p>
        </div>
        <p className='freeDel'>Free Delivery</p>
      </div>
    </div>
    <Footer />

    </>
  )
}

export default DeliveryTime