import React from 'react';
import './Faq.css';

const Faq = () => {
  return (
    <div className='faq'>
        <div className="content">
            <h1 className='faq-stylish-border-h1  animate__animated animate__fadeInRight animate__fast'>Designed</h1>
            <h1 className='faq-normal-h1  animate__animated animate__fadeInRight animate__fast'>New Style</h1>
            <ul>
                <div className='li-div animate__animated animate__fadeInRight animate__slow'>
                <li>What is Robotics?</li>
                <span className='plus-icon'>+</span>
                </div>
                <div className='li-div  animate__animated animate__fadeInRight animate__slow'>
                <li>What is Virtual Reality?</li>
                <span className='plus-icon'>+</span>
                </div>
                <div className='li-div  animate__animated animate__fadeInRight animate__slow'>
                <li>Does Marketing helpful?</li>
                <span className='plus-icon'>+</span>
                </div>
            </ul>
        </div>
        <div className="and">
            <h1>&</h1>
        </div>
    </div>
  )
}

export default Faq