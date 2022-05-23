import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import { useCookies } from 'react-cookie';

import "./NavBar.css";

function NavBar(props) {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(['isLoggedIn', 'isAdmin', 'userData']);

  let isLoggedIn = cookies["isLoggedIn"];

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

    setCookies('isLoggedIn', false, { path: "/" });
    setCookies('isAdmin', false, { path: "/" });
    setCookies('userData', {}, { path: "/" });
    navigate("/");
  }

  return (
    <header className="navbar">
      <div className="navbar-title">
        Pet Dating App
        <i className="fa-solid fa-paw navbar-icon" />
      </div>
      <div className="navbar-button">{isLoggedIn === "true" && homeRoute()}</div>
      <div className="navbar-button">{isLoggedIn === "true" && searchRoute()}</div>
      <div className="navbar-button">
        {isLoggedIn === "false" && (
          <Link to={"/SignInPage"} style={{ textDecoration: "none" }}>
            <Button variant="text" size="large" sx={{ color: "black" }}>
              Login/Sign-Up
            </Button>
          </Link>
        )}
      </div>
      <div className="navbar-button">
        {isLoggedIn === "true" && (
          <Button variant="text" size="large" sx={{ color: "black" }} onClick={logoutHandler}>
            Sign Out
          </Button>
        )}
      </div>
    </header>
  );
}

export default NavBar;
