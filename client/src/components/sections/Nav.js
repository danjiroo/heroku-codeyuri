import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  window.addEventListener("scroll", () => {
    // console.log(window.pageYOffset) // use this for getting pageYOffset - length from top sa screen
    var navi = document.querySelector("nav");
    if (width >= 1001 && window.pageYOffset > 808) {
      navi.classList.add("sticky");
    } else if (width < 1001 && window.pageYOffset > 530) {
      navi.classList.add("sticky");
    } else if (width < 601 && window.pageYOffset > 330) {
      navi.classList.add("sticky");
    } else {
      navi.classList.remove("sticky");
    }
  });

  // for nav click, wala lang ko nag anchor link kay hugawan ko sa url nga nay hash
  const handleClickScrollTo = () => {
    let mainSec = document.querySelector('main');
    let offsetMain = mainSec.offsetTop - 50;

    if ( width >= 1001 ) {
      window.scrollTo(0, offsetMain)
    } else if ( width < 1001 ) {
      window.scrollTo(0, offsetMain)
    } else if ( width < 601 ) {
      console.log(window.pageYOffset)
      window.scrollTo(0, offsetMain)
    } else {
      alert('nothing')
    }
  };

  return (
    <nav>
      <div className="wrapper">
        <ul className="nav_list">
          <li><NavLink exact to="/" onClick={() => window.scrollTo(0, 0)} ></NavLink></li>
          <li><NavLink to="/about" onClick={handleClickScrollTo} >About Me</NavLink></li>
          <li><NavLink to="/portfolio" onClick={handleClickScrollTo}>Portfolio</NavLink></li>
          <li><NavLink to="/skills" onClick={handleClickScrollTo}>Skills</NavLink></li>
          <li><NavLink to="/achievements" onClick={handleClickScrollTo}>Achievements</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
