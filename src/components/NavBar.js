import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import { People } from './People';

// export default function NavBar(){
//     return(
//         <div>
//             <ul>
//                 <li name="start wars API">start wars API</li>
//                 <li name="name=people">people</li>
//             </ul>
//         </div>
//     )
// }

export default class NavBar extends Component {
    render(){
        return (
        <div>
            <Navbar bg="dark" variant="dark"
            sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand>
            <img className='App-logo'src="star-wars-logo.jpg" width="100rem"/>
            </Navbar.Brand>

            <Navbar.Toggle className="coloring" />
            <Navbar.Collapse>
            <Nav  className="d-flex">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/people">People</Nav.Link>
                <Nav.Link as={Link} to="/planets">Planets</Nav.Link>
                <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
            </Nav>
            </Navbar.Collapse>

        </Navbar>
        </div>

    )}
}