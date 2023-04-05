import React, { useState } from 'react';
import './auth.css';
import RegisterImage from '../../assets/register.avif';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../components/card/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Loader from '../../components/loader/Loader';



const Register = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")

  const [isLoading, setIsLoading] = useState(false)

  const navigate=useNavigate();
  

  // const registerUser= (e) =>{


    
  //  e.preventDefault()
  //  if(password!=cPassword){
  //   toast.error("Passwords do not match.");
  //  }
  //  //console.log(email,password);
  //  const data={
  //   email:email,password:password,
  //  };
  //   console.log(data);
  
   
    //  fetch('http://localhost:3001/users', {
    //      mode: 'no-cors',
    //      credentials: 'include',
    //      method: 'POST',
    //      headers: { 'Content-Type': 'application/json' },
    //     //  We convert the React state to JSON and send it as the POST body
    //    }).then(function(response) {
    //    console.log(response)
    //     //return response.json();
        
    //   });

    const registerUser = async (e) => {
      e.preventDefault();
       if(password!==cPassword){
    toast.error("Passwords do not match.");
      }
      else{
        setIsLoading(true);
        await axios.post('http://localhost:3001/users',{
          mode: 'no-cors',
          credentials: 'include',
          method: 'POST',
           headers: { 'Content-Type': 'application/json' },
          email: email,
          password: password,
          
      }) .then(res => {
        if (res.status === 200){
          //alert('Student successfully created')
          setIsLoading(false);
           navigate("/login");
           toast.success('Registered Successfully!');
        }
        else
          Promise.reject()
      })
      .catch(err =>toast.error('Something went wrong'))
   
      }
   
  
     
  }



  return (
    <>
    <ToastContainer />
    {isLoading && <Loader/>}
    <section>
<Card>
    <div>
      <h2>Register</h2>
      <form onSubmit={registerUser}>
        <input type="text" name="email" placeholder="Email" required
         value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" name="password" placeholder="Password" required 
        value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <input type="text" name="password" placeholder="Confirm Password" required 
        value={cPassword} onChange={(e)=>setCPassword(e.target.value)} />
        <button type="submit" className='login-btn'>Register</button>
      </form>
      <span className='acc-sub'>
        <p>Don't have an account?</p>
        <Link to="/login">Login</Link>
      </span>
    </div>
</Card>

<div className='image'>
      <img src={RegisterImage} alt="register"></img>
</div>

   </section>
   </>
  )
}

export default Register