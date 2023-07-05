import { NavLink } from "react-router-dom";
import { Nav } from "./Style";

import React from "react";

function nav() {
  return (
    <>
      <Nav>
        <NavLink to="/menu">MENU</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </Nav>
    </>
  );
}

export default nav;
