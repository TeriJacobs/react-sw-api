// data fetching from API
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Home from './components/Home'
import People from './components/People'
import Planets from './components/Planets'
import Contacts from './components/Contacts'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Image from 'react-bootstrap/Image'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <div>
      <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
        </Routes>
        <Routes>
          <Route path="people" element={<People/>}>
          </Route>
        </Routes>
        <Routes>
          <Route path="planets" element={<Planets/>}>
          </Route>
        </Routes>
        <Routes>
          <Route path="contacts" element={<Contacts/>}>
          </Route>
        </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
