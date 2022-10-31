import React from "react";
import './FooterLinks.css';


const FooterLinks = () => {
  return (
    <div className="footerlinks">
      <div className="description-footer">
        <div className="contact-footer">
          <h3>Contact</h3>
          <p>
          Join Us Now And Begin Your Journey
          </p>
        </div>
        <ul className="description-ul">
          <li className="address">
            <img
              src="https://assets.website-files.com/62ce22218725160bfa7c4b76/630634f767021e18d5aff1ec_Locator.svg"
              alt=""
            />
            <p>1st Floor, Mega Space, 13 Solapur Bazar Road, Off East Street, Camp, Pune Maharashtra 411001</p>
          </li>
          <li className="email">
            <img
              src="https://assets.website-files.com/62ce22218725160bfa7c4b76/630635048caccf2b7d6d191f_Email.svg"
              alt=""
            />
            <p>Contact@Spaceteck.Co.In</p>
          </li>
          <li className="phone">
            <img
              src="https://assets.website-files.com/62ce22218725160bfa7c4b76/6306350e26f4bb7f69af0e83_Phone.svg"
              alt=""
            />
            <p>+1(761)345-6723</p>
          </li>
        </ul>
      </div>
      <div className="footer-links-box">
            <ul className="links-ul">
                <h2>Navigation</h2>
              <li>Intro</li>
               <li>Home</li>
               <li>About Us</li>
               <li>Team Page</li>
               <li>Pricing Tables</li>
               <li>Features</li>
               <li>Faq Page</li>
               <li>Contact Us</li>
            </ul>
            <ul className="links-ul">
                <h2>Cms Page</h2>
              <li>Intro</li>
               <li>Home</li>
               <li>About Us</li>
               <li>Team Page</li>
               <li>Pricing Tables</li>
               <li>Features</li>
               <li>Faq Page</li>
               <li>Contact Us</li>
            </ul>
            <ul className="links-ul">
                <h2>Template</h2>
                <li>Style Guide</li>
                <li>Licenses</li>
                <li>Changelog</li>
                <li>Password</li>
                <li>404 Page</li>
            </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
