import React from 'react'
import { NavLink } from 'react-router-dom'
import './blogs.css'


const BlogNav = () => {
  return (
    <div>
        <div className='resturaNav'>
            <h1>Top Restaurants</h1>
        </div>
        <div className='navigationLink'>
            <nav>
                <NavLink to = "/"></NavLink>
                <NavLink to = "/relevance" className="relevance">Relevance</NavLink>
                <NavLink to = "/delivery" className="deliveryT">Delivery Time</NavLink>
                <NavLink to = "/rating" className="ratingS">Rating</NavLink>
                <NavLink to = "/pricelowToHigh" className="costingLow">Cost:Low to High</NavLink>
                <NavLink to = "/pricehighTolow" className="costingHigh">Cost:High to Low</NavLink>
            </nav>
            <hr className='navigationLine'/>
        </div>
    </div>
  )
}

export default BlogNav