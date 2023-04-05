import React from 'react';
import './Cart.css';
import { useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import {removeFromCart, decreaseCart, addToCart, clearCart, getTotal} from '../../features/cartSlice';
import {Link} from "react-router-dom";
import {FiArrowLeft} from 'react-icons/fi';

const Cart = () => {
    const cart=useSelector((state)=>state.cart);
    const dispatch=useDispatch();
  //const navigate=useNavigate();
const loginfo= localStorage.getItem('IsloggedIn');
console.log(loginfo);
  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch])
  

  const handleRemoveFromCart=(cartItems)=>{
    dispatch(removeFromCart(cartItems));
   // navigate("/cart");
  }

  const handledecreaseCart=(cartItems)=>{
    dispatch(decreaseCart(cartItems));
  }

  const handleIncreaseCart=(cartItems)=>{
    dispatch(addToCart(cartItems));
  }
  const handleClearCart=()=>{
    dispatch(clearCart());
  }

  return (
    <section className='cart'>
        <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ?(<div className='cart-empty'>
        <p>Your cart is currently empty</p><div className='start-shop'>
            <Link to="/products/0"><FiArrowLeft/><span>Start Shopping</span></Link></div></div>):
            (<div><div className='main-title'>
                <h3 className='product-title'>Product</h3>
                <h3 className='price'>Price</h3>
                <h3 className='quantity'>Quantity</h3>
                <h3 className='total'>Total</h3>
            </div>
            <div className='cart-items'>
            {cart.cartItems.map((cartItems)=>(
             <div className='cart-item' key={cartItems.id}>
                <div className='cart-product'>
                    <img src={cartItems.image} alt={cartItems.heading}/>
                    <div className='cart-det'>
                      <p className='cart-name'>{cartItems.heading}</p>
                      <button className='rem-btn' onClick={()=>handleRemoveFromCart(cartItems)}>Remove</button>
                    </div>
                </div>
                <div className='cart-product-price'>{cartItems.price}</div>
                <div className='cart-product-quantity'>
                    <button onClick={()=>handledecreaseCart(cartItems)}>-</button>
                    <div className='count'>{cartItems.cartQuantity}</div>
                    <button onClick={()=>handleIncreaseCart(cartItems)}>+</button>
                </div>
                <div className='cart-product-total'>{cartItems.price*cartItems.cartQuantity}</div>
               
             </div>

                ) )}
            </div>

            <div className='cart-summary'>
                <button className='clear-cart' onClick={()=>handleClearCart()}>Clear Cart</button>
               
                <div className='sub-total'>
                <div className='sub-total-part1'></div>
                <div className='sub-total-part2'>
                 <span><h2>Subtotal</h2><p>{cart.cartTotalAmount}</p></span>
                 {loginfo=== "true" ?(<Link to="/summary"  className='checkout-btn'>Checkout</Link>):(<Link className='checkout-btn' to="/login">Checkout</Link>)}
                 {/* <button className='checkout-btn'>Checkout</button> */}
                 </div>
                </div>
                <Link to="/products/0" className='check-continue'><span><FiArrowLeft/>Continue Shopping</span></Link>
            </div>
            </div>)}
    </section>
  )
}

export default Cart