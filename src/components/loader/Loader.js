import React from 'react'
import './Loader.css';
import Spinner from "../../assets/Spinner-3.gif";
import ReactDOM from 'react-dom';

const Loader = () => {
  return ReactDOM.createPortal(
    <div className='wrapper'>
        <div className='loader'>
            <img src={Spinner} alt="Loading..." />
        </div>
    </div>,
    document.getElementById("loader")
  )
}

export default Loader