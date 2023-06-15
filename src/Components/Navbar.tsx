import React from "react";
import Logo from "../Elements/Logo";
import NavBarOptions from "../Elements/NavBarOptions";
import NavBarCartAndLogIn from "../Elements/NavBarCartAndLogIn";

// Styles Components
import { NavBarOuter } from "../Styles/NavBarStyles";

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
