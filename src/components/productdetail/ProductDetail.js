import React,{ useState, useEffect,useMemo } from 'react'
import './ProductDetail.css';
import {FaRupeeSign} from 'react-icons/fa';
import axios from "axios";
import { Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
import {useNavigate} from "react-router-dom";

const ProductDetail = () => {
    const {items,status}=useSelector(state=>state.products);
    const dispatch=useDispatch();
    const navigate=useNavigate();
  
    const handleAddToCart=(productdetailsplus)=>{
      dispatch(addToCart(productdetailsplus));
      navigate("/cart");
    }
    const [products, setProduct] = useState([]);
    const {productId} = useParams();
    const productdetails = items.filter(item => item.id == productId);
   // console.log(productdetails);

    // useEffect(() => {
    //     const getProducts = async () => {
    //                 const productdetails = items.filter(item => item.id == productId);
    //                   setProduct(productdetails); 
      
    //     }
    //     getProducts();
    //   }, [productId]);

    //   {products.map((products)=>{
      
    // })}

  return (

    <div>
     <section className='product-detail'>
        <div className='image-part' key={productdetails[0].id}>
            <img src={productdetails[0].image}/>
        </div>
        <div className='desc-part'>
            <p className='product-det-title'>{productdetails[0].heading}</p>
            <p className='product-det-price'>{productdetails[0].price}</p>
            <p className='product-det-desc'>{productdetails[0].description}</p>
            <button className='cart-btn-det' onClick={()=>handleAddToCart(productdetails[0])}>Add to Cart</button>
        </div>
     
     </section>
    
        
    </div>
  )
}

export default ProductDetail