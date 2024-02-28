import logo from "../assets/logo.svg";
import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const handleToggle = () => {
    setDropDown((prevDropDown) => !prevDropDown);
  };

  useEffect(() => {
    const root = document.querySelector(".App");
    if (dropDown) {
      root.classList.add("overlay-gradient");
    } else {
      root.classList.remove("overlay-gradient");
    }
  }, [dropDown]);
  return (
    <nav className=" section-padding top-padding primary-header">
      <a>
        <img src={logo} alt="manage logo" />
      </a>
      <ul className={`header-list ${dropDown ? "overlay" : ""}`}>
        <li>
          <a>Pricing</a>
        </li>
        <li>
          <a>Product</a>
        </li>
        <li>
          <a>About Us</a>
        </li>
        <li>
          <a>Careers</a>
        </li>
        <li>
          <a>Community</a>
        </li>
      </ul>
      <button className="button header-button">Get Started</button>
      <button className="mobile-nav-toggle" onClick={handleToggle}>
        <i className={`fa-solid fa-bars ${dropDown ? "hidden" : ""}`}></i>
        <i className={`fa-solid fa-xmark ${dropDown ? "" : "hidden"}`}></i>
      </button>
    </nav>
  );
};
/*
    Convert to links later
*/
export default Navbar;
