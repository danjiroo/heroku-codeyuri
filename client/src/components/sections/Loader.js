import React from "react";
import { Slide } from "react-awesome-reveal";

const Loader = ({ direction }) => {
  return (
    <Slide direction={direction}>
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Slide>
  );
};

export default Loader;
