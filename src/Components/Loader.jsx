import React from 'react';
import Logo from  '../images/logo-sp.jpg'
import './Loader.css';
import 'animate.css'

const Loader = () => {
  return (
    <div className="loader-main">

 
    <div className='loader loader-box animate__animated animate__bounceIn animate__slow'>
        <div className="loader-box animate__animated animate__bounceOut animate__slow">
           <div className="loader-logo ">
             <img src={Logo} className="loader-icon" alt="" />
           </div>
           <div className="loader-text">
            <h3 className="loader-text-inner">Space Teck</h3>
           </div>
        </div>
    </div>
    </div>
  )
}

export default Loader