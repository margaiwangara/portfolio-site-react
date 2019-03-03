import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

import HomeContainer from "./components/home/HomeContainer";

import TestPage from "./components/pages/TestPage";

import "./App.css";
import { Provider } from "./statehandlers/context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="container">
            <Header />
            <div className="content">
              <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route exact path="/testpage" component={TestPage} />
              </Switch>
              <Footer />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
