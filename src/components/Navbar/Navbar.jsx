import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/frontend_assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/Storecontext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");

  const {getTotalCartAmount} = useContext(StoreContext)

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo3} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => handleMenuClick("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => handleMenuClick("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => handleMenuClick("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => handleMenuClick("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link
            to="/cart"
            onClick={() => setMenu("")} // Ensure no menu item stays "active"
          >
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount()?"":"dot"}></div>
  
        </div>
        <button
          className="sign-in-button"
          onClick={() => setShowLogin(true)}
        >
          sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
