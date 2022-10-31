import React from "react";
import Logo from "../images/logo-sp.jpg";
import './Nav.css';
import arrow from '../images/right-arrow.png';
import {RiArrowDownSLine} from 'react-icons/ri';

const Nav = () => {
  return (
    <div>
      <div className="navigation">
        <div className="logo">
          <div className="logo-img-div">
            <img
              className="logo-img-div"
              src={Logo}
              alt="logo of website"
            />
          </div>
          <h3 className="logo-text">Space Teck</h3>
        </div>
        <div className="links">
          <ul className="main-ul">
            <li className="link-li">
              <a  >Home
                <span  className="arrow"> <RiArrowDownSLine className="arrow"/> </span>
              </a>
            </li>
            <li className="link-li">
              <a  >About Us
                <span  className="arrow"> <RiArrowDownSLine className="arrow"/> </span>
              </a>
            </li>

            <li className="link-li">
              <a  >Our Products
              <span className="arrow"><RiArrowDownSLine className="arrow"/></span>
              </a>
              <ul className="dropdown">
                <li>
                  <a  >BenQ Interactive flat Panel</a>
                </li>
                <li>
                  <a  >AI Sales Solution</a>
                </li>
                <li>
                  <a  >LED Display Solution</a>
                </li>
              </ul>
            </li>

            <li className="link-li">
              <a  >Our Offering
              <span className="arrow"><RiArrowDownSLine className="arrow"/></span>
              </a>
              <ul className="dropdown">
                <li>
                  <a  >Corporate</a>
                </li>
                <li>
                  <a  >Hospitality</a>
                </li>
                <li>
                  <a  >Education</a>
                </li>
                <li>
                  <a  >Retail space</a>
                </li>
                <li>
                  <a  >Travel</a>
                </li>
              </ul>
            </li>
            <li className="link-li">
              <a  >Training
              <span className="arrow"><RiArrowDownSLine className="arrow"/></span>
              </a>
              <ul className="dropdown">
                <li>
                  <a  >Knowledge Partnership</a>
                </li>
                <li>
                  <a  >Drone Workshop</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="outer">
            <div className="button">
              <div className="text">Contact Us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
