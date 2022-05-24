/* eslint-disable no-unused-vars */
// import Template from './Template';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

// This is the default boilerplate code created by Calvin.
// Do not delete

import logo from "./logo.svg";
import "./App.css";

// Routes and Pages imports
import HomePage from "./pages/HomePage";
import AdminCRUD from "./pages/AdminCRUD";
import AdminEdit from "./pages/AdminEdit";
import PetProfile from "./pages/PetProfile";
import SearchPage from "./pages/SearchPage";
import AdminCreateAcc from "./pages/AdminCreateAcc";
import AdminDashboard from "./pages/AdminDashboard";
import UserCreateAcc from "./pages/UserCreateAcc";
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/SignInPage";
import CreateAccount from "./pages/CreateAccount";
import Dashboard from "./pages/DashboardHandler";
import AdoptPet_Finished from "./pages/AdoptPet_Finished";

import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./components/SiteNavLinks/Navigation.js";
import UserDashboard from "./pages/UserDashboard";
import NavBar from "./components/NavBar/NavBar";
import AdoptPet from "./pages/AdoptPet";
import { useCookies } from 'react-cookie';
import Cookies from 'universal-cookie';

function App() {
  // Login states
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [accountData, setAccountData] = React.useState({});

  const [cookies, setCookies] = useCookies(['isLoggedIn', 'isAdmin', 'userData']);

  console.log(cookies['isLoggedIn'], cookies['isAdmin'], cookies['userData']);
  // if (typeof cookies['isLoggedIn'] === "undefined") {
  //   setCookies('isLoggedIn', false, { path: "/" });
  //   setCookies('isAdmin', false, { path: "/" });
  //   setCookies('userData', {}, { path: "/" });
  // }
  console.log("APP: ", cookies);

//   React.useEffect(() => {
//     setCookies('isLoggedIn', false, { path: "/" });
//     setCookies('isAdmin', false, { path: "/" });
//     setCookies('userData', {}, { path: "/" });
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])


  // This should be removed eventually.
  const loginCheck = () => {
    console.log("isLoggedIn: ", isLoggedIn, " isAdmin: ", isAdmin);
  }


//   let redirectToUrl;
//   	if(){

// 	  }
  // To propagate prop to edit up tree and down for edit page
  return (
    <div className="App">
      <header className="App-header"></header>
      <Router>
        <NavBar 
          loginCheck={loginCheck} 
          setIsLoggedIn={setIsLoggedIn} 
          setIsAdmin={setIsAdmin}
          isLoggedIn = {isLoggedIn}
          cookies={cookies}
          setCookies={setCookies}
        />
        <Routes>
          <Route path="/" exact element={<LandingPage />}></Route>
          <Route path="/AdminCRUD" element={<AdminCRUD />}></Route>
          <Route path="/AdminEdit" element={<AdminEdit />}></Route>
		  <Route path="/AdoptPet_Finished" element={<AdoptPet_Finished />}></Route>
          <Route path="/PetProfile/:pet_id" element={<PetProfile />}></Route>
          <Route path="/Search" element={<SearchPage />}></Route>
          <Route path="/AdminDashboard" element={<AdminDashboard />}></Route>
		  <Route path="/UserDashboard" element={<UserDashboard />}></Route>
          <Route path="/AdminCreateAcc" element={<AdminCreateAcc />}></Route>
          <Route path="/UserCreateAcc" element={<UserCreateAcc />}></Route>
          <Route path="/LandingPage" element={<LandingPage />}></Route>
		  <Route path="/AdoptPet/:pet_id" element={<AdoptPet />}></Route>
          <Route path="/SignInPage" element={<SignInPage 
            setIsLoggedIn={setIsLoggedIn} 
            setIsAdmin={setIsAdmin} 
            setAccountData={setAccountData}
            cookies={cookies}
            setCookies={setCookies}
            />}></Route>
          <Route path="/CreateAccount" element={<CreateAccount />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
