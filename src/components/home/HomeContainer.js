import React, { Fragment } from "react";

import Home from "./Home";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const HomeContainer = props => (
  <Fragment>
    <Home />
    <Portfolio />
    <Contact />
  </Fragment>
);

export default HomeContainer;
