import React from "react";

import Loader from "./Loader";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer_con">
          <a
            className="ghub"
            href="https://github.com/codeyuri"
            target="_blank"
          ></a>
          <div className="copyright">
            Copyright<q></q>
            <q className="qnone"> | </q>All Rights Reserved<q></q>
            <q className="qnone"> | </q>2020
          </div>
        </div>
      </div>
      <Loader />
    </footer>
  );
};

export default Footer;
