import React from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/Home'
import People from './components/People'
import Planets from './components/Planets'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
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
