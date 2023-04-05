import React,{ useState } from 'react';
import './auth.css';
import LoginImage from '../../assets/login.avif';
import { Link ,useNavigate} from 'react-router-dom';
import {AiOutlineGoogle} from 'react-icons/ai';
import Card from '../../components/card/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const navigate=useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
  //    if(password!==cPassword){
  // toast.error("Passwords do not match.");
  //   }
  
      await axios.post('http://localhost:3001/userlogin',{
        mode: 'no-cors',
        credentials: 'include',
        method: 'POST',
         headers: { 'Content-Type': 'application/json' },
        email: email,
        password: password,
        
    }) .then(res => {
      console.log(res);
      if (res.data.error ===false){
        //alert('Student successfully created')
        // setIsLoading(false);
         navigate("/");
         localStorage.setItem('IsloggedIn', true);
        //  toast.success('Registered Successfully!');
      }
      else if(res.data.error ===true){
        localStorage.setItem('IsloggedIn', false);
        toast.error("Incorrect username or password");
        setEmail("");
        setPassword("");
      }
     
    })
    .catch(err =>toast.error('Something went wrong'))
 

 

   
}

  return (
    <>
    <ToastContainer />
   <section>
    <div className='image'>
      <img src={LoginImage} alt="Login"></img>
    </div>

<Card>
    <div>
      <h2>Login</h2>
      <form onSubmit={loginUser}>
      <input type="text" name="email" placeholder="Email" required
         value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" name="password" placeholder="Password" required 
        value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className='login-btn'>Login</button>
        <div className='res-sub'>
          {/* <Link to="/reset">Reset Password</Link> */}
        </div>
        {/* <p>--or--</p> */}
      </form>
      {/* <button className='google-btn'><AiOutlineGoogle size={20}/>Login With Google</button> */}
      <span className='acc-sub'>
        <p>Don't have an account?</p>
        <Link to="/register">Register</Link>
      </span>
    </div>
</Card>
   </section>
   </>
  )
}

export default Login