import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/images/logo.png";
import Loader from "./Loader";

const Header = () => {
  return (
    <>
      <header>
        <div className="wrapper">
          <div className="head_con">
            <div className="main_logo">
              <NavLink to="/">
                <img src={Logo} alt="dan quesada logo" />
              </NavLink>
            </div>
            <div className="head_right">
              <div className="head_info">
                <a href="mailto:danquesadaiii@gmail.com" target="_blank" rel="noopener noreferrer">
                  danquesadaiii@gmail.com
                </a>
                <mark>0905-813-2586</mark>
              </div>
              <div className="social_media">
                <a href="https://www.facebook.com/mulespro" target="_blank" rel="noopener noreferrer"></a>
                <a href="https://m.me/mulespro" target="_blank" rel="noopener noreferrer"></a>
              </div>
            </div>
          </div>
        </div>
        <Loader direction={"right"} />
      </header>
    </>
  );
};

export default Header;
