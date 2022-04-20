// import Template from './Template';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


// This is the default boilerplate code created by Calvin.
// Do not delete

import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import AdminCRUD from './pages/AdminCRUD';
import PetProfile from './pages/PetProfile';
import AdminDashboard from './pages/AdminDashboard';
import { Link } from 'react-router-dom';
import Navigation from './components/SiteNavLinks/Navigation.js';


function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Router>
        <Routes>
            <Route path="/" exact element={<HomePage/>}></Route>
            <Route path="/AdminCRUD" element={<AdminCRUD/>}></Route>
            <Route path="/PetProfile" element={<PetProfile/>}></Route>
			<Route path="/AdminDashboard" element={<AdminDashboard/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


/* DO NOT DELETE

// You un-comment the code below to test the backend architecture that we are trying to implement.
// The page should load accounts from the db, and allow you insert new records.

import React, {useState, useEffect} from 'react'
import axios from 'axios';

const App = function () {
	const [accounts, setAccounts] = useState(null); // prev users, setUsers

	const [type, setType] = useState("");
	const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
	useEffect(() => {
		axios
			.get("/api/accounts") // prev users
			.then((accounts) => setAccounts(accounts))
			.catch((err) => console.log(err));
	}, []);

	function submitForm() {
		if (type === "") {
			alert("Please fill the type field. Accepted values are User or ShelterAdmin");
			return;
		}
		if (first_name === "") {
			alert("Please fill the first name field");
			return;
		}
    if (last_name === "") {
			alert("Please fill the last name field");
			return;
		}
    if (username === "") {
			alert("Please fill the username field");
			return;
		}
    if (email === "") {
			alert("Please fill the email field");
			return;
		}
    if (password === "") {
			alert("Please fill the password field");
			return;
		}
		axios
			.post("/api/accounts", { // prev users
				type: type,
				first_name: first_name,
        last_name: last_name,
        username: username,
        email: email,
        password: password
			})
			.then(function () {
				alert("Account created successfully");
				window.location.reload();
			})
			.catch(function () {
				alert("Could not creat account. Please try again");
			});
	}
	return (
		<>
			<h1>My Project</h1>
			{accounts === null ? (
				<p>Loading...</p>
			) : accounts.length === 0 ? (
				<p>No account available</p>
			) : (
				<>
					<h2>Available Accounts</h2>
					<ol>
						{accounts.map((account, index) => (
							<li key={index}>
								Type: {account.type}, Email: {account.email}, First Name: {account.first_name}, Last Name: {account.last_name}, Username: {account.username}, Email: {account.email}, Password: {account.password}
							</li>
						))}
					</ol>
				</>
			)}

			<form onSubmit={submitForm}>
				<input
					onChange={(e) => setType(e.target.value)}
					type="text"
					placeholder="User type ('User' or 'ShelterAdmin')"
				/>
				<input
					onChange={(e) => setFirstname(e.target.value)}
					type="text"
					placeholder="First name"
				/>
        <input
					onChange={(e) => setLastname(e.target.value)}
					type="text"
					placeholder="Last name"
				/>
        <input
					onChange={(e) => setUsername(e.target.value)}
					type="text"
					placeholder="Username"
				/>
        <input
					onChange={(e) => setEmail(e.target.value)}
					type="text"
					placeholder="Email"
				/>
        <input
					onChange={(e) => setPassword(e.target.value)}
					type="text"
					placeholder="Password"
				/>
				<input type="submit" />
			</form>
		</>
	);
};
export default App
*/