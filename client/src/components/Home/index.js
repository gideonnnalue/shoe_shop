import React, { Component } from "react";
import Carousel from "./Carousel";

import Services from "./Services";
import FirstImagePromo from "./FirstImagePromo";
import SimpleProducts from "../utils/SimpleProducts";

class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <Services />
        <FirstImagePromo />
        <SimpleProducts />
        Home
      </div>
    );
  }
}

export default Home;
