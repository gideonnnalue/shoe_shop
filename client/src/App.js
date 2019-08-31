import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./App.css";
import "./assets/styles/sass/style.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Layout from "./components/hoc/Layout";

class App extends Component {
  render() {
    return (
      <Layout>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </Layout>
    );
  }
}

export default App;
