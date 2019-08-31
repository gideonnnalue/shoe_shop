import React, { Component } from "react";
import Header from "../Header_footer/header";
import Footer from "../Header_footer/footer";

class Layout extends Component {
  state = {
    sideBarShown: false
  };

  toggleSideBar = () => {
    this.setState({
      sideBarShown: !this.state.sideBarShown
    });
  };
  render() {
    return (
      <div>
        <Header
          sideBarShown={this.state.sideBarShown}
          toggleSideBar={this.toggleSideBar}
        />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
