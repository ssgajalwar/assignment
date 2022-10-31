import React from 'react';
import './Companies.css';
import comp1 from '../images/comp1.png';
import comp2 from '../images/comp2.png';
import comp3 from '../images/comp3.png'
import comp4 from '../images/comp4.png'
import comp5 from '../images/comp5.png'
import comp6 from '../images/comp6.png'

const Companies = () => {
  return (
    <div className='companies'>
            <h1 className='h1-text-trusted  animate__animated animate__fadeInUp animate__slow'>Our</h1>
            <h1 className='h1-companies-no  animate__animated animate__fadeInUp animate__slow'>Association</h1>
            {/* <h1 className='h1-companies  animate__animated animate__fadeInUp animate__slow'>Companies</h1> */}
            <div className='companies-list  animate__animated animate__fadeInUp animate__slow'>
                <img className='comp-item' src={comp1} alt="" />
                <img className='comp-item' src={comp2} alt="" />
                <img className='comp-item' src={comp3} alt="" />
                <img className='comp-item' src={comp4} alt="" />
                <img className='comp-item' src={comp5} alt="" />
                <img className='comp-item' src={comp6} alt="" />
            </div>
    </div>
  )
}

export default Companies