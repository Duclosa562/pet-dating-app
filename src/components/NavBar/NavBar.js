import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as reactCookie from "react-cookie";

import { Button } from "@mui/material";
import "./NavBar.css";

function NavBar(props) {
  // cookie hooks
  const cookies = props.cookies;
  const setCookies = props.setCookies;
  const logOffHandler = props.setLoggedOff;
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [userData, setUserData] = React.useState({});

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
    setCookies("isLoggedIn", false, { path: "/" });
    setCookies("isAdmin", false, { path: "/" });
    setCookies("userData", {}, { path: "/" });
    // logOffHandler();
    navigate("/");
  }

  useEffect(() => {
    console.log("---NAVBAR --");
    console.log( cookies.isLoggedIn);
    console.log( cookies.isAdmin);
    console.log( cookies.userData);
    console.log("------------------");
  }, [cookies.isLoggedIn, cookies.isAdmin, cookies.userData]);
  
  return (
    <header className="navbar">
      <div className="navbar-title" onClick={() => navigate("/")}>
        Pet Dating App
        <i className="fa-solid fa-paw navbar-icon" />
      </div>
      <div className="navbar-button">{cookies.isLoggedIn === "true" && homeRoute()}</div>
      <div className="navbar-button">{cookies.isLoggedIn === "true" && searchRoute()}</div>
      <div className="navbar-button">
        {(cookies.isLoggedIn === "false") ? (
          <Button
            variant="text"
            size="large"
            sx={{ color: "black" }}
            onClick={() => navigate("/SignInPage")}
          >
            Login/Sign-Up
          </Button>
        ) : (
          <Button
            variant="text"
            size="large"
            sx={{ color: "black" }}
            onClick={logoutHandler}
          >
            Sign Out
          </Button>
        )}
      </div>
      {/* <div className="navbar-button">
        {cookies.isLoggedIn && (
          <Button
            variant="text"
            size="large"
            sx={{ color: "black" }}
            onClick={logoutHandler}
          >
            Sign Out
          </Button>
        )}
      </div> */}
    </header>
  );
}

export default NavBar;
