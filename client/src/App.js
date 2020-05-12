import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/sections/Header";
import Banner from "./components/sections/Banner";
import Nav from "./components/sections/Nav";
import Main from "./components/sections/Main";
import Footer from "./components/sections/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Banner />
      <Nav />
      <Main />
      <Footer />
    </Router>
  );
};

export default App;
