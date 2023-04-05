import React from 'react';
import './Summary.css';
import {FaRupeeSign} from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import {getTotal} from '../../features/cartSlice';
import { Link } from 'react-router-dom';
import Orderconfirmed from '../orderconfirmed/Orderconfirmed';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {clearCart} from '../../features/cartSlice';

const Summary = () => {
  
  const navigate=useNavigate();

  const [name, setName] = useState();
  const [address, setAddress] = useState();
 
 
  const handleSubmit = (e) => {
   dispatch(clearCart());
     navigate('/orderconfirmation', {state: {name,address}}
     
     )};

  

  const cart=useSelector((state)=>state.cart);

  localStorage.setItem('session',JSON.stringify(cart));
  const dispatch=useDispatch();
  
  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch])

  return (
    <div>
      <h2 className='check-h2'>Checkout Details</h2>
      <section className='summary'>
           <div className='shipping-address'>
           <h2 className='order-summary-h2'> Shipping Address</h2>
           <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Recipient Name" required  onChange={(e) => setName(e.target.value)}/>
        <input type="text" name="address1" placeholder="Address Line 1" required onChange={(e) => setAddress(e.target.value)}/>
        <input type="text" name="address2" placeholder="Address Line 2" />
        <input type="text" name="city" placeholder="City" required />
        <input type="text" name="state" placeholder="State" required />
        <input type="text" name="postalcode" placeholder="Postal Code" required />
        <input type="text" name="country" placeholder="Country" required />
        <input type="text" name="phone" placeholder="Contact Number" required />
        <input type="text" name="alternatephone" placeholder="Alternate Contact Number" />
        
        <button className='pro-checkout'>Proceed to Checkout</button>
        </form>
           </div>
           <div className='order-summary'>
            <h2 className='order-summary-h2'> Checkout-Summary</h2>
            {cart.cartItems.map((cartItems)=>(
            <div class="sum-product-card" key={cartItems.id}>
            <p className='sum-product-title'>{cartItems.heading}</p>
            <p className='sum-product-quantity'>Qty {cartItems.cartQuantity}</p>
            <p className='sum-product-price'><FaRupeeSign/>{cartItems.price}</p>
            </div>
            ))}
            <div className='sum-total'>
            <span className='sum-total-head'>Subtotal</span><span className='sum-total-cont'><FaRupeeSign/>{cart.cartTotalAmount}</span>
            </div>
           
          </div>
      </section>
    </div>
  )
}

export default Summary