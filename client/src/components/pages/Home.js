import React from "react";
import { NavLink } from "react-router-dom";
import { LightSpeed } from "react-awesome-reveal";

import Dan from "../../assets/images/dan-about.png";

const Home = () => {
  return (
    <div className="main_con home_con">
      <div className="main_left">
        <figure>
          <img src={Dan} alt="dan quesada iii" />
        </figure>
      </div>
      <div className="main_right">
        <LightSpeed direction="right" cascade>
          <h2>danjiro</h2>
          <h4>Welcome to my site!</h4>
        </LightSpeed>
        <p>This site contains my current and previous projects created with ReactJS.</p>
        <p>Also, if you would like to know me more, click <NavLink to="/about">here!</NavLink></p>
        <p>Happy viewing!</p>
      </div>
    </div>
  );
};

export default Home;
