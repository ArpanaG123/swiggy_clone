import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BlogData from '../Blogs/BlogData'
import BlogHome from '../Blogs/BlogHome'
import BlogNav from '../Blogs/BlogNav'
import RestPageOne from './RestPageOne'
import RestPageTwo from './RestPageTwo'
import Footer from '../Footer/Footer'


const RestaurantPage = () => {
  return (
    <>
        <RestPageOne />
        <RestPageTwo />
        <BlogData>
        <BlogNav />
          <Routes>
            <Route path='/' exact element = {<BlogHome />}/>
          </Routes>
        </BlogData>
        <Footer /> 
    </>
  )
}

export default RestaurantPage