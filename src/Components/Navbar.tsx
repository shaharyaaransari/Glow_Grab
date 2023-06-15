import React from "react";
import Logo from "./Logo";

// Styles Components
import { NavBarOuter } from "../Styles/NavBarStyles";

const Navbar = () => {
  return (
    <NavBarOuter>
      <Logo />
    </NavBarOuter>
  );
};

export default Navbar;
