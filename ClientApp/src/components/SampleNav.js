import React from "react";
import { Nav, Navbar, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import "./SampleNav.scss";

export default class SampleNav extends React.Component {
  render() {
    return (
      <Navbar>
        <Nav>
          <NavLink tag={Link} to="/mfe1">
            Home
          </NavLink>
          <NavLink tag={Link} to="/mfe1/counter">
            Counter
          </NavLink>
        </Nav>
      </Navbar>
    );
  }
}
