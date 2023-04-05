import React,{ useState, useEffect } from 'react'
import './BestSeller.css';
import {FaRupeeSign} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from "axios";


const BestSeller = () => {

  const [bestSeller, setBestSeller] = useState([]);
 
  useEffect(() => {
    getBestSeller();
  }, []);

  const getBestSeller = async () => {
    
      const response = await axios.get('http://localhost:3001/get-bestseller');
      //console.log(response);
      setBestSeller(response.data);
  }



  return (
    <div className='best-header'>
    <h2>Best Seller Products</h2>
    <h5>Up to 70% off | Clearance store</h5>
    <div className='product-card-main'>
        {bestSeller.map(seller=>(
                <div className='product-card' key={seller.id}>
                  <Link to="/products/0" >
                <img src={seller.image} />
                <p><FaRupeeSign/>{seller.price}</p>
                <p className='product-title as'>{seller.heading}</p>
                {/* <button className='add-cart'>Add to cart</button> */}
                </Link>
                </div>
        ))}

    
    </div>

<Link to="/products/0" className='shop-btn'>Shop More</Link>

    <img className='foot-bann' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HeaderS/D72172523_Header_1500x300.jpg" />
    </div>
  )
}

export default BestSeller