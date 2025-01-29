import React from "react";
import "./Header.css";
import facebookicon from "../../../public/header_img.png";

const Header = () => {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${facebookicon})`,
        backgroundSize: "contain",
        height: "34vw",
        margin: "30px auto",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <div className="header-contents">
        <h2>Crave it, click it, enjoy it—your favorite food, just a heartbeat away.</h2>
        <p>
          Welcome to <b style={{ color: "tomato" }}>CRAVE</b> — where taste
          meets innovation. Dive into a culinary journey like no other. From
          your go-to local restaurants to handpicked recipes crafted for every
          craving, <b>CRAVE</b> brings the world of flavor to your fingertips.
          Ready to transform the way you dine? Let’s make every meal
          extraordinary.
        </p>

        <button className="btn">View Menu</button>
      </div>
    </div>
  );
};

export default Header;
