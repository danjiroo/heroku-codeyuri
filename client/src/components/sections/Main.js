import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Skills from "../pages/Skills";
import Achievements from "../pages/Achievements";
import NoMatch from "../pages/NoMatch";

const Main = () => {
  return (
    <main>
      <div className="wrapper">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/skills" component={Skills} />
          <Route path="/achievements" component={Achievements} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </main>
  );
};

export default Main;
