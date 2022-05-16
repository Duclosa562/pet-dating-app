import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import "./NavBar.css";


function NavBar() {
  function homeRoute() {
    return (
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Button variant="text" size="large" sx={{ color: "black" }}>
          Home
        </Button>
      </Link>
    );
  }

  function searchRoute() {
    return (
      <Link to={"/Search"} style={{ textDecoration: "none" }}>
        <Button variant="text" size="large" sx={{ color: "black" }}>
          Search
        </Button>
      </Link>
    );
  }

  function signInOrOut() {
    return (
      <Link to={"/SignInPage"} style={{ textDecoration: "none" }}>
        <Button variant="text" size="large" sx={{ color: "black" }}>
          Sign In
        </Button>
      </Link>
    )
  }
  return (
    <header className="navbar">
      <div className="navbar-title">
        Pet Dating App
        <i class="fa-solid fa-paw navbar-icon"></i>
      </div>
      <div className="navbar-button">{homeRoute()}</div>
      <div className="navbar-button">{searchRoute()}</div>
      <div className="navbar-button">{signInOrOut()}</div>
    </header>
  );
}

export default NavBar;
