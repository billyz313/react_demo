import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

export class Navigation extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      // to share the state, we must maintain it ourselves
      open: true
    };
  }
  render() {
    return (
      <React.Fragment>
        <Navbar inverse collapseOnSelect style={{ marginBottom: "0" }}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">React Demo</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                About
              </NavItem>
              <NavItem eventKey={2} href="#">
                Contact
              </NavItem>
              <NavItem eventKey={3} href="#">
                Settings
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={2} href="#">
                Login
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}
