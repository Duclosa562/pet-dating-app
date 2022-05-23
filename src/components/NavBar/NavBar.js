import React from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

import { Button } from "@mui/material";
import "./NavBar.css";


function NavBar() {
  const cookies = new Cookies();
  console.log("NAV COOKIE IS logged in")
  const loggedIn = cookies.get('isLoggedIn') 
  console.log("loggedIn: ", loggedIn);

  const isAdmin = cookies.get("IsAdmin");
  console.log("isAdmin: ", isAdmin);

  const accountData = cookies.get("accountData");
  console.log("accountData: " ,accountData)
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

  // if ()

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
