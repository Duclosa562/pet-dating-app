import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import "./NavBar.css";

function NavBar(props) {
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

  /* This is an old function that handled my login state - had some bugs so used a different method instead. */
  // function signInOrOut() {
  //   if (props.isLoggedIn) {
  //     props.setIsLoggedIn(false);
  //     props.setIsAdmin(false);
  //     return (
  //       <Link to={"/"} style={{ textDecoration: "none" }}>
  //         <Button variant="text" size="large" sx={{ color: "black" }}>
  //           Sign Out
  //         </Button>
  //       </Link>
  //     );
  //   } else {
  //     return (
  //       <Link to={"/SignInPage"} style={{ textDecoration: "none" }}>
  //         <Button variant="text" size="large" sx={{ color: "black" }}>
  //           Sign In
  //         </Button>
  //       </Link>
  //     );
  //   }
  // }

  function logoutHandler() {
    props.setIsLoggedIn(false);
    props.setIsAdmin(false);
  }

  return (
    <header className="navbar">
      <div className="navbar-title">
        Pet Dating App
        <i class="fa-solid fa-paw navbar-icon"></i>
      </div>
      <div className="navbar-button">{props.isLoggedIn && homeRoute()}</div>
      <div className="navbar-button">{searchRoute()}</div>
      <div className="navbar-button">
        {!props.isLoggedIn && (
          <Link to={"/SignInPage"} style={{ textDecoration: "none" }}>
            <Button variant="text" size="large" sx={{ color: "black" }}>
              Login/Sign-Up
            </Button>
          </Link>
        )}
      </div>
      <div className="navbar-button">
        {props.isLoggedIn && (
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Button variant="text" size="large" sx={{ color: "black" }} onClick={logoutHandler}>
              Sign Out
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default NavBar;
