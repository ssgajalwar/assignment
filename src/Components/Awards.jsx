import React from 'react';
import './Awards.css';

const Awards = () => {
  return (
    <div className='awards'>
        <div className="award-cotent">
           <div className="award-heading">
            <h1 className='text-recent  animate__animated animate__fadeInRight animate__slow'>Recent</h1>
            <h1 className='text-awards  animate__animated animate__fadeInRight animate__slow'>Awwards</h1>
            <ul className='awardsul'>
                <li className='awards-li  animate__animated animate__fadeInRight animate__slower'>
                    <h3>Site of the day </h3>
                    <span className='no-of-awards'>5</span>
                </li>
                <li className='awards-li  animate__animated animate__fadeInRight animate__slower'>
                   <h3>Developer Award</h3> 
                   <span className='no-of-awards'>5</span>
                </li>
                <li className='awards-li  animate__animated animate__fadeInRight animate__slower'>
                    <h3>honorable Mention</h3>
                    <span className='no-of-awards'>5</span>
                </li>
                <li className='awards-li  animate__animated animate__fadeInRight animate__slower'>
                    <h3>Mobile Excellence</h3>
                    <span className='no-of-awards'>5</span>
                </li>
                <li className='awards-li   animate__animated animate__fadeInRight animate__slower'>
                    <h3>UX Design Award</h3>
                    <span className='no-of-awards'>5</span>
                </li>
                <li className='awards-li   animate__animated animate__fadeInRight animate__slower'>
                    <h3>Innovation Design Award</h3>
                    <span className='no-of-awards'>5</span>
                </li>
                <li className='awards-li   animate__animated animate__fadeInRight animate__slower'>
                    <h3>Website Of the Day</h3>
                    <span className='no-of-awards'>5</span>
                </li>
            </ul>
           </div>
        </div>
        <div className="hash">
            <h1>#</h1>
        </div>

    </div>
  )
}

export default Awards