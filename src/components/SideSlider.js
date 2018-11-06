import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";

export class SideSlider extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">
          <span>Home</span>
        </a>
        <a id="about" className="menu-item" href="/about">
          <span>About</span>
        </a>
        <a id="contact" className="menu-item" href="/contact">
          <span>Contact</span>
        </a>
        <a onClick={this.showSettings} className="menu-item--small" href="">
          <span>Settings</span>
        </a>
      </Menu>
    );
  }
}
