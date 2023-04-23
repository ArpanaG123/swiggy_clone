import React, { useContext } from 'react'
import { store } from './BlogData';
import { Link, useNavigate } from 'react-router-dom';
import './blogs.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../Features/cartSlice';


const BlogHome = () => {
    const[data] = useContext(store);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (data) => {
        dispatch(addToCart(data)) ;
        navigate("/cart") 
    }

  return (
    <>
    <div className='homeDataMain'>
    {
        data.filter((data) => data.Category === "Home").map((data) => (
            <div className='mainHomeie'>
                <div key = {data.id}>
                    <Link to={`/home/${data.id}`}>
                        <img src = {data.image} alt = '' className='imageHome' />
                    </Link>
                    <div><p className='title1'>{data.Title}</p></div>
                    <div><p className='nameHome'>{data.Name}</p></div>
                    <div><button className='rateBut'>{data.Rating}</button></div>
                </div>
                <div className='prcingDeal'>
                    <div>
                        <p className='totalPrice'> Price:${data.Price}</p>
                    </div>
                </div>
                <div className='addingToCart' onClick={()=> handleAddToCart(data)}><p>Add To Cart</p></div>
            </div>
        ))
    }
    </div>
    <div className='homeDataMain'>
    {
        data.filter((data) => data.Category === "Home1").map((data) => (
            <div className='mainHomeie'>
                <div key = {data.id}>
                    <Link to={`/home/${data.id}`}>
                        <img src = {data.image} alt = '' className='imageHome' />
                    </Link>
                    <div><p className='title1'>{data.Title}</p></div>
                    <div><p className='nameHome'>{data.Name}</p></div>
                    <div><button className='rateBut'>{data.Rating}</button></div>
                </div>
                <div className='prcingDeal'>
                    <div>
                        <p className='totalPrice1'>Price:${data.Price}</p>
                    </div>
                </div>
                <div className='addingToCart' onClick={()=> handleAddToCart(data)}><p>Add To Cart</p></div>
            </div>
        ))
    }
    </div>
    <div className='homeDataMain1'>
    {
        data.filter((data) => data.Category === "Home2").map((data) => (
            <div className='mainHomeie'>
                <div key = {data.id}>
                    <Link to={`/home/${data.id}`}>
                        <img src = {data.image} alt = '' className='imageHome' />
                    </Link>
                    <div><p className='title1'>{data.Title}</p></div>
                    <div><p className='nameHome'>{data.Name}</p></div>
                    <div><button className='rateBut'>{data.Rating}</button></div>
                </div>
                <div className='prcingDeal'>
                    <div>
                        <p className='totalPrice2'>Price:${data.Price}</p>
                    </div>
                </div>
                <div className='addingToCart' onClick={()=> handleAddToCart(data)}><p>Add To Cart</p></div>
            </div>
        ))
    }
    </div>
    <div className='homeDataMain2'>
    {
        data.filter((data) => data.Category === "Home3").map((data) => (
            <div className='mainHomeie'>
                <div key = {data.id}>
                    <Link to={`/home/${data.id}`}>
                        <img src = {data.image} alt = '' className='imageHome' />
                    </Link>
                    <div><p className='title1'>{data.Title}</p></div>
                    <div><p className='nameHome'>{data.Name}</p></div>
                    <div><button className='rateBut'>{data.Rating}</button></div>
                </div>
                <div className='prcingDeal'>
                    <div>
                        <p className='totalPrice3'>Price:${data.Price}</p>
                    </div>
                </div>
                <div className='addingToCart' onClick={()=> handleAddToCart(data)}><p>Add To Cart</p></div>
            </div>
        ))
    }
    </div>

    </>
  )
}

export default BlogHome