import React from "react";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div id="banner">
      <div className="wrapper">
        <div className="bnr_con">
          <div className="bnr_title">
            <Fade direction="left" cascade>
              <h1>
                <span>Dan</span> Quesada
              </h1>
              <h4>Web Developer</h4>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
