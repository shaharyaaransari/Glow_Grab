import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup"); // Redirect to the signup page
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <button onClick={handleSignupClick}>Signup</button> {/* Button to trigger the signup redirection */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
