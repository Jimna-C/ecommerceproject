import React from 'react';
import './auth.css';
import ForgotImage from '../../assets/forgot.avif';
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card';

const Reset = () => {
  return (
    <section>
    <div className='image'>
      <img src={ForgotImage} alt="forgot"></img>
    </div>

<Card>
    <div>
      <h2>Login</h2>
      <form>
        <input type="text" name="email" placeholder="Email" required />
        <button className='login-btn'>Reset Password</button>
        <div className='res-sub sep'>
          <p><Link to="/login">- Login</Link></p>
          <p><Link to="/register">- Register</Link></p>
        </div>
      </form>
     
    </div>
</Card>
   </section>
  )
}

export default Reset