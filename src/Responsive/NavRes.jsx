import React from 'react';
import './NavRes.css';
import { useState } from 'react';
import Logo from "../images/cube.png";


const NavRes = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <div>
<nav className="navigation-resp">
      <a href="/" className="brand-name">
      <div className="logo">
          <div className="logo-img-div">
            <img
              className="logo-img"
              src={Logo}
              alt="logo of website"
            />
          </div>
          <h3 className="logo-text">Space Teck</h3>
       </div>   
      </a>
      <button 
      className="hamburger"
      onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
        <ul>
          <li>
            <a href="/home">Intro</a>
          </li>
          <li>
            <a href="/about">Home</a>
          </li>
          <li>
            <a href="/contact">Projects</a>
          </li>
          <li>
            <a href="/contact">Pages</a>
          </li>
          <li>
            <a href="/contact">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default NavRes