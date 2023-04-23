import React from 'react'
import Footer from '../Footer/Footer'
import RestPageOne from '../Restaurants/RestPageOne'
import RestPageTwo from '../Restaurants/RestPageTwo'
import BlogNav from './BlogNav'
import './blogs.css'

const Rating = () => {
  return (
    <>
    <RestPageOne />
    <RestPageTwo />
    <BlogNav />
    <div className='releOne'>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/5e693c8746eed2a59f170689ec3c2f30" alt="" className='relImage' />
        <p className='chick'>Smoodie & Juices</p>
        <p className='chick1'>Beverages,Juices,Desserts</p>
        <div className='innerRel'>
          <p>Rating 5.0</p>
          <p>45 MINS</p>
          <p>Rs500/- FOR TWO</p>
        </div>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cnsmj4zboxfxn7b5rkgq" alt="" className='relImage' />
        <p className='chick'>Tree Top Bar & Kitchen's</p>
        <p className='chick1'>American,Grill,Fast Food,Snacks</p>
        <div className='innerRel'>
        <p>Rating 5.0</p>
        <p>37 MINS</p>
        <p>Rs300/- FOR TWO</p>
        </div>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/6373143e852214f7a73414dc727cc975" alt="" className='relImage' />
        <p className='chick'>Cafe Delhi Heights</p>
        <p className='chick1'>Indian,Chinese,Italian</p>
       <div className='innerRel'>
       <p>Rating 5.0</p>
        <p>30 Mins</p>
        <p>Rs450/- FOR TWO</p>
       </div>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/18b2d97ecb38da44c8650f48af7fdf85" alt="" className='relImage' />
        <p className='chick'>KUURAKU</p>
        <p className='chick1'>Japanese,Sushi</p>
        <div className='innerRel'>
        <p>Rating 4.9</p>
        <p>30 Mins</p>
        <p>Rs450/- FOR TWO</p>
        </div>
      </div>
    </div>
    <div className='releOne'>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/uyinyasvacihajwdtont" alt="" className='relImage' />
        <p className='chick'>The Ice-Cream Zone</p>
        <p className='chick1'>Ice creams,Desserts</p>
        <div className='innerRel'>
          <p>Rating 4.9</p>
          <p>45 MINS</p>
          <p>Rs500/- FOR TWO</p>
        </div>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/b57c3308a4650fe6c9a53250864a2bdc" alt="" className='relImage' />
        <p className='chick'>Kopper Handi</p>
        <p className='chick1'>Biryani,Kabab,Chinese</p>
        <div className='innerRel'>
        <p>Rating 4.9</p>
        <p>37 MINS</p>
        <p>Rs300/- FOR TWO</p>
        </div>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e6cee724bcd769efecaee97e3e651c9b" alt="" className='relImage' />
        <p className='chick'>FlavorVille</p>
        <p className='chick1'>American,Desserts,Continental,mexican</p>
       <div className='innerRel'>
       <p>Rating 4.9</p>
        <p>30 Mins</p>
        <p>Rs450/- FOR TWO</p>
       </div>
      </div>
      <div className='hoverRel'>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/m6pfexkbquwx2k9r9906" alt="" className='relImage' />
        <p className='chick'>KENZ KARAM</p>
        <p className='chick1'> North Indian</p>
        <div className='innerRel'>
        <p>Rating 4.9</p>
        <p>30 Mins</p>
        <p>Rs450/- FOR TWO</p>
        </div>
      </div>
    </div>
    <Footer />


    </>
  )
}

export default Rating