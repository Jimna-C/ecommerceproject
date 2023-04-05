import React,{ useState, useEffect,useMemo } from 'react'
import './ProductListing.css';
import {MdKeyboardArrowRight} from 'react-icons/md'
import {BsSearch} from 'react-icons/bs'
import {FaRupeeSign} from 'react-icons/fa';
import axios from "axios";
import { Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { useGetAllProductsQuery } from '../../features/productsApi';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
import {useNavigate} from "react-router-dom";




const ProductListing = () => {
  const {items,status}=useSelector(state=>state.products);
  const {category,statuses}=useSelector(state=>state.categories);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleAddToCart=(products)=>{
    dispatch(addToCart(products));
    navigate("/cart");
  }

 //console.log(items);
  // const {data,error,isLoading}=useGetAllProductsQuery();
  // console.log(data);
  // const [categories, setCategory] = useState([]);
 
  // useEffect(() => {
  //     getCategory();
  // }, []);
  // const getCategory = async () => {
  
  //     const response = await axios.get('http://localhost:3001/get-category');
  //     //console.log(response);
  //     setCategory(response.data);
  // }

  const [products, setProduct] = useState([]);

  const {categoryId} = useParams(); 
    //console.log(categoryId);
  useEffect(() => {
  const getProducts = async () => {
    // console.log(items);
      // const response = await axios.get(`http://localhost:3001/get-products/`)
      // // console.log(response.data[0].categoryId);
      //       const allItems = response.data;
           // console.log(allItems);
            if (categoryId==0){
              setProduct(items);
            }else{
              const categoryItems = items.filter(item => item.categoryId === categoryId);
             // console.log(categoryItems);
                setProduct(categoryItems); 

            } 
  }
  getProducts();
}, [categoryId]);


const [searchValue, setSearchValue] = useState("")


useEffect(() => {
  const getsearchpro = async () => {
      // const response = await axios.get(`http://localhost:3001/get-products/`)
      // // console.log(response.data[0].categoryId);
      //       const allItems = response.data;
           //console.log(allItems);
           const searchedpro = items.filter(value => value.heading.toLowerCase().includes(searchValue.toLowerCase()))
          // console.log(searchedpro)
           setProduct(searchedpro)
          
      
  }
  getsearchpro();
}, [searchValue]);

//console.log(category);
  return (
    <section className='product-list-main'>
      <div className='side-left'>
        <h3>Categories</h3>
        <ul>
         <Link to={`/products/0`}><li ><MdKeyboardArrowRight/>All</li></Link>
        {category.map((category)=>(
         <Link to={`/products/${category.id}`} key={category.id}><li><MdKeyboardArrowRight/>{category.heading}</li></Link>
         
        ))}
        </ul>
      </div>
      <div className='side-middle'>
        <div className='search'>
      
        <input type="search" name="search-products" id="search-products" onChange={(e) => setSearchValue(e.target.value)} value={searchValue}  placeholder="Search by Name"/>
     
        <span><BsSearch size={18}/></span> 
         </div>
         <div className='product-main'>
          {products.map((products)=>(
            <div key={products.id} className='product-card'><Link to={`/productdetail/${products.id}`} key={products.id}>
            <img className='product-img' src={products.image}/>
            <p><FaRupeeSign/>{products.price}</p>
            <p className='product-title cs'>{products.heading}</p></Link>
            <button className='cart-btn' onClick={()=>handleAddToCart(products)}>Add to Cart</button>
            </div>
         ) )}
        </div>


      </div>
      <div className='side-right'></div>
    </section>
  )
}

export default ProductListing