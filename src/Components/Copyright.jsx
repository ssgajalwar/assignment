import React from 'react';
import './Copyright.css';
import {AiFillHeart} from 'react-icons/ai';

const style = { color: "red"}

const Copyright = () => {
  return (
    <div className='copyright'>
        <p>All rights reserved by 
        <AiFillHeart style={style}/>
         Space Teck 
        </p>
    </div>
  )
}

export default Copyright