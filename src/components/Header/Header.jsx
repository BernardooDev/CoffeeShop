import { Header } from "./Style";
import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import CoffeeBeans from "../CoffeeBeans/Coffeebeans";

import React from "react";

function header() {
  return (
    <>
      <Header>
        <CoffeeBeans />
        <Logo></Logo>
        <Nav></Nav>
      </Header>
    </>
  );
}

export default header;
