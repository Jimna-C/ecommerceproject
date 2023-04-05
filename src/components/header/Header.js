import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import './Header.css';
import {FaShoppingCart} from 'react-icons/fa';
import {HiOutlineMenuAlt3} from 'react-icons/hi';
import { useState } from 'react';
import {FaWindowClose} from 'react-icons/fa';
// import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useSelector} from 'react-redux';



const logo=(
  <div className='logo'>
      <Link to="">
        <h1>electro<span>X</span></h1>
      </Link>
    </div>
);

// const carting=(
// <Link to='/cart'> Cart  <FaShoppingCart size={20}/><span><sup>2</sup></span></Link>
// );

const activeLink=({isActive})=>(isActive?'active-link':'');


const Header = () => {

  const {cartTotalQuantity}=useSelector((state)=>state.cart);
//   const dispatch=useDispatch();
// //const navigate=useNavigate();

// useEffect(() => {
//   dispatch(getTotal());
// }, [cart])

//const qunatity=cart.cartItems.length;
 const [showMenu, setShowMenu] = useState(false)


 const toggleMenu = () => {
  setShowMenu (!showMenu);
};
const hideMenu=()=>{
  setShowMenu(false)
};

  return (
   <header>
   {logo}

   {/* <div className='header-left'>
  <ul>
  <li>
    <Link to='/'>Home</Link>
  </li>
  <li>
    <Link to='/contact'>Contact Us</Link>
  </li>
  </ul>
  </div> */}

<div className='header-right' >
<span className='links' id={showMenu?"nav-links-mobile":"nav-links-mobile-hide"} onClick={hideMenu}>
<span className='links-logo'>{logo}<FaWindowClose size={20} onClick={hideMenu} /></span>
<NavLink to='/' className={activeLink}>Home</NavLink>
{/* <NavLink to='/contact' className={activeLink}>Contact</NavLink> */}
<NavLink to='/login' className={activeLink}>Login</NavLink>
<NavLink to='/register' className={activeLink}>Register</NavLink>
{/* <NavLink to='/order-history' className={activeLink}>My Orders</NavLink> */}
<Link to='/cart'> Cart  <FaShoppingCart size={20}/><span><sup>{cartTotalQuantity}</sup></span></Link>
</span>
</div>

<div className='menu-icon'>
<Link to='/cart'> Cart  <FaShoppingCart size={20}/><span><sup>{cartTotalQuantity}</sup></span></Link>
<HiOutlineMenuAlt3 size={28}  onClick={toggleMenu}/>
</div>
   </header>
  )
}

export default Header