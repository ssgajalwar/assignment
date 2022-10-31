import React from "react";
import './Footer.css';
import Logo from "../images/logo-sp.jpg";
import {BsTwitter} from "react-icons/bs";
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import facebook from '../images/facebook.png'; 


const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-logo-box">
            <div className="footer-logo">
                <div className="footer-logo-img">
                   <img src={Logo} alt="" />
                </div>
            </div>
            <div className="footer-logo-text">
                    <h3>Space Teck Global</h3>
            </div>
            </div>
            
            <div className="footer-social-icon-list">
            <div className="footer-social-icon"> 
               <img src={twitter} alt="" />
            </div>
            <div className="footer-social-icon"> 
               <img src={instagram} alt="" />
            </div>
            <div className="footer-social-icon"> 
               <img src={linkedin} alt="" />
            </div>
            <div className="footer-social-icon"> 
               <img src={facebook} alt="" />
            </div>
            </div>
        </div>
    );
}

export default Footer;