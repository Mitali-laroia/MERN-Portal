import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

import { UserContext } from "../App";

//style for logo 
const style = {
  width: "30px",
  height: "30px",
};

const Navbar = () => {
  const { state } = useContext(UserContext);

  //display login/logout button with checking user current status
  const RenderList = () => {
    if (state) {
      return (
        <>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
             Home {/* Home <span className="sr-only">(current)</span> */}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">
              Logout
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
             Home {/* Home <span className="sr-only">(current)</span> */}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              Registration
            </NavLink>
          </li>
        </>
      );
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand mb-0 h1" to="/">
          {/* <img
            src={logo}
            style={style}
            className="d-inline-block align-top"
            alt="brandlogo"
            height="100px"
          ></img> */}
          {/* <span style={{ fontSize: "xx-large" }}>A</span> */}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <RenderList />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;