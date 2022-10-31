import React from 'react';
import './Marquee.css';

const Marquee = () => {
  return (
    <div className='marquee'>
      <h1>Space Teck Global</h1>
        <marquee className="marquee-inner"> Technology <span>•</span>  Robotics <span>•</span> Drone <span>•</span>
        Marketing <span>•</span>  Technology <span>•</span> Robotics <span>•</span>
         </marquee>
    </div>
  )
}

export default Marquee