import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

import { Button } from "@mui/material";
import "./NavBar.css";

function NavBar(props) {
  // COOKies
  // const session = new Cookies();
  // let isLoggedIn = session.get("IsLoggedIn");
  // let isAdmin = session.get("IsAdmin");
  // console.log("NAVBAR SESSION: ", session.get("IsLoggedIn"), " -- ", session.get("IsAdmin"));
  
  const navigate = useNavigate();

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

  function logoutHandler() {
    props.setIsLoggedIn(false);
    props.setIsAdmin(false);
    navigate("/");
  }

  return (
    <header className="navbar">
      <div className="navbar-title" onClick={() => navigate("/")}>
        Pet Dating App
        <i className="fa-solid fa-paw navbar-icon" />
      </div>
      <div className="navbar-button">{props.isLoggedIn && homeRoute()}</div>
      <div className="navbar-button">{props.isLoggedIn && searchRoute()}</div>
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
          <Button variant="text" size="large" sx={{ color: "black" }} onClick={logoutHandler}>
            Sign Out
          </Button>
        )}
      </div>
    </header>
  );
}

export default NavBar;
