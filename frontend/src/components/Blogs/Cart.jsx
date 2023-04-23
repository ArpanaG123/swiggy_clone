import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../Features/cartSlice'
import Footer from '../Footer/Footer'
import RestPageOne from '../Restaurants/RestPageOne'
import './blogs.css'

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals())
  }, [cart,dispatch] )

  const handleremoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem))
  }

  const handledecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem))
  }

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem))
  }

  const handleClearCart = () => {
    dispatch(clearCart());
    alert("Order successfully");
  }

  return (
    <>
    <RestPageOne />
    <div className='foodCart'>
      <p className='foodtoCart'>Food Cart</p>
      <hr className='underfoodCart'/>
    </div>
    <div>
      {
        cart.cartItems.length === 0 ? 
        (<div>
          <div className='emptyoNE'>Your Cart is Empty</div>
          <Link to = "/home"><button className='goBack1'>Go Back</button></Link>
        </div>

        )
        :(
          <div>
            <div className="foodTitle">
              <p>Food</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
            <hr className='underfoodTitle'/>
            <div className="cartItem">
              {
                cart.cartItems?.map(cartItem => (
                  <div key = {cartItem.id}>
                    <div className="cart-food">
                      <img src={cartItem.image} alt="" className='foodItemAdded' />
                      <div className='detailsFood'>
                        <h3>{cartItem.Title}</h3>
                        <p>{cartItem.Name}</p>
                        <button className='removeBut' onClick={() => handleremoveFromCart(cartItem)}>Remove</button>
                      </div>
                    </div>
                    <div className='cart-food-price'>${cartItem.Price}</div>
                    <div className="cart-food-quantity">
                      <button onClick={() => handledecreaseCart(cartItem)}>-</button>
                      <div>{cartItem.cartQuantity}</div>
                      <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
                    </div>
                    <div className="cary-food-total-price">
                      ${cartItem.Price * cartItem.cartQuantity}
                    </div>
                  </div>
                ))}
            </div>
            <hr className='underfoodTitle1' />
            <div className="cart-summary">
              <button className='clearingCart' onClick={() => handleClearCart()}>Clear cart</button>
              <Link to = "/home"><button className='goBack'>Go Back</button></Link>
              <div className='cartCheckout'>
                <div className="subtotal">
                  <span>SubTotal: </span>
                  <span className='amount'>${cart.cartTotalAmount}</span>
                </div>
                <button className='finalOrderButton' onClick={() => handleClearCart()}>Check Out</button>
              </div>
            </div>
          </div>
        )}
    </div> 
    <Footer />  
    </>
  )
}

export default Cart