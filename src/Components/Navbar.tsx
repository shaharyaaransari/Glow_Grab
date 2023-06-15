import React from "react";
import Logo from "./Logo";
import NavBarOptions from "./NavBarOptions";

// Styles Components
import { NavBarOuter } from "../Styles/NavBarStyles";
import NavBarCartAndLogIn from "./NavBarCartAndLogIn";

const Navbar = () => {
  return (
    <NavBarOuter>
      <Logo />
      <NavBarOptions />
      <NavBarCartAndLogIn />
    </NavBarOuter>
  );
};

export default Navbar;
