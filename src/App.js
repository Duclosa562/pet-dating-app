import Template from './Template';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AdminCRUD from './pages/AdminCRUD';
import PetProfile from './pages/PetProfile';
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
