import React from 'react';

import {FaRupeeSign} from "react-icons/fa";
import './Orderconfirmed.css';
import { useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import {getTotal} from '../../features/cartSlice';
import { useLocation } from 'react-router-dom';




const Orderconfirmed = () => {
 const cart= localStorage.getItem('session');
// console.log((cart));
 var response = JSON.parse(cart);
console.log(response);

 
  const {state} = useLocation();
  const { name ,address} = state;
  
  let today = new Date().toLocaleDateString();

  var ide = 'EX' + Math.random().toString(36).substr(2, 9);


  //const cart=useSelector((state)=>state.cart);
  
  const dispatch=useDispatch();
  
  // useEffect(() => {
  //   dispatch(getTotal());
  // }, [cart, dispatch])


  return (
    <div>
      <div className='conf-header'>
<h2>Your Order Confirmed !</h2>
<p>Hi {name},</p>
<p>Your Order has been confirmed and will be shipped soon.</p>
</div>
<div className='order-details-head'>
  <div>Order Date</div>
  <div>Order Id</div>
  <div>Payment Mode</div>
  <div>Address</div>
</div>
<div className='order-details-ans'>
  <div>{today}</div>
  <div>{ide}</div>
  <div>Cash on Delivery</div>
  <div>{address}</div>
</div>
{response.cartItems.map((cartItems)=>(
<div className='order-details-item' key={cartItems.id}>
  <img src={cartItems.image}/>
  <div>{cartItems.heading}</div>
  <div>Qty {cartItems.cartQuantity}</div>
  <div><FaRupeeSign/>{cartItems.price}</div>
</div>
 ))}
<div className='conf-total'>
  <span>Total</span><span><FaRupeeSign/>{response.cartTotalAmount}</span>
</div>
<div className='conf-ack'>
<p>We will send you shipping information when your item(s) are on the way! 
We appreciate your bussiness, and hope you enjoy your purchase.</p> 

<p>Thank You!</p>
</div>
 


     
    </div>
  )
}

export default Orderconfirmed