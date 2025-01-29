import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logo" src={assets.logo3}></img>
          <p>
          Welcome to <b style={{color:"tomato"}}>CRAVE</b>, where your cravings come to life! We’re dedicated to bringing you the best culinary experiences, effortlessly delivered to your door. Whether you’re craving comfort food or exploring new flavors, we offer a wide selection of dishes to satisfy every taste. With just a few clicks, your favorite meals are ready to be enjoyed. It's not just about food; it's about making every meal a moment of joy.
          </p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon}></img>
            <img src={assets.twitter_icon}></img>
            <img src={assets.linkedin_icon}></img>
       
          </div>
        </div>

        <div className="footer-content-center">
        <h2 > COMPANY</h2>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </ul>


        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>

          <ul>
            <li>+91-635-555-2203</li>
            <li>contact@crave.com</li>
          </ul>

        </div>
      </div>
      <hr/>
      <p className="footer-copyright"> Copyright 2025 ©️ Crave.com - All Right Reserved </p>
    </div>
  );
};

export default Footer;
